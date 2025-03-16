export {};

// Record<K, T>
// 第一引数 K はユニオン型

type Members = "Taro" | "Jiro" | "Ken" | "Tom";

// let paymentStatus: {
//     Taro: boolean,
//     Jiro: boolean,
//     Ken: boolean,
//     Tom: boolean,
// } = {
//     Taro: true,
//     Jiro: false,
//     Ken: false,
//     Tom: false,
// }

let paymentStatus: Record<Members, boolean> = {
    Taro: true,
    Jiro: false,
    Ken: false,
    Tom: false,
}

// Recordの処理の中身
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
}