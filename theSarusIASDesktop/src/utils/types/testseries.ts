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
    onTimeUp: () => void
}

////////////////////////////////////////

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

export interface InstructionPopupProps {
    isOpen: boolean
    onClose: () => void
    onStartExam: () => void
}

export interface QuestionPaperPopupProps {
    isOpen: boolean
    onClose: () => void
    sections: Section[]
}

export interface QuestionStatus {
    answered: boolean,
    flagged: boolean,
    visited: boolean,
    selectedAnswer?: number,
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

export interface QuestionNavigatorProps {
    sections: Section[],
    currentQuestionId: number,
    currentSectionIndex: number,
    onSectionSelect: (sectionId: number) => void
    onQuestionSelect: (questionId: number) => void
    questionStatuses: Record<number, QuestionStatus>
}