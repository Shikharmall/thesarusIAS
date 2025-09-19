import { useEffect, useMemo, useState, ChangeEvent } from "react";
import { Pencil, Trash2, Search, Save, PlusSquare } from "lucide-react";
import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { themeColor } from "@renderer/utils/constant/Color";
import { useNavigate, useParams } from "react-router-dom";
import { QuestionBank } from "@renderer/utils/types/questionbank";
import DeleteModal from "@renderer/components/common/DeleteModal";
import { questionsUPSCGS2 } from "@renderer/data/examData";
import DOMPurify from "dompurify";
import EditQuestionModal from "@renderer/components/questionbank/EditQuestionModal";

export default function TestDetailsScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questionBank, setQuestionBank] = useState<QuestionBank>();
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [questionbanks] = useState<QuestionBank[]>([
    { id: 1, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", name: "UPSC GS I", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 2, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", name: "UPSC GS II", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 3, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png", name: "UPPCS GS-I", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 4, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png", name: "UPPCS GS-II", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 5, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png", name: "SSC CGL", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 6, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png", name: "SSC CHSL", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 7, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png", name: "SSC MTS", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
    { id: 8, image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg", name: "Railway NTPC", createdBy: "thesarus@gmail.com", totalQuestions: { easy: 0, moderate: 0, hard: 0 } },
  ]);

  const [search, setSearch] = useState("");

  // ✅ fixed form state
  const [form, setForm] = useState({
    name: "",
    image: "",
    language: "English",
    duration: 60,
    startDate: "",
    startTime: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const filteredQuestions = useMemo(
    () => questionsUPSCGS2.filter(q => q.question.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / rowsPerPage));

  const paginatedQuestions = useMemo(
    () => filteredQuestions.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage),
    [filteredQuestions, currentPage]
  );

  useEffect(() => setCurrentPage(1), [search]);

  useEffect(() => {
    if (id) {
      const data = questionbanks.find(item => item.id === Number(id));
      if (data) {
        setQuestionBank(data);
        setForm({
          name: data.name,
          image: data.image || "",
          language: "English",
          duration: 60,
          startDate: "",
          startTime: "",
        });
      }
    }
  }, [id, questionbanks]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "duration" ? Number(value) : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex">
      <SideBar />
      <main className="flex-1 ml-50 mt-15">
        <Header />
        <SubHeader title={questionBank?.name} isBack={true} isAdd={false} />

        {/* Content */}
        <div className="my-5">
          {/* Header + Search */}
          <div className="border border-[#eee] mb-5">
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                style={{ backgroundColor: themeColor.primary }}
                onClick={() => navigate(`/addQuestion/${1}`)}
              >
                <PlusSquare size={18} /> Add Questions
              </button>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="border border-[#eee] px-3 py-2 rounded-xs bg-white"
                />
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4 text-sm">
              {/* Image */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Image :</label>
                {form.image ? <img src={form.image} alt={form.name} className="h-20" /> : "No Image"}
              </div>

              {/* Exam Name */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Exam Name :</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter exam name"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Mode of Language */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Language :</label>
                <input
                  type="text"
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                  placeholder="Enter language"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Duration */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Duration (min) :</label>
                <input
                  type="number"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="Enter duration"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Date :</label>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Time */}
              <div className="flex items-center space-x-4">
                <label className="w-40 font-medium text-gray-700">Start Time :</label>
                <input
                  type="time"
                  name="startTime"
                  value={form.startTime}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* MCQ Section Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-[#d4d2d2] px-2 py-1">MCQ Section Name</th>
                      <th className="border border-[#d4d2d2] px-2 py-1">Marks/Q</th>
                      <th className="border border-[#d4d2d2] px-2 py-1">Total Q</th>
                      <th className="border border-[#d4d2d2] px-2 py-1">-ive Marks (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, idx) => (
                      <tr key={idx}>
                        <td className="border border-[#d4d2d2] px-2 py-1">
                          <input className="w-full border border-[#eee] px-2 py-1" />
                        </td>
                        <td className="border border-[#d4d2d2] px-2 py-1">
                          <input className="w-full border border-[#eee] px-2 py-1" />
                        </td>
                        <td className="border border-[#d4d2d2] px-2 py-1">
                          <input className="w-full border border-[#eee] px-2 py-1" />
                        </td>
                        <td className="border border-[#d4d2d2] px-2 py-1">
                          <input className="w-full border border-[#eee] px-2 py-1" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Save */}
            <div className="flex justify-end gap-3 p-4">
              <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
                style={{ backgroundColor: themeColor.primary }}
              >
                <Save size={18} /> Save
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border border-[#eee]">S. No.</th>
                  <th className="p-2 border border-[#eee]">Question</th>
                  <th className="p-2 border border-[#eee]">Options (Solution if any)</th>
                </tr>
              </thead>
              <tbody>
                {paginatedQuestions.map((question, index) => (
                  <tr key={question.id} className="text-center">
                    <td className="border border-[#eee] p-2">{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td className="border border-[#eee] p-2 text-start">
                      {/* Action buttons */}
                      <div className="flex justify-end gap-2">
                        {question?.difficulty && (
                          <span
                            className={`uppercase text-xs px-3 py-1 rounded-full font-medium border
                              ${question?.difficulty === "easy"
                                ? "text-green-600 bg-green-50 border-green-600"
                                : question?.difficulty === "moderate"
                                  ? "text-yellow-600 bg-yellow-50 border-yellow-600"
                                  : "text-red-600 bg-red-50 border-red-600"
                              }`}
                          >
                            {question?.difficulty}
                          </span>
                        )}
                        <button
                          className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer"
                          onClick={() => setIsOpen(true)}
                          title="Edit this question"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 flex items-center cursor-pointer"
                          onClick={() => setIsDelete(true)}
                          title="Delete this question"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div
                        className="text-base leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.question) }}
                      />
                    </td>
                    <td className="border border-[#eee] p-2 text-start">
                      {question.options.map((opt, i) => (
                        <div key={i} className="flex gap-3">
                          <span>{["I.", "II.", "III.", "IV."][i]}</span>
                          <div
                            className="text-base leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1"
                            style={{
                              color: opt?.isCorrect ? "green" : "",
                              fontWeight: opt?.isCorrect ? 500 : 400,
                            }}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(opt?.label) }}
                          />
                        </div>
                      ))}
                      <div className="border-t border-[#eee] mt-2 pt-1">
                        <span>Solution: </span>
                        {question.solution ? (
                          <div
                            className="text-base leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_li]:my-1"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question.solution) }}
                          />
                        ) : (
                          "No solution"
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {(currentPage - 1) * rowsPerPage + 1}–
                {Math.min(currentPage * rowsPerPage, filteredQuestions.length)} of {filteredQuestions.length}
              </span>
              <div className="flex gap-1">
                <button
                  className="px-3 py-1 border rounded disabled:opacity-50"
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="px-3 py-1 border bg-blue-600 text-white rounded">
                  {currentPage} / {totalPages}
                </span>
                <button
                  className="px-3 py-1 border rounded disabled:opacity-50"
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <DeleteModal isOpen={isDelete} onClose={() => setIsDelete(false)} onDelete={() => { }} />
        <EditQuestionModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
    </div>
  );
}
