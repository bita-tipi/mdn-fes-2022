import GRADE1 from "./grade1";
import GRADE2 from "./grade2";
import GRADE3 from "./grade3";

export type valueOf<T> = T[keyof T];
export type PickType<T, K extends keyof T> = T[K];
export function assert(assert: boolean): void | never {
    if (!assert) {
        throw new Error("Assertion Error!");
    }
}

const F = {
    1: "1F",
    2: "2F",
    3: "3F",
    4: "4F"
} as const;
type F = valueOf<typeof F>

type classDataType = {
    className: string;
    title: string;
    description: string;
};

const CLASS_DATA = {
    GRADE1,
    GRADE2,
    GRADE3,
} as const;
type CLASS_DATA = valueOf<typeof CLASS_DATA>;

export { CLASS_DATA, F };
export type { classDataType };
