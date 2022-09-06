import { classDataType, valueOf } from "./constants";

const G2A: classDataType = {
    className: "G2A",
    title: "",
    description: "",
} as const;

const G2B: classDataType = {
    className: "G2B",
    title: "",
    description: "",
} as const;

const G2C: classDataType = {
    className: "G2C",
    title: "",
    description: "",
} as const;

const G2D: classDataType = {
    className: "G2D",
    title: "",
    description: "",
} as const;

const G2E: classDataType = {
    className: "G2E",
    title: "",
    description: "",
} as const;

const G2F: classDataType = {
    className: "G2F",
    title: "",
    description: "",
} as const;

const G2G: classDataType = {
    className: "G2G",
    title: "",
    description: "",
} as const;

const G2H: classDataType = {
    className: "G2H",
    title: "",
    description: "",
} as const;

const G2I: classDataType = {
    className: "G2I",
    title: "",
    description: "",
} as const;

const G2J: classDataType = {
    className: "G2J",
    title: "",
    description: "",
} as const;

const G2K: classDataType = {
    className: "G2K",
    title: "",
    description: "",
} as const;

const T2A: classDataType = {
    className: "T2A",
    title: "",
    description: "",
} as const;

const T2B: classDataType = {
    className: "T2B",
    title: "",
    description: "",
} as const;

const T2C: classDataType = {
    className: "T2C",
    title: "",
    description: "",
} as const;

const J2A: classDataType = {
    className: "J2A",
    title: "縁日かも～",
    description: "いろんな屋台があるよ　　　　　　　　途中で改行もできるよ",
} as const;

const J2B: classDataType = {
    className: "J2B",
    title: "夢のクラスへようこそ",
    description: "フリック入力とローマ字入力対決",
} as const;

const GRADE2 = {
    G2A,
    G2B,
    G2C,
    G2D,
    G2E,
    G2F,
    G2G,
    G2H,
    G2I,
    G2J,
    G2K,
    T2A,
    T2B,
    T2C,
    J2A,
    J2B,
} as const;
type GRADE2 = valueOf<typeof GRADE2>;
export default GRADE2;
