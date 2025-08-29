import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CreateSection({ onChangeTab }: any) {
    const [sections, setSections] = useState([
        { name: "", duration: "", description: "" },
    ]);

    const handleChange = (index: number, field: string, value: string) => {
        const newSections = [...sections];
        (newSections[index] as any)[field] = value;
        setSections(newSections);
    };

    const addSection = () => {
        setSections([...sections, { name: "", duration: "", description: "" }]);
    };

    const removeSection = (index: number) => {
        setSections(sections.filter((_, i) => i !== index));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">
                    Enter the details to add sections to exam paper
                </h2>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6 relative"
                        >
                            {/* Section Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Section Name
                                </label>
                                <input
                                    type="text"
                                    value={section.name}
                                    onChange={(e) =>
                                        handleChange(index, "name", e.target.value)
                                    }
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    value={section.duration}
                                    onChange={(e) =>
                                        handleChange(index, "duration", e.target.value)
                                    }
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            </div>

                            {/* Section description */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Section description
                                </label>
                                <textarea
                                    value={section.description}
                                    onChange={(e) =>
                                        handleChange(index, "description", e.target.value)
                                    }
                                    rows={3}
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            </div>

                            {/* Remove button */}
                            {sections.length > 1 && (
                                <button
                                    onClick={() => removeSection(index)}
                                    className="absolute -top-3 -right-3 bg-purple-100 text-purple-600 p-2 rounded-full hover:bg-purple-200 transition"
                                >
                                    <Minus size={16} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Add Section */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={addSection}
                        className="bg-purple-600 text-white rounded-full p-3 shadow hover:bg-purple-700 transition"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 mt-8">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition" onClick={() => onChangeTab(1)}>
                        Previous
                    </button>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                        Next
                    </button>
                    <button className="text-gray-600 hover:text-purple-600 transition">
                        Save and finish
                    </button>
                </div>

                <p className="text-xs text-gray-400 mt-3">
                    Note: You can create sections later as well
                </p>
            </div>
        </div>
    );
}

function Step({ active, text }: { active?: boolean; text: string }) {
    return (
        <div className="flex items-center space-x-2">
            <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${active ? "bg-purple-600 border-purple-600" : "border-gray-300"
                    }`}
            >
                {active && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
            </div>
            <span
                className={`text-sm font-medium ${active ? "text-purple-600" : "text-gray-400"
                    }`}
            >
                {text}
            </span>
        </div>
    );
}
