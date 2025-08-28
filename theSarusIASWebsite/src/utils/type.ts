export interface themeColorType {
    primary: string,
    secondary: string,
    lightPrimary: string,
    lightSecondary: string
}

export interface ProgrammeItem {
    id: number,
    name: string,
    nameHindi: string,
    url: string
}

// export interface Section {
//     id: number,
//     name: string;
//     start: number;
//     end: number;
// }

// export interface Question {
//     id: number;
//     section: string;
//     text: string;
//     options: string[];
//     answered: boolean;
//     flagged: boolean;
//     selectedAnswer: undefined;
// }

export interface Question {
    id: number
    question: string
    options: string[]
}

export interface Section {
    id: number
    name: string
    questions: Question[]
}

export interface QuestionNavigatorProps {
    sections: Section[],
    currentQuestion: number,
    currentSection: number,
    onSectionSelect: (sectionId: number) => void
    onQuestionSelect: (questionId: number) => void
}

export interface ExamData {
    title: string;
    duration: number;
    sections: Section[];
    questions: (Question | undefined)[];
}

export interface MCQQuestionProps {
    question: Question
    currentSection?: number
    onAnswerChange: (answer: string) => void
}

export interface ExamNavigationProps {
    currentQuestion: number
    totalQuestions: number
    isFlagged: boolean
    isAnswered: boolean
    onPrevious: () => void
    onNext: () => void
    onFlag: () => void
    onClearResponse: () => void
    onSubmit: () => void
}

export interface ExamHeaderProps {
    title: string
    currentQuestion: number
    totalQuestions?: number
    currentSection?: number
    sectionData: Section
    progress?: number
    duration: number
    onTimeUp: () => void
    onSubmit: () => void
}