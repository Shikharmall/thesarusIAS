import SubHeader from '../../components/common/SubHeader'
import Header from '../../components/common/Header'
import Sidebar from '../../components/common/Sidebar'

export default function AddCourseScreen() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <Sidebar />
            <main className="flex-1 ml-50 mt-15">
                <Header />
                <SubHeader title="Add Courses" isBack={true} isAdd={true} />
            </main>
        </div>
    )
}
