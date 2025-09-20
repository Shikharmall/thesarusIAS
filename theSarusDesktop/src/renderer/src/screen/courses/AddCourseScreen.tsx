import { useState } from "react";
import { Trash2, Search, Eye, Printer, Upload, PlusSquare } from "lucide-react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { themeColor } from "@renderer/utils/constant/Color";
import AddCourseModal from "@renderer/components/courses/AddCourseModal";
import { useNavigate } from "react-router-dom";

interface Course {
    id: number;
    status: "Active" | "Inactive";
    name: string;
    candidates: number;
    createdBy: string;
}

export default function AddCourseScreen() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([
        { id: 3, status: "Active", name: "Testing Course", candidates: 1, createdBy: "demo@justexam.in" },
        { id: 2, status: "Active", name: "Class VI", candidates: 3, createdBy: "demo@justexam.in" },
        { id: 1, status: "Active", name: "NEET UG", candidates: 13, createdBy: "demo@justexam.in" },
    ]);

    // const [newCourse, setNewCourse] = useState("");
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // const handleAddCourse = () => {
    //     if (!newCourse.trim()) return;
    //     const newId = courses.length ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    //     const course: Course = {
    //         id: newId,
    //         status: "Active",
    //         name: newCourse,
    //         candidates: 0,
    //         createdBy: "demo@justexam.in",
    //     };
    //     setCourses([course, ...courses]);
    //     setNewCourse("");
    // };

    const handleDelete = (id: number) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    // const handleEdit = (id: number, newName: string) => {
    //     setCourses(courses.map(c => (c.id === id ? { ...c, name: newName } : c)));
    // };

    // const [currentPage, setCurrentPage] = useState(1);
    // const rowsPerPage = 5;

    // Filtered + Paginated Data
    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase())
    );

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
                <SubHeader title="Add Courses" isBack={true} isAdd={false} />

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
                            // onClick={handleAddCourse}
                            >
                                <PlusSquare size={18} /> Add Course/Batch
                            </button>
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
                                    <th className="p-2 border border-[#eee]">Status</th>
                                    <th className="p-2 border border-[#eee]">Course/Batch</th>
                                    <th className="p-2 border border-[#eee]">Candidates</th>
                                    <th className="p-2 border border-[#eee]">Created By</th>
                                    <th className="p-2 border border-[#eee]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCourses.map((course, index) => (
                                    <tr key={course.id} className="text-center">
                                        <td className="border border-[#eee] p-2">{index + 1}</td>
                                        <td className="border border-[#eee] p-2">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${course.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {course.status}
                                            </span>
                                        </td>
                                        <td className="border border-[#eee] p-2">{course.name}</td>
                                        <td className="border border-[#eee] p-2">{course.candidates}</td>
                                        <td className="border border-[#eee] p-2">{course.createdBy}</td>
                                        <td className="border border-[#eee] p-2">
                                            <div className="flex justify-center items-center gap-3">
                                                <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                    onClick={() => {
                                                        navigate('/addCourseDetails/' + course.id)
                                                    }}
                                                    title="view"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                                {/* <button
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                    onClick={() => {
                                                        const newName = prompt("Edit Course/Batch Name:", course.name);
                                                        if (newName) handleEdit(course.id, newName);
                                                    }}
                                                    title="edit"
                                                >
                                                    <Pencil className="w-5 h-5" />
                                                </button> */}
                                                <button
                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                    onClick={() => handleDelete(course.id)}
                                                    title="delete"
                                                >
                                                    <Trash2 className="w-5 h-5" />
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
                        <div className="mt-2 text-sm text-gray-600">Record = {filteredCourses.length}</div>
                    </div>
                </div>
                <AddCourseModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </main >
        </div >
    );
}
