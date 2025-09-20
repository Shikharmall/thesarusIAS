import { useState } from "react";
import { Trash2, Search, Eye, Smile, Meh, Frown, CheckCircle, PlusSquare, Upload } from "lucide-react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { themeColor } from "@renderer/utils/constant/Color";
import AddCourseModal from "@renderer/components/courses/AddCourseModal";
import { useNavigate } from "react-router-dom";
import { QuestionBank } from "@renderer/utils/types/questionbank";
import DeleteModal from "@renderer/components/common/DeleteModal";

// interface Course {
//     id: number;
//     name: string;
//     candidates: number;
//     createdBy: string;
// }

export default function QuestionBankScreen() {
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState<boolean>(false);
    // const [courses, setCourses] = useState<Course[]>([
    //     { id: 3, name: "Testing Course", candidates: 1, createdBy: "demo@justexam.in" },
    //     { id: 2, name: "Class VI", candidates: 3, createdBy: "demo@justexam.in" },
    //     { id: 1, name: "NEET UG", candidates: 13, createdBy: "demo@justexam.in" },
    // ]);

    const [questionbanks] = useState<QuestionBank[]>([
        {
            id: 1,
            image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
            name: "UPSC GS I",
            createdBy: "thesarus@gmail.com",
            totalQuestions: { easy: 0, moderate: 0, hard: 0 },
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
            name: "UPSC GS II",
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
            name: "Railway NTPC",
            createdBy: "thesarus@gmail.com",
            totalQuestions: { easy: 0, moderate: 0, hard: 0 },
        }]);

    // const [newCourse, setNewCourse] = useState("");
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // const handleAddBank = () => {
    //     if (!newCourse.trim()) return;
    //     const newId = courses.length ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    //     const course: Course = {
    //         id: newId,
    //         name: newCourse,
    //         candidates: 0,
    //         createdBy: "demo@justexam.in",
    //     };
    //     setCourses([course, ...courses]);
    //     setNewCourse("");
    // };

    // const handleDelete = (id: number) => {
    //     setCourses(courses.filter(c => c.id !== id));
    // };

    // const handleEdit = (id: number, newName: string) => {
    //     setCourses(courses.map(c => (c.id === id ? { ...c, name: newName } : c)));
    // };

    // const [currentPage, setCurrentPage] = useState(1);
    // const rowsPerPage = 5;

    // // Filtered + Paginated Data
    // const filteredCourses = courses.filter(course =>
    //     course.name.toLowerCase().includes(search.toLowerCase())
    // );

    // const totalPages = Math.ceil(filteredCourses.length / rowsPerPage);
    // const paginatedCourses = filteredCourses.slice(
    //     (currentPage - 1) * rowsPerPage,
    //     currentPage * rowsPerPage
    // );

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Question Banks" isBack={false} isAdd={false} />

                {/* Content */}
                <div className="my-5">

                    <div className="border border-[#eee] mb-5">
                        {/* Header Buttons */}
                        <div className="flex justify-end items-center bg-gray-100 p-4">
                            {/* <button
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                                style={{
                                    backgroundColor: themeColor?.primary
                                }}
                                onClick={() => setIsOpen(true)}
                            // onClick={handleAddCourse}
                            >
                                <PlusCircle size={18} /> Add Course/Batch
                            </button> */}
                            <div className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    placeholder="Search"
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

                        <div className="flex items-end justify-between gap-3 p-4">
                            <input
                                type="text"
                                placeholder="Question Bank Name"
                                //value={search}
                                //onChange={e => setSearch(e.target.value)}
                                className="border border-[#eee] px-3 py-2 rounded-xs bg-white w-full"
                            />

                            <button
                                className="flex items-center gap-2 text-white px-4 py-2 rounded-sm hover:bg-blue-700 cursor-pointer"
                                style={{ backgroundColor: themeColor?.primary }}
                            >
                                {/* <PlusCircle size={18} />  */}
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-md">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border border-[#eee]">S. No.</th>
                                    <th className="p-2 border border-[#eee]">Image</th>
                                    <th className="p-2 border border-[#eee]">Question Bank Name</th>
                                    <th className="p-2 border border-[#eee]">Total Questions</th>
                                    <th className="p-2 border border-[#eee]">Questions</th>
                                    <th className="p-2 border border-[#eee]">Created By</th>
                                    <th className="p-2 border border-[#eee]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questionbanks?.map((questionbank, index) => (
                                    <tr key={questionbank.id} className="text-center">
                                        <td className="border border-[#eee] p-2">{index + 1}</td>
                                        <td className="border border-[#eee] p-2">
                                            {
                                                questionbank?.image ? (
                                                    <div className="flex justify-center">
                                                        <img src={questionbank?.image} alt={questionbank?.name} className="h-20" />
                                                    </div>
                                                ) :
                                                    <>No Image</>
                                            }
                                        </td>
                                        <td className="border border-[#eee] p-2">{questionbank?.name}</td>
                                        <td className="border border-[#eee] p-2">
                                            <div className="grid grid-cols-1 gap-2 text-sm">
                                                <div className="flex items-center gap-1 text-green-500">
                                                    <Smile size={16} />
                                                    <span className="font-medium">Easy</span>
                                                    <span>({questionbank?.totalQuestions?.easy || 0})</span>
                                                </div>

                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    <Meh size={16} />
                                                    <span className="font-medium">Moderate</span>
                                                    <span>({questionbank?.totalQuestions?.moderate || 0})</span>
                                                </div>

                                                <div className="flex items-center gap-1 text-red-500">
                                                    <Frown size={16} />
                                                    <span className="font-medium">Hard</span>
                                                    <span>({questionbank?.totalQuestions?.hard || 0})</span>
                                                </div>

                                                <div className="flex items-center gap-1 text-blue-500">
                                                    <CheckCircle size={16} />
                                                    <span className="font-medium">Total</span>
                                                    <span>({(questionbank?.totalQuestions?.easy || 0) +
                                                        (questionbank?.totalQuestions?.moderate || 0) +
                                                        (questionbank?.totalQuestions?.hard || 0)})</span>
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
                                        <td className="border border-[#eee] p-2">
                                            <div className="flex flex-col">
                                                <span className="text-gray-400 text-sm">{questionbank?.createdBy}</span>
                                            </div>
                                        </td>
                                        <td className="border border-[#eee] p-2">
                                            <div className="grid grid-cols-1 gap-2">
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex justify-start items-center"
                                                    onClick={() => navigate(`/questionBankList/${questionbank?.id}`)}
                                                >
                                                    <Eye className="w-5 h-5" />
                                                    <span className="font-medium ml-1">View</span>
                                                </button>
                                                {/* <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer flex justify-start items-center"
                                                >
                                                    <Pencil className="w-5 h-5" />
                                                    <span className="font-medium ml-1">Edit</span>
                                                </button> */}
                                                <button
                                                    className="text-red-600 hover:text-red-800 cursor-pointer flex justify-start items-center"
                                                    onClick={() => { setIsDelete(true) }}
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                    <span className="font-medium ml-1">Delete</span>
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

                <DeleteModal isOpen={isDelete} onClose={() => { setIsDelete(false) }} onDelete={() => { }} />

                <AddCourseModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </main >
        </div >
    );
}
