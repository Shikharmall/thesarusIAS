// CheckoutCard.tsx (React + TypeScript)
// Assumes Tailwind or simple CSS classes; replace with your styling system.
import { themeColor } from "@renderer/utils/constant/Color";
import { ArrowLeftCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CheckoutCardProps = {
    onSuccess?: (payload: any) => void;
    onError?: (error: any) => void;
};

function loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
        if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
            return resolve(true);
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export default function CheckoutScreen({

    onSuccess,
    onError,
}: CheckoutCardProps) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const orderIdFromServer = "suyyy111111";
    const amount = 500;
    const currency = "INR";
    const description = "Order Payment";

    const handlePay = async () => {
        setLoading(true);
        const ok = await loadRazorpayScript();
        if (!ok) {
            setLoading(false);
            onError?.({ message: "Failed to load Razorpay script" });
            return;
        }

        try {
            // 1) Create / fetch order on your server if you don't already have orderIdFromServer
            // Example: POST /api/create-order { amount }
            const orderResp = orderIdFromServer
                ? { id: orderIdFromServer }
                : await fetch("/api/create-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount: Math.round(amount * 100) }), // in paise
                }).then((r) => r.json());

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY as string, // publishable key in env (REACT_APP...)
                amount: Math.round(amount * 100), // paise
                currency,
                name: "Your Company",
                description,
                order_id: orderResp.id, // pass order id returned from server
                handler: function (response: any) {
                    // response contains: razorpay_payment_id, razorpay_order_id, razorpay_signature
                    onSuccess?.(response);
                },
                prefill: {
                    name: "", // optional
                    email: "",
                    contact: "",
                },
                notes: {
                    // optional metadata
                },
                theme: {
                    color: "#2563eb",
                },
            };

            // @ts-ignore
            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (resp: any) {
                onError?.(resp.error || resp);
            });
            rzp.open();
        } catch (err) {
            onError?.(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <div title={'Back'}>
                <ArrowLeftCircle size={25} color={themeColor?.secondary} className="cursor-pointer" onClick={() => navigate(-1)} />
            </div>
            <h3 className="text-lg font-medium mb-2">Order summary</h3>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div>Item</div>
                <div>Price</div>
            </div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="font-medium">Premium Plan</div>
                    <div className="text-xs text-gray-500">1 year access</div>
                </div>
                <div className="font-semibold">₹{amount.toFixed(2)}</div>
            </div>

            <button
                className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold disabled:opacity-60"
                onClick={handlePay}
                disabled={loading}
                aria-busy={loading}
            >
                {loading ? "Opening checkout..." : `Pay ₹${amount.toFixed(2)}`}
            </button>

            <div className="mt-3 text-xs text-gray-500">
                Secure payment by Razorpay. You will be redirected to a secure checkout.
            </div>
        </div>
    );
}
