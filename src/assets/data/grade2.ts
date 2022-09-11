import { classDataType, valueOf } from "./constants";

const G2A: classDataType = {
    className: "G2A",
    title: "VS嵐",
    description: "〜G2Aからの挑戦状〜　ライバル倒して景品を勝ちとれるか！",
} as const;

const G2B: classDataType = {
    className: "G2B",
    title: "里弥・噺愛好家",
    description: "I want to say only one thing.The earth is Blue",
} as const;

const G2C: classDataType = {
    className: "G2C",
    title: "キラキラゆうこりん",
    description: "私たちは個性豊かなクラスです！ぜひ写真を撮りにきてください♪",
} as const;

const G2D: classDataType = {
    className: "G2D",
    title: "It's a small world!",
    description: "イッツアスモールワールドを再現しました。是非来てください！",
} as const;

const G2E: classDataType = {
    className: "G2E",
    title: "Hang out-e(instagram:hangout_e_offcial)",
    description: "やあ、みんな！書きたいことがありすぎて、30字じゃおさまら…",
} as const;

const G2F: classDataType = {
    className: "G2F",
    title: "VS國",
    description: "陽気な男たちのパーリナイ！！キッキングスナイパー",
} as const;

const G2G: classDataType = {
    className: "G2G",
    title: "Gフェス！！",
    description: "射的や映えスポットなどいろいろあるよ！ぜひ来てね！",
} as const;

const G2H: classDataType = {
    className: "G2H",
    title: "手動プリクラ「MEIDEN STUDEO」",
    description: "手動プリクラ？悩まず足を運んでみて！思い出の１枚を撮れます！",
} as const;

const G2I: classDataType = {
    className: "G2I",
    title: "ジェットコースター",
    description: "教室全体を使ったジェットコースターです！",
} as const;

const G2J: classDataType = {
    className: "G2J",
    title: "卍カジノ卍",
    description: "あれ！？ここってラスベガス？ドキドキカジノパーティー♡",
} as const;

const G2K: classDataType = {
    className: "G2K",
    title: "漢の風船アート！！",
    description: "男だけのスポーツコースが風船でどんな”カワイイ”をつくったのか是非見に来てください",
} as const;

const T2A: classDataType = {
    className: "T2A",
    title: "夢のクラスへようこそ。",
    description: "みんなでコーヒーカップを回します！ぜひきてね✨",
} as const;

const T2B: classDataType = {
    className: "T2B",
    title: "ラボホテル　名電本店",
    description: "ラボホテル爆誕　〜フォトスポットを添えて〜",
} as const;

const T2C: classDataType = {
    className: "T2C",
    title: "C組遊技場",
    description: "遊技場みたいに多くのもので楽しめるようにしました。ぜひきてね。",
} as const;

const J2A: classDataType = {
    className: "J2A",
    title: "えんにちかも～",
    description: "縁日なんて子供じみたこと興味ねえ〜よ！だって？！？！！俺らは「本気」だぜ…！！！",
} as const;

const J2B: classDataType = {
    className: "J2B",
    title: "ポチポチ　VS カタカタ",
    description: "フリックVSタイピング！！入力速度で対決！挑戦者求む！",
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
