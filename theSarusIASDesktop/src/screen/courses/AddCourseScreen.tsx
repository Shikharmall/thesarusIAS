import SideBar from '../../components/dashboard/SideBar'
import Header from '../../components/dashboard/Header'
import SubHeader from '../../components/dashboard/SubHeader'

export default function AddCourseScreen() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <SideBar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Add Courses" isBack={true} isAdd={true} />
            </main>
        </div>
    )
}
