import { themeColor } from "@renderer/utils/constant/Color";
import { ChangeEvent, useEffect, useState } from "react";

interface AddCourseModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface Section {
  name: string;
  marksPerQ: number;
  totalQ: number;
  negative: number; // %
}

export default function AddTestModal({ isOpen, setIsOpen }: AddCourseModalProps) {
  const [form, setForm] = useState({
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png",
    name: "",
    language: "English",
    duration: 60,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    totalMarks: 0,
    options: {
      proctor: false,
      password: false,
      showResult: false,
      answerReport: false,
      hideBack: false,
      hideMarkReview: false,
    },
  });

  const [sections, setSections] = useState<Section[]>([
    { name: "", marksPerQ: 1, totalQ: 0, negative: 0 },
  ]);

  // ✅ Auto calculate total marks whenever sections update
  useEffect(() => {
    const total = sections.reduce((sum, sec) => sum + sec.marksPerQ * sec.totalQ, 0);
    setForm((prev) => ({ ...prev, totalMarks: total }));
  }, [sections]);

  const handleSectionChange = (
    index: number,
    field: keyof Section,
    value: string | number
  ) => {
    const updated = [...sections];

    // Type assertion to let TS know this assignment is valid
    (updated[index][field] as string | number) =
      field === "marksPerQ" || field === "totalQ" || field === "negative"
        ? Number(value)
        : value;

    setSections(updated);
  };

  const addSection = () => {
    setSections([...sections, { name: "", marksPerQ: 1, totalQ: 0, negative: 0 }]);
  };

  const removeSection = (index: number) => {
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "duration" ? Number(value) : value,
    }));
  };

  if (!isOpen) return null; // ✅ Only render when open

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xs shadow-lg">
        {/* Header */}
        <div className="text-white text-lg font-semibold px-4 py-5 flex justify-between items-center rounded-t-xs"
          style={{ backgroundColor: themeColor?.primary }}
        >
          <span>Add Online Test</span>
          <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Form */}
          <div className="space-y-4 text-sm">
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

            {/* MCQ Sections Table */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">MCQ Sections</h3>
                <button
                  onClick={addSection}
                  className="text-white px-3 py-1 rounded hover:bg-green-600 text-sm cursor-pointer"
                  style={{ backgroundColor: themeColor?.primary }}
                >
                  + Add Section
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-2 py-1">MCQ Section Name</th>
                      <th className="border px-2 py-1">Marks/Q</th>
                      <th className="border px-2 py-1">Total Q</th>
                      <th className="border px-2 py-1">-ive Marks (%)</th>
                      <th className="border px-2 py-1">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sections.map((sec, idx) => (
                      <tr key={idx}>
                        <td className="border px-2 py-1">
                          <input
                            type="text"
                            value={sec.name}
                            onChange={(e) => handleSectionChange(idx, "name", e.target.value)}
                            className="w-full border border-[#eee] px-2 py-1"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <input
                            type="number"
                            value={sec.marksPerQ}
                            onChange={(e) => handleSectionChange(idx, "marksPerQ", e.target.value)}
                            className="w-full border border-[#eee] px-2 py-1"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <input
                            type="number"
                            value={sec.totalQ}
                            onChange={(e) => handleSectionChange(idx, "totalQ", e.target.value)}
                            className="w-full border border-[#eee] px-2 py-1"
                          />
                        </td>
                        <td className="border px-2 py-1">
                          <input
                            type="number"
                            value={sec.negative}
                            onChange={(e) => handleSectionChange(idx, "negative", e.target.value)}
                            className="w-full border border-[#eee] px-2 py-1"
                          />
                        </td>
                        <td className="border px-2 py-1 text-center">
                          <button
                            onClick={() => removeSection(idx)}
                            className="text-red-600 hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Marks */}
            <div className="flex justify-end font-medium text-gray-700">
              Total Marks: <span className="ml-2">{form.totalMarks}</span>
            </div>

          </div>

          {/* Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {Object.keys(form.options).map(key => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(form.options as any)[key]}
                  onChange={e =>
                    setForm({
                      ...form,
                      options: {
                        ...form.options,
                        [key]: e.target.checked,
                      },
                    })
                  }
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-3 border-t border-[#eee]">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded border border-[#e1e1e1] hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
            style={{ backgroundColor: themeColor?.primary }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
