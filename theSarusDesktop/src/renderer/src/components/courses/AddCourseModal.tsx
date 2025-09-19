import { themeColor } from "@renderer/utils/constant/Color";
import JoditEditor from "jodit-react";
import { useState } from "react";

interface AddCourseModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AddCourseModal({ isOpen, setIsOpen }: AddCourseModalProps) {
  const [formData, setFormData] = useState({
    type: "MCQ",
    testName: "",
    language: "English",
    features: "",
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
    originalPrice: 0,
    discountedPrice: 0
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  if (!isOpen) return null; // ✅ Only render when open


  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xs shadow-lg">
        {/* Header */}
        <div className="text-white text-lg font-semibold px-4 py-5 flex justify-between items-center rounded-t-xs"
          style={{ backgroundColor: themeColor?.primary }}
        >
          <span>Add Course</span>
          <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">

          {/* Upload Image Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Course Thumbnail Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full px-2 py-3 text-sm text-gray-700 border border-gray-300 rounded-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {selectedImage && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Preview"
                  className="w-40 h-28 object-cover rounded-xs border"
                />
              </div>
            )}
          </div>

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

          {/* Features */}
          <div>
            <label className="block font-medium">Features:</label>
            <JoditEditor
              value={formData?.features}
              config={{ readonly: false, placeholder: "Enter Features of this course" }}
              tabIndex={1}
            // onBlur={(newContent) =>
            //   handleOptionChange(index, optIndex, "label", newContent)
            // }
            />
          </div>

          {/* Price Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-[#d4d2d2] px-2 py-1">Course Original Price</th>
                  <th className="border border-[#d4d2d2] px-2 py-1">Course Dicounted Price</th>
                  <th className="border border-[#d4d2d2] px-2 py-1">Course Percentage Dicount (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d4d2d2] px-2 py-1">
                    <input
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) =>
                        setFormData({ ...formData, originalPrice: Number(e.target.value) })
                      }
                      className="w-full border border-[#eee] px-2 py-1"
                    />
                  </td>

                  <td className="border border-[#d4d2d2] px-2 py-1">
                    <input
                      type="number"
                      value={formData.discountedPrice}
                      onChange={(e) =>
                        setFormData({ ...formData, discountedPrice: Number(e.target.value) })
                      }
                      className="w-full border border-[#eee] px-2 py-1"
                    />
                  </td>
                  <td className="border border-[#d4d2d2] px-2 py-1">
                    <input
                      value={
                        formData.originalPrice
                          ? ((formData.originalPrice - formData.discountedPrice) * 100 / formData.originalPrice).toFixed(2)
                          : 0
                      }
                      disabled
                      className="w-full border border-[#eee] px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Schedule & Syllabus Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-[#d4d2d2] px-2 py-1">Weekly/Daily</th>
                  <th className="border border-[#d4d2d2] px-2 py-1">Description</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, idx) => (
                  <tr key={idx}>
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
                className="border border-[#d4d2d2] rounded px-3 py-1 ml-2 w-24"
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
            Date Format : <b>dd/mm/YYYY</b>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Start Date</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border border-[#d4d2d2] rounded px-3 py-2 flex-1"
                  value={formData.startDate}
                  onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border border-[#d4d2d2] rounded px-3 py-2 flex-1"
                  value={formData.endDate}
                  onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-3 border-t border-[#eee]">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded border border-[#eee] hover:bg-gray-100 cursor-pointer"
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
