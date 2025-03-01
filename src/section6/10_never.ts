export {};

// 関数の呼び元？に戻らない場合は、関数の戻り値の型にnever型を指定する
function throwError(message: string): never {
  throw new Error(message);
//   return;    // never型ではreturn文を書くとエラーになる
}

try {
  throwError('test');
} catch (e) {
  console.log({ e });
}


// void型→呼び出し元に戻る
// never型→呼び出し元に戻らない