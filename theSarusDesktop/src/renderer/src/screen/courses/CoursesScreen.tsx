import SideBar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import CourseCard from "../../components/courses/CourseCard";
import SubHeader from "../../components/common/SubHeader";
import { courseData } from "../../data/courseData";

const CoursesScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SideBar />

      <main className="flex-1 ml-50 mt-15">
        <Header />

        <SubHeader title="Courses" isBack={false} isAdd={true} route={'/addCourse'} tooltip={'Add Course'} />

        {
          courseData?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                alt="No Courses"
                className="w-40 h-40 mb-6 object-contain"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                No Courses Found
              </h2>
              <p className="text-sm text-gray-600 max-w-md">
                We couldn&apos;t find any courses right now. Please check back later!
              </p>
            </div>
          )
        }

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courseData?.map((course, idx) => (
            <CourseCard key={idx} item={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesScreen;
