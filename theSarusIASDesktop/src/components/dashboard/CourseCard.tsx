import React from "react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  item: {
    image: string;
    tags: string[];
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/courseDetails")}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-blue-600">{item.price}</span>
          {item.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              {item.oldPrice}
            </span>
          )}
          {item.discount && (
            <span className="text-sm font-medium text-green-600">
              {item.discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

