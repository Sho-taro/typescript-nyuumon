export {};

// object型は、型の制約が緩い（objectの形式なら何でもOKになってしまう）
let profile1: object = { name: 'Ken' };
profile1 = { birthYear: 1996 };


// 次のように書くと、強い型制約を持たせることができる
let profile2: {
    name: string;
} = { name: 'John'};

// birthYearプロパティは型定義に書かれていないので、これはエラーになる
// profile2 = { birthYear: 1997 };