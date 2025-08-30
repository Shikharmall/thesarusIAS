import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import CourseCard from "../components/dashboard/CourseCard";
import SubHeader from "../components/dashboard/SubHeader";

const courses = [
  {
    image: "https://fastly.picsum.photos/id/352/400/200.jpg?hmac=x6IEgIIuzQMVaiOYDyTFp4KUSdkqzGT87ofb6fy3HWk",
    tags: ["Beginner", "Math"],
    title: "Algebra Basics: From Zero to Hero",
    price: "₹999",
    oldPrice: "₹1999",
    discount: "50% OFF",
  },
  {
    image: "https://fastly.picsum.photos/id/793/400/200.jpg?hmac=v8esZOWTlWneARHVWrNAGzQtMTRqF47o2mOQMxwiYmo",
    tags: ["Advanced", "Science"],
    title: "Mastering Physics for JEE/NEET",
    price: "₹1499",
    oldPrice: "₹2999",
    discount: "50% OFF",
  },
  {
    image: "https://fastly.picsum.photos/id/421/400/200.jpg?hmac=pELGKMqEDXvuRrzzFunilebVmTnh_wzlZy-u0xBQb5w",
    tags: ["Coding", "Web"],
    title: "React + TypeScript Crash Course",
    price: "₹1299",
    oldPrice: "₹2499",
    discount: "48% OFF",
  },
  {
    image: "https://fastly.picsum.photos/id/432/400/200.jpg?hmac=WrMFmmc50jZ6C5j6aIIE02ID5TemQKm_-iSxAO_aMhw",
    tags: ["UI/UX"],
    title: "Design Thinking & Prototyping",
    price: "₹799",
    oldPrice: "₹1599",
    discount: "50% OFF",
  },
];

const cou = [];

const CoursesScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SideBar />

      <main className="flex-1 ml-50 mt-15">
        <Header />

        <SubHeader title="Courses" isBack={false} isAdd={true} />

        {
          courses?.length === 0 && (
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
          {courses?.map((course, idx) => (
            <CourseCard key={idx} item={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesScreen;
