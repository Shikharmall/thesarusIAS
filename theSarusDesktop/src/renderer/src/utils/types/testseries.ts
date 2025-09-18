export interface CardProps {
    id: number;
    image: string;
    examName: string;
    title: string;
    description: string;
    time: string;
};

export interface Tab {
    id: string;
    label: string;
    icon: React.ElementType;
    content: React.ReactNode;
};

export interface ExamTimerProps {
    duration: number // duration in minutes
    startTimestamp: string
    onTimeUp: () => void
}

export interface Option {
    label: string
    isCorrect: boolean
}

export interface Question {
    id: number
    question: string
    options: Option[]
    solution: string
}

export interface Section {
    id: number
    name: string
    questions: Question[]
}

export interface ExamData {
    title: string
    startTimestamp: string
    duration: number
    sections: Section[]
}

export interface InstructionPopupProps {
    isOpen: boolean
    onClose: () => void
}

export interface QuestionPaperPopupProps {
    isOpen: boolean
    onClose: () => void
    sections: Section[]
}

export interface QuestionStatus {
    answered?: boolean,
    flagged?: boolean,
    visited: boolean,
    selectedAnswer?: number,
}

export interface MCQQuestionProps {
    sections: Section[]
    currentSectionIndex: number
    currentQuestionIndex: number
    questionStatus?: QuestionStatus
    onAnswerSelect: (questionId: number, selectedAnswer: number) => void
}

export interface ExamNavigationProps {
    currentQuestionIndex: number,
    onQuestionChange: (questionIndex: number) => void,
    onSectionChange: (sectionId: number) => void,
    onFlagSelect: (questionId: number) => void,
    onClearSelect: (questionId: number) => void,
    sections: Section[],
    questionStatuses: Record<number, QuestionStatus>
}

export interface ExamHeaderProps {
    title: string
    currentQuestionIndex: number
    totalQuestions?: number
    currentSection?: number
    sectionData: Section
    sections: Section[]
    startTimestamp: string
    duration: number
    onTimeUp: () => void
    onSubmit: () => void
}

export interface QuestionNavigatorProps {
    sections: Section[],
    currentQuestionIndex: number,
    currentSectionIndex: number,
    onSectionSelect: (sectionId: number) => void
    onQuestionSelect: (questionId: number) => void
    questionStatuses: Record<number, QuestionStatus>
}