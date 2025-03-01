export {};

// void型は、主に関数の戻り値が無いことを期待するときに使う
function returnNothing(): void {
    console.log("I don't return nothing.")
}

console.log(returnNothing());


// 豆知識
// void型にはundefinedが含まれる
let foo: void = undefined;
// let foo2: void = null;    // これは型エラー