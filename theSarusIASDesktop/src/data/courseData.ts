interface CourseType {
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

export const courseData: CourseType[] = [
    {
        id: 1,
        image: "https://pwonlyias.com/wp-content/uploads/2025/06/b77b0f12-b14e-4742-aded-2b39a986dc56-1.png",
        title: "UPSC PRARAMBH 2028",
        lang: "Hinglish",
        startDate: "16 June 2025",
        endDate: "31 March 2028",
        price: "₹33,000",
        oldPrice: "₹59,999",
        discount: "42%",
    },
    {
        id: 2,
        image: "https://pwonlyias.com/wp-content/uploads/2025/06/b77b0f12-b14e-4742-aded-2b39a986dc56-1.png",
        title: "UPSC Foundation 2027",
        lang: "English",
        startDate: "10 Jan 2025",
        endDate: "15 Dec 2027",
        price: "₹25,000",
        oldPrice: "₹40,000",
        discount: "38%",
    },
    {
        id: 3,
        image: "https://pwonlyias.com/wp-content/uploads/2025/06/b77b0f12-b14e-4742-aded-2b39a986dc56-1.png",
        title: "IAS Crash Course 2026",
        lang: "Hindi",
        startDate: "01 Aug 2025",
        endDate: "31 Dec 2026",
        price: "₹18,000",
        oldPrice: "₹30,000",
        discount: "40%",
    },
    {
        id: 4,
        image: "https://pwonlyias.com/wp-content/uploads/2025/06/b77b0f12-b14e-4742-aded-2b39a986dc56-1.png",
        title: "IAS Crash Course 2026",
        lang: "Hindi",
        startDate: "01 Aug 2025",
        endDate: "31 Dec 2026",
        price: "₹18,000",
        oldPrice: "₹30,000",
        discount: "40%",
    },
];