export interface TestSeries {
    id: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    tags: string[];
    image: string;
}

export interface FeatureItems {
    id: number;
    title: string;
    icon: string;
    color: string;
    url: string;
}

export interface TestSeriesProps {
    testseries: TestSeries[];
}