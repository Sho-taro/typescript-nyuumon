export {};

// intersection型（交差型）
// 既存の型を活かしつつ、新たな型を作る

type Pitcher = {
    throwingSpeed: number;
};

type Batter = {
    battingAverage: number;
};

const Sasaki: Pitcher = {
    throwingSpeed: 154,
};

const Ochiai: Batter = {
    battingAverage: 0.367,
}

// Pitcher型とBatter型を融合した新たな型（TwoWayPlayer型）を作りたい
// こんな風に１から手入力しなくても
// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };
// intersection型を使って楽に作成できる
type TwoWayPlayer = Pitcher & Batter;

const Ohtani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286,
};