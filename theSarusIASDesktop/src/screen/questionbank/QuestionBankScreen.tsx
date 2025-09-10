import React from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/Header";
import SubHeader from "../../components/common/SubHeader";
import { Link } from "react-router-dom";
import type { CardProps } from "../../utils/types/questionbank";

const cards: CardProps[] = [
  {
    id: 1,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
    examName: "Union Public Service Commission",
    title: "General Studies I",
    description: "New BlackMonk with UI updates + enhanced features.",
    time: "FEW SECONDS",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/upsc_pzkoyq.png", // replace with icon
    examName: "UPSC GS-II",
    title: "BlackMonk v3.5",
    description: "New BlackMonk with UI updates + enhanced features.",
    time: "FEW SECONDS",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
    examName: "UPPCS GS-I",
    title: "Apple Pay on Stripe",
    description: "Easy Apple Pay integration for businesses built on Stripe.",
    time: "A MINUTE",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756099014/uppcs_ybcobx.png",
    examName: "UPPCS GS-II",
    title: "Apple Pay on Stripe",
    description: "Easy Apple Pay integration for businesses built on Stripe.",
    time: "A MINUTE",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/ssccgl_rknj1o.png",
    examName: "SSC CGL",
    title: "BlackMonk Insider",
    description: "New template that exclusively built for local search.",
    time: "FEW SECONDS",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscchsl_fwfdka.png",
    examName: "SSC CHSL",
    title: "Project Polymer",
    description:
      "Web Components usher in a new era of web development based on encapsulated and interoperable custom.",
    time: "7 MINUTES",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756030769/sscmts_j31n5a.png",
    examName: "SSC MTS",
    title: "InVision v5",
    description: "UI update + Reengineered almost everything from the ground up.",
    time: "2 DAYS",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756031617/railwayblue_tjaeud.jpg",
    examName: "Stripe Inc.",
    title: "Stripe Amex Express Checkout",
    description: "Stripe + Amex Express Checkout",
    time: "A WEEK",
  },
];

const Card: React.FC<CardProps> = ({ id, image, examName, title, description, time }) => (
  <Link to={'/questionBankList/' + id} className="bg-white shadow-sm rounded-lg p-5 border border-gray-200 flex flex-col cursor-pointer">
    <div className="flex items-center justify-between mb-3 text-gray-400">
      <div className="flex flex-col">
        <span className="text-xs">{examName}</span>
        <span className="text-sm">{title}</span>
      </div>
      <img src={image} alt={examName} className="h-20 rounded-10" />
    </div>
    <h4 className="text-sm font-medium text-gray-500">{time}</h4>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </Link>
);

const QuestionBankScreen: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 ml-50 mt-15">
        <Header />

        <SubHeader title="Question Bank" isBack={false} isAdd={true} route={'/addCourse'} tooltip="Add Exam" />


        <div className="min-h-screen bg-gray-50 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default QuestionBankScreen;
