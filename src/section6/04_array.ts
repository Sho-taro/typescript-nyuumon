export {};

let nums1: number[] = [1, 2, 3];
console.log({ nums1 });

// 下記でもOK（ただし非推奨）
// インターフェースとジェネリクスを使用
let nums2: Array<number> = [4, 5, 6];
console.log({ nums2 });

let cities: Array<string> = ['Tokyo', 'Osaka', 'Nagoya'];
console.log({ cities });

// ２次元配列の型アノテーション
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 共用型（ユニオン型）
// 共用型は型の順序を指定できない
let mix: (string | number | boolean)[] = [1, false, 'Japan'];
console.log({ mix });
