import { Course } from "@/utils/types/courses";

export const courses: Course[] = [
    {
        id: "1",
        title: "NCERT Geography (6th to 12th)",
        price: "₹1,400",
        oldPrice: "₹3,000",
        discount: "53% OFF",
        tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
        id: "2",
        title: "COMBINED NCERT (HISTORY + POLITY + GEOGRAPHY + ECONOMICS)",
        price: "₹10,000",
        tags: ["FREE CONTENT", "TESTS", "VIDEOS"],
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
        id: "3",
        title: "MENTORSHIP PROGRAMME - UPSC CSE PRELIMS 2021",
        price: "₹550",
        oldPrice: "₹1,200",
        discount: "54% OFF",
        tags: ["FREE CONTENT", "VIDEOS", "FILES"],
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
    {
        id: "4",
        title: "COURSE FOR INTERNATIONAL RELATIONS",
        price: "₹2,500",
        tags: ["FREE CONTENT", "VIDEOS", "FILES"],
        image:
            "https://res.cloudinary.com/drb1ds8e3/image/upload/v1756027561/thumbnail_coefxn.png",
    },
];

export const mycourses: Course[] = [];