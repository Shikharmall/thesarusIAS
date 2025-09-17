export interface CourseType {
    id: number,
    image: string;
    title: string;
    lang: string;
    startDate?: string;
    endDate?: string;
    price: string;
    oldPrice?: string;
    discount?: string;
}

export interface CourseCardProps {
    item: CourseType;
}

export interface Video {
    id: number;
    title: string;
    description: string;
    src: string;
    thumbnail: string;
};