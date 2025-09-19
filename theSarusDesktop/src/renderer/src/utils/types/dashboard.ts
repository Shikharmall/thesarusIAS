import { ReactNode } from "react";

export interface Item {
    id: number;
    count: number;
    label: string;
    color: string;
    icon: ReactNode;
}

export interface OnlineTest {
    month: string;
    tests: number;
}