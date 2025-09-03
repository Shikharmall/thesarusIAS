import SideBar from '../components/dashboard/SideBar'
import Header from '../components/dashboard/Header'
import SubHeader from '../components/dashboard/SubHeader'
import { useState } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

const questions = [
    { id: 1, text: "In an Agile environment, what is the main dfdf   gf ggjhjg fd hh ghrfht tuutyu", type: "Single-select", topic: "Current Affairs", difficulty: "Easy", reviewers: ["A"], createdAt: "2h ago" },
    { id: 2, text: "In an Agile environment, what is the main...", type: "Multi-select", topic: "Geography", difficulty: "Medium", reviewers: ["A", "B"], createdAt: "2h ago" },
    { id: 3, text: "_____ is responsible for measuring the...", type: "Paragraph", topic: "History", difficulty: "Hard", reviewers: ["A"], createdAt: "2h ago" },
    { id: 4, text: "Write 200 words short essay on American...", type: "Fill in the blanks", topic: "Polity", difficulty: "Hard", reviewers: ["A", "B"], createdAt: "2h ago" },
];

export default function CreateExamPaperScreen() {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const toggleSelect = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === questions.length) {
            setSelectedIds([]); // unselect all
        } else {
            setSelectedIds(questions.map(q => q.id)); // select all
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 p-6">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Create Question Paper" isBack={true} isAdd={false} />

                {/* Table */}
                <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 display-none"
                                        >

                                        </button>
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.length === questions.length}
                                            onChange={toggleSelectAll}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">Question</th>
                                <th scope="col" className="px-6 py-3">Topic</th>
                                <th scope="col" className="px-6 py-3">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions?.map((q, index) => (
                                <React.Fragment key={index}>
                                    <tr className="bg-white border-b border-[#eee] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                                                    className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                                                >
                                                    {expandedRow === index ? (
                                                        <ChevronDown size={16} />
                                                    ) : (
                                                        <ChevronRight size={16} />
                                                    )}
                                                </button>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedIds.includes(q.id)}
                                                    onChange={() => toggleSelect(q.id)}
                                                    className="w-4 h-4 cursor-pointer"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {q.text}
                                        </td>
                                        <td className="px-6 py-4">{q.topic}</td>
                                        <td className="px-6 py-4">{q.type}</td>
                                    </tr>

                                    <AnimatePresence>
                                        {expandedRow === index && (
                                            <motion.tr
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="bg-gray-50 dark:bg-gray-700 overflow-hidden"
                                            >
                                                <td colSpan={4} className="px-6 py-4 text-gray-700 dark:text-gray-200">
                                                    <div className="space-y-2 text-sm">
                                                        <p><span className="font-semibold">Difficulty:</span> {q.difficulty}</p>
                                                        <p><span className="font-semibold">Reviewers:</span> {q.reviewers.join(", ")}</p>
                                                        <p><span className="font-semibold">Created:</span> {q.createdAt}</p>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        )}
                                    </AnimatePresence>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
