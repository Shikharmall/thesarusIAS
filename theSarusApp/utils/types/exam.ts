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

export interface QuestionStatus {
  answered?: boolean,
  flagged?: boolean,
  visited: boolean,
  selectedAnswer?: number,
}

export interface ExamTimerProps {
  duration: number; // duration in minutes
  startTimestamp: string;
  onTimeUp: () => void;
}

export interface ExamHeaderProps {
  showNavigator: boolean
  examName: string
  startTimestamp: string
  duration: number
  onTimeUp: () => void
  onToggleNavigator: () => void
}

export interface QuestionNavigatorProps {
  sections: Section[],
  currentQuestionId: number,
  onSectionSelect: (sectionId: number) => void,
  onQuestionSelect: (questionId: number) => void,
  onQuestionCloseSelect: (questionId: number) => void,
  currentSection?: number,
  questionStatuses: Record<number, QuestionStatus>
}

export interface InstructionModalProps {
  isVisible: boolean,
  onStartExam: () => void,
}

export interface ExamNavigationProps {
  currentQuestionId: number,
  onQuestionChange: (questionIndex: number) => void,
  onSectionChange: (sectionId: number) => void,
  onSubmit: () => void,
  sections: Section[],
}

export interface QuestionDisplayProps {
  currentQuestionId: number,
  currentSection: number,
  sections: Section[],
  onAnswerSelect: (questionId: number, selectedAnswer: number) => void,
  onFlagSelect: (questionId: number) => void,
  onClearSelect: (questionId: number) => void,
  questionStatuses: Record<number, QuestionStatus>
}

export interface MCQQuestionProps {
  questionIndex: number,
  question: Question,
  questionStatus?: QuestionStatus,
  onAnswerSelect: (questionId: number, selectedAnswer: number) => void,
  onFlagQuestion: (questionId: number) => void,
  onClearResponse: (questionId: number) => void,
}

export interface AnimatedCircleProgressProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
  duration?: number
  color?: string
  backgroundColor?: string
  showPercentage?: boolean
  label: string
}
