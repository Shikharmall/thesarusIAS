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