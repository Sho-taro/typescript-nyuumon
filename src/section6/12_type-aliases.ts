export {};

// 例えばオブジェクト型に型エイリアスを付けると、簡単に使いまわせる
const profile1: {
    name: string;
    age: number;
} = {
    name: 'Ham',
    age: 43,
}

const profile2: {
    name: string;
    age: number;
} = {
    name: 'Taro',
    age: 20,
}

// 型エイリアス
// 型エイリアス名の語頭は必ず大文字。行末にはセミコロン(;)
type Profile = {
    name: string;
    age: number;
    sex: string;
}

const profile: Profile = {
    name: 'Jiro',
    age: 33,
    sex: 'male',
}

// 型エイリアスはリバースエンジニアリング的な手法も使える
type Prof2 = typeof profile;