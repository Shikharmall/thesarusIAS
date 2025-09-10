import { useEffect, useState } from "react";
import {
  ArrowRight,
  CircleAlert,
  CircleCheck,
  CircleIcon,
  CirclePlay,
  CircleX,
  Clock4,
  Flag,
  Menu,
  RotateCcw
} from "lucide-react";

export default function InstructionScreen() {
  //const { title } = useLocalSearchParams<{ title?: string | string[] }>();
  const [examName, setExamName] = useState<string>("SSC Test Series");

  useEffect(() => {
    // if (title) {
    //   setExamName(Array.isArray(title) ? title[0] : title);
    // }
    // }, [title]);
    setExamName("SSC Test Series");
  }, []);

  return (
    <div className="flex-1 justify-center items-center">
      <div className="flex-1 bg-white rounded-xl w-[90%] max-h-[90%] shadow-lg">
        {/* Header */}
        <div className="p-5 border-b border-gray-200 items-center">
          <p className="text-lg font-bold text-blue-600 text-center">
            {examName} Instructions
          </p>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Please read carefully before starting
          </p>
        </div>

        <div
          className="flex-1 p-5"
        >
          {/* General Instructions */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">
              General Instructions
            </p>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons name="time-outline" size={16} color={Colors.primary} /> */}
              <Clock4 size={16} color={'blue'} />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Total duration of examination is 60 minutes (1 hour)
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons
                name="document-text-outline"
                size={16}
                color={'blue'}
              /> */}
              <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                The examination consists of 20 questions divided into 4 sections
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              <CircleCheck
                size={16}
                color={'blue'}
              />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Each question carries 2 marks. Total marks: 40
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons
                name="close-circle-outline"
                size={16}
                color={Colors.error}
              /> */}
              <CircleX
                size={16}
                color={'red'}
              />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                There is negative marking of 0.5 marks for each wrong answer
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Examination Sections
            </p>
            <div className="mb-2 pl-2">
              <p className="text-sm font-medium text-gray-800">
                1. General Intelligence & Reasoning
              </p>
              <p className="text-xs text-gray-500">Questions 1-5</p>
            </div>
            <div className="mb-2 pl-2">
              <p className="text-sm font-medium text-gray-800">
                2. General Awareness
              </p>
              <p className="text-xs text-gray-500">Questions 6-10</p>
            </div>
            <div className="mb-2 pl-2">
              <p className="text-sm font-medium text-gray-800">
                3. Quantitative Aptitude
              </p>
              <p className="text-xs text-gray-500">Questions 11-15</p>
            </div>
            <div className="mb-2 pl-2">
              <p className="text-sm font-medium text-gray-800">
                4. English Comprehension
              </p>
              <p className="text-xs text-gray-500">Questions 16-20</p>
            </div>
          </div>

          {/* Navigation Instructions */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Navigation & Controls
            </p>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons
                name="arrow-forward-outline"
                size={16}
                color={Colors.primary}
              /> */}
              <ArrowRight size={16} color={"blue"} />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Use Previous/Next buttons to navigate between questions
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              <Flag size={16} color={'red'} />
              {/* <Ionicons name="flag-outline" size={16} color={'red'} /> */}
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Flag questions for rediv using the flag button
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons
                name="refresh-outline"
                size={16}
                color={Colors.textSecondary}
              /> */}
              <RotateCcw size={16}
                color={'gray'} />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Clear your response using the "Clear Response" button
              </p>
            </div>
            <div className="flex-row items-start mb-2">
              {/* <Ionicons name="grid-outline" size={16} color={Colors.primary} /> */}
              <Menu size={16} color={'blue'} />
              <p className="ml-2 text-sm text-gray-800 flex-1 leading-5">
                Use the question navigator to jump to any question directly
              </p>
            </div>
          </div>

          {/* Color Coding */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Question Status Color Coding
            </p>
            <div className="flex-row items-center mb-2">
              <div className="w-4 h-4 rounded mr-3" style={{ backgroundColor: 'greed' }} />
              <p className="text-sm text-gray-800">Green - Answered</p>
            </div>
            <div className="flex-row items-center mb-2">
              <div className="w-4 h-4 rounded mr-3" style={{ backgroundColor: 'red' }} />
              <p className="text-sm text-gray-800">Orange - Flagged for Rediv</p>
            </div>
            <div className="flex-row items-center mb-2">
              <div className="w-4 h-4 rounded mr-3" style={{ backgroundColor: 'blue' }} />
              <p className="text-sm text-gray-800">Blue - Current Question</p>
            </div>
            <div className="flex-row items-center mb-2">
              <div className="w-4 h-4 rounded mr-3" style={{ backgroundColor: 'gray' }} />
              <p className="text-sm text-gray-800">Gray - Not Visited</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-6">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Important Notes
            </p>
            <div className="flex-row bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-500">
              {/* <Ionicons
                name="warning-outline"
                size={20}
                color={Colors.warning}
              /> */}
              <CircleAlert
                size={20}
                color={'red'}
              />
              <div className="flex-1 ml-2">
                <p className="text-xs text-yellow-800 mb-1">
                  • The examination will auto-submit when time expires
                </p>
                <p className="text-xs text-yellow-800 mb-1">
                  • Ensure stable internet connection throughout the exam
                </p>
                <p className="text-xs text-yellow-800 mb-1">
                  • Do not refresh or close the browser during examination
                </p>
                <p className="text-xs text-yellow-800">
                  • Rediv all answers before final submission
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200">
          <div
            className="flex-row items-center justify-center bg-blue-600 py-3 rounded-lg"
          // onPress={() =>
          //   router.push({
          //     pathname: "/(exam)",
          //     params: { title: examName },
          //   })
          // }
          >
            {/* <Ionicons name="play-circle" size={24} color={Colors.background} /> */}
            <CirclePlay size={24}
              color={'red'} />
            <p className="ml-2 text-base font-semibold text-white">
              I Understand - Start Examination
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
