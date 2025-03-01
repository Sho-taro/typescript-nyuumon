export {};

let data1 = undefined;   // 型推論ではany型
data1 = 123;  // もちろんエラーにはならない

let data2: undefined = undefined;    // undefinedしか許容したくない場合は明示的に型定義する
// data2 = 123;    // エラー
