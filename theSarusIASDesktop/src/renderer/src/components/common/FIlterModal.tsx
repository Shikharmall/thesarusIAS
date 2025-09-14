// src/components/FilterModal.tsx
import React, { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { themeColor } from "../../utils/constant/Color";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    const [round, setRound] = useState("any");

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Modal content */}
                    <motion.div
                        className="bg-white w-[700px] max-h-[90vh] rounded-2xl shadow-xl overflow-hidden flex flex-col"
                        initial={{ y: 40, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 40, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-[#eee] px-6 py-4">
                            <div>
                                <h2 className="text-lg font-semibold">Filters for: All accounts</h2>
                                <p className="text-sm text-gray-500">
                                    See results in your view based on the filters you select here.
                                </p>
                            </div>
                            <button onClick={onClose} className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto flex gap-6">
                            {/* Filters (left) */}
                            <div className="flex flex-col gap-3 w-1/3 bg-[#fff] px-6 py-4">
                                {[
                                    "Question Type",
                                    "Question Level",
                                    "Date",
                                    //"Employee headcount",
                                    //"Revenue",
                                    //"Funding",
                                    //"Technology",
                                    //"Year founded",
                                ].map((filter) => (
                                    <button
                                        key={filter}
                                        style={{ color: themeColor?.primary }}
                                        className="px-3 py-2 text-sm font-medium border border-purple-200 rounded-xl hover:bg-purple-50 flex justify-between"
                                    >
                                        <span className="flex flex-row justify-center items-center">
                                            <AlertCircle className="w-4 h-4 text-gray-400 mr-3" />
                                            {filter}
                                        </span>
                                        <X className="w-4 h-4 text-gray-400" />
                                    </button>
                                ))}
                            </div>

                            {/* Funding (right) */}
                            <div className="flex-1 px-6 py-4 bg-[rgba(249,251,252,255)]">
                                <h3 className="font-medium mb-3">Funding</h3>
                                <div className="flex flex-col gap-4">
                                    {/* Radio */}
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={round === "any"}
                                                onChange={() => setRound("any")}
                                            />
                                            Any round
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={round === "last"}
                                                onChange={() => setRound("last")}
                                            />
                                            Last round
                                        </label>
                                    </div>

                                    {/* Funding date */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Funding date
                                        </label>
                                        <select className="w-full border rounded-lg px-3 py-2">
                                            <option>All times</option>
                                            <option>Last 6 months</option>
                                            <option>Last year</option>
                                        </select>
                                    </div>

                                    {/* Advanced */}
                                    <details className="border rounded-lg">
                                        <summary className="px-3 py-2 cursor-pointer font-medium text-gray-700">
                                            Advanced
                                        </summary>
                                        <div className="p-3 space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                                    Select last funding amount
                                                </label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Min"
                                                        className="w-1/2 border rounded-lg px-3 py-2"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Max"
                                                        className="w-1/2 border rounded-lg px-3 py-2"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                                    Select total funding amount
                                                </label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Min"
                                                        className="w-1/2 border rounded-lg px-3 py-2"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Max"
                                                        className="w-1/2 border rounded-lg px-3 py-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center border-t border-[#eee] px-6 py-4">
                            <span className="text-sm text-gray-600 flex flex-row justify-center items-center cursor-pointer">Results: 2,240  <AlertCircle size={18} className="mx-3" /> </span>
                            <div className="flex gap-3">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button className={`px-4 py-2 bg-[${themeColor?.primary}] text-white rounded-lg hover:bg-[${themeColor?.lightPrimary}] cursor-pointer`}>
                                    Apply filters
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FilterModal;
