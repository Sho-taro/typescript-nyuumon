export {};

// アロー関数による関数定義でTypeScriptを使う
let getBmi: (h: number, w: number) => number = (
  h: number,
  w: number
): number => {
  return w / (h * h);
};

console.log(getBmi(1.8, 70));

// アロー関数のreturnキーワードを省略する
let getBmi2: (h: number, w: number) => number = (
  h: number,
  w: number
): number => w / (h * h);

console.log(getBmi2(1.8, 70));