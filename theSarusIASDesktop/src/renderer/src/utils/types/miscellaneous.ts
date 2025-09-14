export interface faqsType {
    question: string,
    answer: string
}

export interface Notification {
    id: number;
    title: string;
    message: string;
    date?: string;
    type: "meeting" | "session" | "error" | "message" | "profile" | "wallet";
    new: boolean;
}

export interface Socials {
    twitter?: string;
    linkedin?: string;
    website?: string;
}

export interface ProfileForm {
    name?: string;
    email?: string;
    location?: string;
    bio?: string;
    socials?: Socials;
}