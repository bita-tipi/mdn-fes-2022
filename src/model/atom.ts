import { atom } from "recoil";
import { classDataType, CLASS_DATA, F } from "../assets/data/constants";

/** Modalを表示させるのに必要な, `classData`と`FloorIndex`を持った複合objectを`ModalData`とする */
type ModalData = {
    classData: classDataType;
    floorIndex: number;
};

/**
 * ## modalDataState
 * `ModalData`の状態を持った`atom`
 */
const modalDataState = atom<ModalData>({
    key: "modalDataState",
    default: {
        classData: CLASS_DATA.GRADE2.J2B,

        // caution: J2B -> 4F -> F4Map() -> mapsElement[3] -> 3
        floorIndex: 3,
    },
});

/**
 * ## floorIndexState
 * `floorIndex`の状態を持った`atom`
 */
const floorIndexState = atom<number>({
    key: "floorIndexState",

    // caution: 1F -> F1Map() -> mapsElement[0] -> 0s
    default: 0,
});

export { modalDataState, floorIndexState };
