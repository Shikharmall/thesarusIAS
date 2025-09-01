import React, { useState } from "react";

const CreateTicketScreen = ({ onSubmit }: { onSubmit: (ticket: any) => void }) => {
    const [form, setForm] = useState({
        title: "",
        category: "General",
        priority: "Medium",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...form, status: "Open", createdAt: new Date().toISOString() });
        setForm({ title: "", category: "General", priority: "Medium", description: "" });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg space-y-4"
        >
            <h2 className="text-xl font-semibold">Create Support Ticket</h2>

            <input
                type="text"
                name="title"
                placeholder="Ticket Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded-lg"
            />

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
            >
                <option>General</option>
                <option>Billing</option>
                <option>Technical</option>
                <option>Account</option>
            </select>

            <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <textarea
                name="description"
                placeholder="Describe your issue..."
                value={form.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border px-3 py-2 rounded-lg"
            />

            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Submit Ticket
            </button>
        </form>
    );
};

export default CreateTicketScreen;
