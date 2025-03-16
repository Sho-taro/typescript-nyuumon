export {};

// Exclude<T, U>
type DebugType = () => void;
type SomeType = string | number | DebugType;
type FuncType1 = Exclude<SomeType, string | number>;
type FuncType2 = Exclude<SomeType, Function>;

// Excludeの処理の中身
type MyExclude<T, U> = T extends U ? never : T;
// Distributive conditional Types
// A | B | C extends U ? X : Y;　は、下記と同義である。
// (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y);

// ※Function型　← 関数の型の総称
let myFunc: Function = () => "aaa";
// let myFunc: Function = 'aaa';  // これはエラー
