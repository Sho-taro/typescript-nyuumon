export {};

// 型に制約を与えるための方法
// ※アサーション＝主張・断言

let name: any = 'Ham';

// 方法１：asを使った型アサーション
// let len: number = name.length;
// let len = name.length as number;
let len = (name as string).length;

// 方法２: <>を使った型アサーション（JSXの記法と似ているため非推奨）
// let len = (<string>name).length;
