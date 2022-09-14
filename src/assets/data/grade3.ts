import { classDataType, valueOf } from "./constants";

const G3A: classDataType = {
    className: "G3A",
    title: "はちゃめちゃめどれー☆",
    description: "ありえへんくらい色んな曲を集めたんや！お前らのために踊ります。",
    
} as const;

const G3B: classDataType = {
    className: "G3B",
    title: "ダンス",
    description: "ダンスぜひ見に来てね！頑張るよ！！",
    
} as const;

const G3C: classDataType = {
    className: "G3C",
    title: "誠実・勤勉・ルーズリーフ",
    description: "行くぜ我らがC組！ダンス踊るぜ上手に！さぁ〜ステージに降臨！！",
    
} as const;

const G3D: classDataType = {
    className: "G3D",
    title: "オウカツ！〜オウエンカツドウ☆〜",
    description: "あれ？今応援されてる？そんな気持ちにさせる応援団です。押忍。",
    
} as const;

const G3E: classDataType = {
    className: "G3E",
    title: "ダンス＆ヲタ芸",
    description: "全国出場者３名！有料級の迫力！楽しさ！おもしろさ！",
    
} as const;

const G3F: classDataType = {
    className: "G3F",
    title: "カジノ",
    description: "多くのゲームを用意し、多くの生徒が楽しめるようにしました。ぜひ来てください！",
    stampIndex: 1
} as const;

const G3G: classDataType = {
    className: "G3G",
    title: "DKB48",
    description: "G3G全員でAKB48の踊りを覚えました！ぜひ見に来てください！",
    
} as const;

const G3H: classDataType = {
    className: "G3H",
    title: "任天堂world!!",
    description: "あの頃やっていたゲームの世界へ招待します！インスタ映えしちゃうかも！",
    stampIndex: 7
} as const;

const G3I: classDataType = {
    className: "G3I",
    title: "気配斬り",
    description: "開眼せよ、心の目を。",
    
} as const;

const G3J: classDataType = {
    className: "G3J",
    title: "G3Jのアソビ大全",
    description: "世間のせせこましさを忘れて、ボードゲームに興じて見ては？",
    
} as const;

const G3K: classDataType = {
    className: "G3K",
    title: "ストラックアウト",
    description: "全部抜いたら景品あります！来てね！",
    stampIndex: 2
} as const;

const T3A: classDataType = {
    className: "T3A",
    title: "Scattered World〜メイドを添えて〜",
    description: "君は４色の閃光を見る。気軽に来てね",
    stampIndex: 2
} as const;

const T3B: classDataType = {
    className: "T3B",
    title: "ダンス",
    description: "クラス全員で協力して頑張ります！",
    
} as const;

const T3C: classDataType = {
    className: "T3C",
    title: "心に響け！みんなを笑顔に！T3Cダンス！",
    description: "名電のみなさん！私たちT3Cが元気・勇気・笑顔を届けます！",
    
} as const;

const T3D: classDataType = {
    className: "T3D",
    title: "「Special SPOT」！",
    description: "記念写真のついでに、建築土木の課題研究内容を見てみませんか。",
    stampIndex: 1
} as const;

const J3A: classDataType = {
    className: "J3A",
    title: "エンターテイメントショー",
    description: "J3Aがお送りするエンターテイメントショー楽しみください　",
    
} as const;

const GRADE3 = {
    G3A,
    G3B,
    G3C,
    G3D,
    G3E,
    G3F,
    G3G,
    G3H,
    G3I,
    G3J,
    G3K,
    T3A,
    T3B,
    T3C,
    T3D,
    J3A,
} as const;
type GRADE3 = valueOf<typeof GRADE3>;
export default GRADE3;
