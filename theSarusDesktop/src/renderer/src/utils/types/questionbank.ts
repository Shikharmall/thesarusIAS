export interface CardProps {
    id: number;
    image: string;
    examName: string;
    title: string;
    description: string;
    time: string;
}

export interface Option {
    label: string
    isCorrect: boolean
}

// export interface Question {
//     id: number
//     question: string
//     options: Option[]
//     solution: string
// }

export interface Question {
    id?: number;
    question: string;
    topic?: string;
    difficulty: "easy" | "medium" | "hard";
    options: Option[]
    solution: string;
}

export interface QuestionTypes {
    type: string;
    label: string;
}

export interface Option {
    label: string;
    isCorrect: boolean;
    image?: string;
}