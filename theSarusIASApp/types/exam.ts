export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer?: number
}

export interface Section {
  id: number,
  name: string
  questions: Question[]
  timeLimit?: number
}

export interface ExamData {
  title: string
  duration: number
  sections: Section[]
}

export interface QuestionStatus {
  answered: boolean
  flagged: boolean
  visited: boolean
  selectedAnswer?: number
}

export interface QuestionNavigatorProps {
  sections: Section[]
  currentQuestion: number
  onSectionSelect: (sectionId: number) => void
  onQuestionSelect: (questionId: number) => void
  currentSection?: number
}

export interface InstructionModalProps {
  isVisible: boolean
  onStartExam: () => void
}

export interface ExamNavigationProps {
  currentQuestion: number,
  onQuestionChange: (questionIndex: number) => void,
  onSectionChange: (sectionId: number) => void,
  sections: Section[]
}

export interface QuestionDisplayProps {
  currentQuestion: number,
  currentSection: number,
  sections: Section[]
}
