export {};

let absence1 = null;   //型推論ではany型
absence1 = 'hello';   // もちろんエラーにはならない

let absence2: null = null;   //nullしか許容したくない場合は明示的にnullで型定義する
// absence2 = 'hello';   // エラー
