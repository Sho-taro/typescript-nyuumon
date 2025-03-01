export {};

// unknown型は、型が不明であることを明示的に示す ＝ 型安全
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

console.log(typeof numberUnknown);    // -> 'number'
// let sumUnknown = numberUnknown + 10;    // コンパイルエラー：numberUnknownはunknown型なのに足し算していいのか、と言われている

// unknown型はtypeofキーワードを使ったif文と相性がいい
if(typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;    // if文の条件式で、変数numberUnknownがnumber型であることが保証されているので、コンパイルエラーにならない
    console.log(sumUnknown);   // -> 53
}

// このように、typeofキーワードを使って
// ある特定の型であることを確認しながら、コードを安全に実行させる仕組みのことを
// タイプガードと呼ぶ