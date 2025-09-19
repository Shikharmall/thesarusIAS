import { useState } from "react";
import { Pencil, Trash2, Search, Printer, Upload, PlusSquare, Computer } from "lucide-react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { themeColor } from "@renderer/utils/constant/Color";
import { QuestionBank } from "@renderer/utils/types/questionbank";
import { useNavigate } from "react-router-dom";
import AddTestModal from "@renderer/components/testpaper/AddTestModal";
import DeleteModal from "@renderer/components/common/DeleteModal";

interface Course {
    id: number;
    status: "Active" | "Inactive";
    name: string;
    candidates: number;
    createdBy: string;
}

export default function AddTestScreen() {
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false);
    const [courses] = useState<Course[]>([
        { id: 3, status: "Active", name: "Testing Course", candidates: 1, createdBy: "demo@justexam.in" },
        { id: 2, status: "Active", name: "Class VI", candidates: 3, createdBy: "demo@justexam.in" },
        { id: 1, status: "Active", name: "NEET UG", candidates: 13, createdBy: "demo@justexam.in" },
    ]);

    const [questionbanks] = useState<QuestionBank[]>([{
        id: 1,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
        name: "Union Public Service Commission",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
        name: "UPSC GS-II",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        name: "UPPCS GS-I",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
        name: "UPPCS GS-II",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
        name: "SSC CGL",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
        name: "SSC CHSL",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },

    },
    {
        id: 7,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
        name: "SSC MTS",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
        name: "Stripe Inc.",
        createdBy: "thesarus@gmail.com",
        totalQuestions: { easy: 0, moderate: 0, hard: 0 },
    }]);

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Filtered + Paginated Data
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
    const paginatedCourses = filteredCourses.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Online Tests" isBack={false} isAdd={false} />

                {/* Content */}
                <div className="my-5">

                    <div className="border border-[#eee] mb-5">
                        {/* Header Buttons */}
                        <div className="flex justify-between items-center bg-gray-100 p-4">
                            <button
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                                style={{
                                    backgroundColor: themeColor?.primary
                                }}
                                onClick={() => setIsOpen(true)}
                            >
                                <PlusSquare size={18} /> Add Online Test
                            </button>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    placeholder="Search Online Test"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="border border-[#eee] px-3 py-2 rounded-xs bg-white"
                                />
                                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Input */}

                        <div className="flex items-end justify-end gap-3 p-4">
                            <button
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-sm hover:bg-blue-700 cursor-pointer"
                                style={{ backgroundColor: themeColor?.primary }}
                            >
                                <Upload size={18} /> {/* Export Icon */}
                                Export
                            </button>

                            <button
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-sm hover:bg-blue-700 cursor-pointer"
                                style={{ backgroundColor: themeColor?.primary }}
                            >
                                <Printer size={18} /> {/* Print Icon */}
                                Print
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-md">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border border-[#eee]">S. No.</th>
                                    <th className="p-2 border border-[#eee]">Online Test</th>
                                    <th className="p-2 border border-[#eee]">Questions</th>
                                    <th className="p-2 border border-[#eee]">Created By</th>
                                    <th className="p-2 border border-[#eee]">Validate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questionbanks?.map((questionbank, index) => (
                                    <tr key={questionbank.id}>
                                        <td className="border border-[#eee] p-2 text-center">{index + 1}</td>
                                        <td className="border border-[#eee] px-2 py-2">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                                                        MCQ
                                                    </span>
                                                    <span className="text-red-600 font-medium">Class VI</span>
                                                    <span className="text-gray-700">» Life Process</span>
                                                    <Pencil className="w-4 h-4 text-blue-600 cursor-pointer" onClick={() => navigate(`/testDetails/${questionbank?.id}`)} />
                                                    <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" onClick={() => setIsDelete(true)} />
                                                    <span className="bg-green-200 text-green-700 text-xs px-2 py-0.5 rounded">
                                                        Active
                                                    </span>
                                                </div>

                                                <div className="text-gray-700">
                                                    Section 1 (10)
                                                </div>

                                                <div className="text-gray-800">
                                                    <span className="font-bold">TM</span> - 10 |{" "}
                                                    <span className="font-bold">TT</span> - 50 Mins |{" "}
                                                    <span className="font-bold">TQ</span> - 10{" "}
                                                    <span className="text-blue-600 cursor-pointer">(0 Ques.)</span>
                                                </div>

                                                <div>
                                                    <span className="text-blue-600 cursor-pointer font-medium">ENGLISH</span>{" "}
                                                    <span className="text-gray-500">
                                                        Duration:- 05/10/2020, 17:39 - 01/01/2021, 17:39
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border border-[#eee] p-2">
                                            <div className="grid grid-cols-1 gap-2">
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex justify-start items-center"
                                                    onClick={() => navigate(`/addQuestion/${questionbank?.id}`)}
                                                >
                                                    <PlusSquare className="w-5 h-5" />
                                                    <span className="font-medium ml-1">Add</span>
                                                </button>
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex justify-start items-center"
                                                >
                                                    <Upload className="w-5 h-5" />
                                                    <span className="font-medium ml-1">Excel</span>
                                                </button>
                                                <button
                                                    className="text-red-600 hover:text-red-800 cursor-pointer flex justify-start items-center"
                                                >
                                                    <Upload className="w-5 h-5" />
                                                    <span className="font-medium ml-1">Word</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border border-[#eee] p-2 text-center">
                                            <div className="flex flex-col">
                                                <span className="text-gray-400 text-sm">{questionbank?.createdBy}</span>
                                            </div>
                                        </td>
                                        <td className="border border-[#eee] p-2">
                                            <div className="grid grid-cols-1 gap-2">
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex justify-start items-center"
                                                >
                                                    <span className="font-medium mr-1">Validate</span>
                                                    <Computer className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-600">
                                Showing {(currentPage - 1) * rowsPerPage + 1}–
                                {Math.min(currentPage * rowsPerPage, filteredCourses.length)} of{" "}
                                {filteredCourses.length}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    className="px-3 py-1 border rounded-md disabled:opacity-50"
                                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 border rounded-md ${currentPage === page
                                            ? "bg-blue-600 text-white"
                                            : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    className="px-3 py-1 border rounded-md disabled:opacity-50"
                                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        </div> */}
                        <div className="mt-2 text-sm text-gray-600">Record = {questionbanks?.length}</div>
                    </div>
                </div>

                <DeleteModal isOpen={isDelete} onClose={() => setIsDelete(false)} onDelete={() => { }} />
                <AddTestModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </main >
        </div >
    );
}
