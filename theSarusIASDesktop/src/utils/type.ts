export interface ProgrammeItem {
    id: number,
    name: string,
    nameHindi: string,
    url: string
}

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
    currentQuestionId: number,
    currentSectionIndex: number,
    onSectionSelect: (sectionId: number) => void
    onQuestionSelect: (questionId: number) => void
    questionStatuses: Record<number, QuestionStatus>
}

export interface ExamData {
    title: string;
    duration: number;
    sections: Section[];
    questions: (Question | undefined)[];
}

export interface MCQQuestionProps {
    question: Question
    sectionName: string
    questionStatus?: QuestionStatus,
    onAnswerSelect: (questionId: number, selectedAnswer: number) => void,
}

export interface ExamNavigationProps {
    currentQuestionId: number,
    onQuestionChange: (questionIndex: number) => void,
    onSectionChange: (sectionId: number) => void,
    onFlagSelect: (questionId: number) => void,
    onClearSelect: (questionId: number) => void,
    sections: Section[],
    questionStatuses: Record<number, QuestionStatus>
}

export interface ExamHeaderProps {
    title: string
    currentQuestionId: number
    totalQuestions?: number
    currentSection?: number
    sectionData: Section
    sections: Section[]
    progress?: number
    duration: number
    onTimeUp: () => void
    onSubmit: () => void
}

export interface QuestionStatus {
    answered: boolean,
    flagged: boolean,
    visited: boolean,
    selectedAnswer?: number,
}







