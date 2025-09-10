import SideBar from '../../components/common/SideBar'
import Header from '../../components/common/Header'
import SubHeader from '../../components/common/SubHeader'

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
