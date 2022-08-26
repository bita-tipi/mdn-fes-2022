import { classDataType, valueOf } from "./constants";

const G1A: classDataType = {
    className: "G1A",
    title: "",
    description: "",
} as const;

const G1B: classDataType = {
    className: "G1B",
    title: "",
    description: "",
} as const;

const G1C: classDataType = {
    className: "G1C",
    title: "",
    description: "",
} as const;

const G1D: classDataType = {
    className: "G1D",
    title: "",
    description: "",
} as const;

const G1E: classDataType = {
    className: "G1E",
    title: "",
    description: "",
} as const;

const G1F: classDataType = {
    className: "G1F",
    title: "",
    description: "",
} as const;

const G1G: classDataType = {
    className: "G1G",
    title: "",
    description: "",
} as const;

const G1H: classDataType = {
    className: "G1H",
    title: "",
    description: "",
} as const;

const G1I: classDataType = {
    className: "G1I",
    title: "",
    description: "",
} as const;

const G1J: classDataType = {
    className: "G1J",
    title: "",
    description: "",
} as const;

const T1A: classDataType = {
    className: "T1A",
    title: "",
    description: "",
} as const;

const T1B: classDataType = {
    className: "T1B",
    title: "",
    description: "",
} as const;

const T1C: classDataType = {
    className: "T1C",
    title: "",
    description: "",
} as const;

const T1D: classDataType = {
    className: "T1D",
    title: "",
    description: "",
} as const;

const GRADE1 = {
    G1A,
    G1B,
    G1C,
    G1D,
    G1E,
    G1F,
    G1G,
    G1H,
    G1I,
    G1J,
    T1A,
    T1B,
    T1C,
    T1D,
} as const;
type GRADE1 = valueOf<typeof GRADE1>;
export default GRADE1;
