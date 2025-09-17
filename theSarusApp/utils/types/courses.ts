export interface Course {
    id: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    tags: string[];
    image: string;
}

export interface CoursesProps {
  courses: Course[];
}