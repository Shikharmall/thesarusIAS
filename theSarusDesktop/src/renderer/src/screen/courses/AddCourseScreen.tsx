import SideBar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import SubHeader from '../../components/common/SubHeader'

export default function AddCourseScreen() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Add Courses" isBack={true} isAdd={true} />
                <div className="flex flex-1 justify-center items-center h-[70vh]">
                    <p className="text-gray-600 text-lg font-medium">
                        Under maintenance.
                    </p>
                </div>
            </main>
        </div>
    )
}
