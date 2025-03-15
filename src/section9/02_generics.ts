export {};

// ジェネリクス型
// 汎用的なメソッドに対して、特定の型を紐づける仕組みのこと

// 受け取った引数の型と同じ型の戻り値を返す関数を実装することを考える
// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }



// 例１：関数定義でジェネリクスを使う
// 1-1. 関数宣言
// function echo<T>(arg: T): T {
//     return arg;
// }

// 1-2. 関数式
const echo = function<T>(arg: T) {
    return arg;
}
// 1-3. アロー関数
// const echo = <T>(arg: T): T => {
//     return arg;
// }

console.log(echo<number>(100));
console.log(echo<string>('ハムさん'));
console.log(echo<boolean>(true));



// 例２：クラスでジェネリクスを使う
class Mirror<T> {
    constructor(public value: T) {}

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo);
console.log(new Mirror<string>('はむ').echo);