export {};

// オーバーロードを実装する

// シグネチャを定義
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  // if(typeof value === 'number') {
  //     return value * 2;
  // } else if (typeof value === 'string') {
  //     return value + value;
  // } else {
  //     throw 'パラメータのデータ型が正しくありません。';
  // }
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));
// console.log(double(false));
