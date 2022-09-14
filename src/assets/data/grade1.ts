import { classDataType, valueOf } from "./constants";

const G1A: classDataType = {
    className: "G1A",
    title: "ファイディング〇〇",
    description: "ダンボールでできた迷路の中で隠された〇〇を探しちゃおう！",
    stampIndex: 4,
} as const;

const G1B: classDataType = {
    className: "G1B",
    title: "目に見えるものが真実とは限らない　何が本当で何がウソか　コンフィデンスカジノの世界へようこそ　〜G1Bがやってみた編",
    description: "勝つか負けるかあなたの運次第。素敵な時間へようこそ。",
    stampIndex: 7,
} as const;

const G1C: classDataType = {
    className: "G1C",
    title: "STRONG GAL",
    description: "G1C本気の最高傑作。ここなら誰でも”最強のギャル”になれる",
    stampIndex: 1,
} as const;

const G1D: classDataType = {
    className: "G1D",
    title: "アニメ感する写真映えスポット",
    description: "ぜひ、あなたもアニメの世界に迷い込んでみませんか？ステキな写真がとれますよ✨",
    stampIndex: 0,
} as const;

const G1E: classDataType = {
    className: "G1E",
    title: "G1E THEATER",
    description: "G1Eは、教室でパラパラ映画とオブジェをやります！",
    stampIndex: 8,
} as const;

const G1F: classDataType = {
    className: "G1F",
    title: "けんくんち。",
    description: "文房具などの景品をご用意してます！",
    stampIndex: 1,
} as const;

const G1G: classDataType = {
    className: "G1G",
    title: "タバコレ",
    description: "タバコレとはパリコレ！運がいいとイケメンが歩いているかも！？",
    stampIndex: 6,
} as const;

const G1H: classDataType = {
    className: "G1H",
    title: "カジノ＆フォトスポット",
    description: "本格的なカジノにオシャレなフォトスポットをやっています！",
    stampIndex: 0,
} as const;

const G1I: classDataType = {
    className: "G1I",
    title: "縁日からの脱出〜思い出は清水神社と共に〜",
    description: "清水神社を舞台に、おみくじやミッションを用意しています！",
    stampIndex: 6,
} as const;

const G1J: classDataType = {
    className: "G1J",
    title: "Activity performance report",
    description: "各部活の日頃の様子や試合を動画で流したり、展示したりします。",
    stampIndex: 0,
} as const;

const T1A: classDataType = {
    className: "T1A",
    title: "千と千尋の神隠しの世界",
    description: "千尋になりきれるような景観になっているので誰でも楽しめます！",
    stampIndex: 0,
} as const;

const T1B: classDataType = {
    className: "T1B",
    title: "名電王",
    description: "様々なクイズ用意して誰でも楽しめられるようになっています！！",
    stampIndex: 4,
} as const;

const T1C: classDataType = {
    className: "T1C",
    title: "遊★技★場",
    description: "T1CT1Dの合同企画！「わははははは！ずっと俺のターン！」",
    stampIndex: 3,
} as const;

const T1D: classDataType = {
    className: "T1D",
    title: "まつり(いろいろ)",
    description: "全員集合！！T1Dの祭りが始まるゾ",
    stampIndex: 2,
} as const;

const PTA: classDataType = {
    className: "PTA",
    title: "MEIDENエールの木",
    description: "花びらにみんなが元気になるメッセージを書いて貼ってください",
    stampIndex: 2,
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
    PTA,
} as const;
type GRADE1 = valueOf<typeof GRADE1>;
export default GRADE1;
