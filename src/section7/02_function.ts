export {};

// 無名関数（アノニマス関数）による関数定義でTypeScriptを使う
let getBmi: (h: number, w: number) => number = function (
  h: number,
  w: number
): number {
  return w / (h * h);
};

console.log(getBmi(1.8, 70));
