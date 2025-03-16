export {};

// ReturnType<T>
// 引数 T はFunction型
// 関数の戻り値の型を返す
function add(a: number, b: number) {
    return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ReturnTypeの処理の中身
type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;


// ※inferキーワード
// inferは、条件文の中でのみ使用できる
// inferを使うと、条件の一部としてジェネリクス型を宣言できるようになる（上記の例では R がこれに該当）