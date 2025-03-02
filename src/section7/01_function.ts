export {};

// functionキーワードによる関数定義でTypeScriptを使う
function getBmi(h: number, w: number): number {
  return w / (h * h);
}

console.log(getBmi(1.8, 70));
