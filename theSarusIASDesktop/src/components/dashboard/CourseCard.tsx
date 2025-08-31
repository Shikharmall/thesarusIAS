import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { themeColor } from "../../utils/Color";

interface CourseType {
  id: number,
  image: string;
  title: string;
  lang: string;
  startDate?: string;
  endDate?: string;
  price: string;
  oldPrice?: string;
  discount?: string;
}

interface CourseCardProps {
  item: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`${'/courseDetails/' + item?.id}`)}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 border border-gray-200 max-w-sm"
    >
      {/* Image Section with Ribbon */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          ONLINE
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title + Language */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <span className="text-sm text-gray-500 px-2 py-0.5 rounded bg-gray-100">
            {item.lang}
          </span>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>
            Starts on <b>{item.startDate}</b> Ends on <b>{item.endDate}</b>
          </span>
        </div>

        {/* Price Section */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-indigo-600">
              {item.price}
            </span>
            {item.oldPrice && (
              <span className="line-through text-gray-400">
                {item.oldPrice}
              </span>
            )}
          </div>
          {item.discount && (
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">(FOR FULL BATCH)</span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Discount : {item.discount}
              </span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 border font-medium py-2 rounded-lg transition text-sm"
            style={{
              borderColor: themeColor?.primary,
              color: themeColor?.primary
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("/courseDetails");
            }}
          >
            EXPLORE
          </button>
          <button
            className="flex-1 text-white font-medium py-2 rounded-lg transition text-sm"
            style={{
              backgroundColor: themeColor?.primary
            }}
            onClick={(e) => {
              e.stopPropagation();
              //navigate("/buyNow");
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
