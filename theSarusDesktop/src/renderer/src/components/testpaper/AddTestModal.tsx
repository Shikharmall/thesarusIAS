import { themeColor } from "@renderer/utils/constant/Color";
import { useState } from "react";

interface AddCourseModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AddTestModal({ isOpen, setIsOpen }: AddCourseModalProps) {
  const [formData, setFormData] = useState({
    type: "MCQ",
    testName: "",
    language: "English",
    questionOrder: "No Random",
    time: "",
    totalMarks: 0,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    options: {
      proctor: false,
      password: false,
      showResult: false,
      answerReport: false,
      hideBack: false,
      hideMarkReview: false,
    },
  });

  if (!isOpen) return null; // ✅ Only render when open

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xs shadow-lg">
        {/* Header */}
        <div className="text-white text-lg font-semibold px-4 py-5 flex justify-between items-center rounded-t-xs"
          style={{ backgroundColor: themeColor?.primary }}
        >
          <span>Add Online Test</span>
          <button onClick={() => setIsOpen(false)} className="text-white">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Course Dropdown */}
          <select className="w-full border border-[#d4d2d2] rounded px-3 py-2 focus:ring focus:ring-blue-300">
            <option>NEET UG</option>
            <option>Class VI</option>
            <option>Testing Course</option>
          </select>

          <p className="text-red-600 text-sm font-medium">
            Section Name & No. of questions can't be edited later on, so be careful.
          </p>

          {/* Type */}
          <div>
            <label className="block font-medium">Type:</label>
            <select
              className="w-full border border-[#d4d2d2] rounded px-3 py-2"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
            >
              <option>MCQ</option>
              <option>Descriptive</option>
            </select>
          </div>

          {/* Test Name */}
          <div>
            <label className="block font-medium">Course Name*</label>
            <input
              type="text"
              className="w-full border border-[#d4d2d2] rounded px-3 py-2"
              value={formData.testName}
              onChange={e => setFormData({ ...formData, testName: e.target.value })}
            />
          </div>

          {/* Language */}
          <div>
            <label className="block font-medium">Language:</label>
            <select
              className="w-full border border-[#d4d2d2] rounded px-3 py-2"
              value={formData.language}
              onChange={e => setFormData({ ...formData, language: e.target.value })}
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Hinglish</option>
            </select>
          </div>

          {/* Question Order */}
          <div>
            <label className="block font-medium">Question Order:</label>
            <select
              className="w-full border border-[#d4d2d2] rounded px-3 py-2"
              value={formData.questionOrder}
              onChange={e => setFormData({ ...formData, questionOrder: e.target.value })}
            >
              <option>No Random</option>
              <option>Random</option>
            </select>
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
                    <td className="border border-[#d4d2d2] px-2 py-1"><input className="w-full border border-[#eee] px-2 py-1" /></td>
                    <td className="border border-[#d4d2d2] px-2 py-1"><input className="w-full border border-[#eee] px-2 py-1" /></td>
                    <td className="border border-[#d4d2d2] px-2 py-1"><input className="w-full border border-[#eee] px-2 py-1" /></td>
                    <td className="border border-[#d4d2d2] px-2 py-1"><input className="w-full border border-[#eee] px-2 py-1" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Time & Marks */}
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Time* (Min):</label>
              <input
                type="number"
                className="border rounded px-3 py-1 ml-2 w-24"
                value={formData.time}
                onChange={e => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
            <div>
              <span className="font-medium">Total Marks: </span>
              <span className="ml-2">{formData.totalMarks}</span>
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {Object.keys(formData.options).map(key => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(formData.options as any)[key]}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      options: {
                        ...formData.options,
                        [key]: e.target.checked,
                      },
                    })
                  }
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>

          {/* Start & End Date Time */}
          <div className="text-sm text-gray-600">
            Date Format : <b>dd/mm/YYYY</b> and Time Format : <b>HH:MM</b>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Start Date & Time</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border rounded px-3 py-1 flex-1"
                  value={formData.startDate}
                  onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                />
                <input
                  type="time"
                  className="border rounded px-3 py-1"
                  value={formData.startTime}
                  onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">End Date & Time</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border rounded px-3 py-1 flex-1"
                  value={formData.endDate}
                  onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                />
                <input
                  type="time"
                  className="border rounded px-3 py-1"
                  value={formData.endTime}
                  onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-3 border-t border-[#eee]">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            style={{ backgroundColor: themeColor?.primary }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
