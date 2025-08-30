import { ArrowLeftCircle, PlusCircle } from "lucide-react";
import { themeColor } from "../../utils/Color";
import { useNavigate } from "react-router-dom";

const SubHeader = ({ title, isBack, isAdd }: any) => {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-sm my-3">

            {/* Back Icon */}
            {
                isBack && (
                    <ArrowLeftCircle size={25} color={themeColor?.secondary} className="cursor-pointer" onClick={() => navigate(-1)} />
                )
            }

            {/* Left: Title (optional) */}
            <h1 className="text-md font-semibold text-gray-800" style={{ color: themeColor?.primary }}>{title}</h1>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">

                {/* Add Icon */}
                {
                    isAdd && (

                        <PlusCircle size={25} color={themeColor?.secondary} className="cursor-pointer" />
                    )
                }

            </div>
        </header>
    );
};

export default SubHeader;
