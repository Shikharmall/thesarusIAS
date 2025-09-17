export interface CardProps {
    id: number;
    image: string;
    examName: string;
    title: string;
    description: string;
    time: string;
}

export interface Question {
    id: number;
    text: string;
    type: string;
    difficulty: "Easy" | "Medium" | "Hard";
    reviewers: string[];
    createdAt: string;
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