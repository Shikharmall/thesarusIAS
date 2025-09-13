import React, { useEffect, useState } from "react";
import {
    useParams,
    //useNavigate 
} from "react-router-dom";
import { courseData } from "../../data/courseData";
import CourseDetailsRightSideScreen from "../../components/courses/CourseDetailsRightSideScreen";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import CourseDetailsLeftSideScreen from "../../components/courses/CourseDetailsLeftSide";
import type { CourseType } from "../../utils/types/courses";
import { themeColor } from "../../utils/constant/Color";
import Sidebar from "../../components/common/Sidebar";

const CourseDetailsScreen: React.FC = () => {
    const { id } = useParams(); // for dynamic routing
    // const navigate = useNavigate();
    const [course, setCourse] = useState<CourseType>();

    useEffect(() => {
        if (id) {
            const data = courseData.find((item) => item?.id === Number(id));
            setCourse(data);
        }
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <Sidebar />

            <main className="flex-1 ml-50 mt-15">

                <Header />
                <SubHeader title={course?.title} isBack={true} isAdd={true} />

                <div className="flex flex-row w-full">
                    <div
                        className="w-[30%] m-1 rounded-md"
                        style={{
                            backgroundColor: themeColor?.lightSecondary
                        }}
                    >
                        <CourseDetailsLeftSideScreen />
                    </div>
                    <div className="w-[70%] m-1 rounded-md" style={{
                        backgroundColor: themeColor?.lightSecondary
                    }}>
                        <CourseDetailsRightSideScreen />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default CourseDetailsScreen;
