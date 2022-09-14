import { classDataType, CLASS_DATA } from "../assets/data/constants";

export const hashTable = new Map<string, classDataType>(
    [
        ["24121", CLASS_DATA.GRADE1.G1A],
        ["1865e", CLASS_DATA.GRADE1.G1B],
        ["81e92", CLASS_DATA.GRADE1.G1C],
        ["6531a", CLASS_DATA.GRADE1.G1D],
        ["ed215", CLASS_DATA.GRADE1.G1E],
        ["c8777", CLASS_DATA.GRADE1.G1F],
        ["3e2c3", CLASS_DATA.GRADE1.G1G],
        ["33e1d", CLASS_DATA.GRADE1.G1H],
        ["7a0fb", CLASS_DATA.GRADE1.G1I],
        ["41f76", CLASS_DATA.GRADE1.G1J],
        ["7788f", CLASS_DATA.GRADE1.T1A],
        ["60a0f", CLASS_DATA.GRADE1.T1B],
        ["360bf", CLASS_DATA.GRADE1.T1C],
        ["3b90a", CLASS_DATA.GRADE1.T1D],
        ["3386a", CLASS_DATA.GRADE2.G2A],
        ["6b87f", CLASS_DATA.GRADE2.G2B],
        ["78ad1", CLASS_DATA.GRADE2.G2C],
        ["16587", CLASS_DATA.GRADE2.G2D],
        ["e67cb", CLASS_DATA.GRADE2.G2E],
        ["1cc3d", CLASS_DATA.GRADE2.G2F],
        ["47167", CLASS_DATA.GRADE2.G2G],
        ["5580f", CLASS_DATA.GRADE2.G2H],
        ["2cab7", CLASS_DATA.GRADE2.G2I],
        ["0840e", CLASS_DATA.GRADE2.G2J],
        ["ca6a3", CLASS_DATA.GRADE2.G2K],
        ["4344d", CLASS_DATA.GRADE2.T2A],
        ["75609", CLASS_DATA.GRADE2.T2B],
        ["6ec09", CLASS_DATA.GRADE2.T2C],
        ["b1d45", CLASS_DATA.GRADE2.J2A],
        ["644c6", CLASS_DATA.GRADE2.J2B],
        ["2caa1", CLASS_DATA.GRADE3.G3F],
        ["1ce85", CLASS_DATA.GRADE3.G3H],
        ["277c8", CLASS_DATA.GRADE3.G3J],
        ["f9c74", CLASS_DATA.GRADE3.G3K],
        ["0ac6a", CLASS_DATA.GRADE3.T3A]
    ]
);

export function getStampIndex(
    hashParam: string
): number{
    const searchedClassData = hashTable.get(hashParam);

    if (searchedClassData === undefined){
        // 不正なハッシュをパラメーターとして受け取った
        //   -> もう一度QRコードを読み込むようにお願いする
        throw new Error('received invalid hash pram');
    } 
    
    const stampIndex = searchedClassData.stampIndex;

    if (stampIndex === undefined){
        // stampIndexが割り当てられてないとき
        //   -> たぶん舞台のやつ
        throw new Error('the class does not have stampIndex')
    }

    return stampIndex;
}