export interface Question {
  id: number,
  question: string,
  options: string[],
  correctAnswer?: number,
}

export interface Section {
  id: number,
  name: string,
  questions: Question[],
  timeLimit?: number,
}

export interface ExamData {
  title: string,
  duration: number,
  sections: Section[],
}

export interface QuestionStatus {
  answered: boolean,
  flagged: boolean,
  visited: boolean,
  selectedAnswer?: number,
}

export interface QuestionNavigatorProps {
  sections: Section[],
  currentQuestion: number,
  onSectionSelect: (sectionId: number) => void,
  onQuestionSelect: (questionId: number) => void,
  currentSection?: number,
  questionStatuses: Record<number, QuestionStatus>
}

export interface InstructionModalProps {
  isVisible: boolean,
  onStartExam: () => void,
}

export interface ExamNavigationProps {
  currentQuestion: number,
  onQuestionChange: (questionIndex: number) => void,
  onSectionChange: (sectionId: number) => void,
  sections: Section[],
  userName: string,
  rollNum: string,
  examName: string
  questionStatuses: Record<number, QuestionStatus>
}

export interface QuestionDisplayProps {
  currentQuestion: number,
  currentSection: number,
  sections: Section[],
  onAnswerSelect: (questionId: number, selectedAnswer: number) => void,
  onFlagSelect: (questionId: number) => void,
  onClearSelect: (questionId: number) => void,
  questionStatuses: Record<number, QuestionStatus>
}

export interface MCQQuestionProps {
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

export interface HeaderProps {
  onToggleNavigator: () => void
  showNavigator: boolean
}
