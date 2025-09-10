export interface CardProps {
    id: number;
    image: string;
    examName: string;
    title: string;
    description: string;
    time: string;
}

export interface Option {
    label: string;
    isCorrect: boolean;
    image?: string;
}

export interface Question {
    type: "singleCorrect" | "multiCorrect" | "matchTheFollowing" | "paragraph";
    question: string;
    duration: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    options: Option[];
    solution: string;
}