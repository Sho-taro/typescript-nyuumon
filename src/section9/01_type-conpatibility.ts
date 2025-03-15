export {};

// 型の互換性

let foo: any;
let bar: string = 'TS';

console.log(typeof foo);
foo = bar;   // 代入可能
// このようなとき、any型はstring型と互換性がある、と言う
console.log(typeof foo);


// 例２
let foo2: 'aaa' = 'aaa';
foo = foo2;
console.log(typeof foo)

// 例3
interface Animal {
    age: number;
    name: unknown;
}

class Person {
    constructor(public age: number, public name: string){}
}

let me: Animal;
me = new Person(43, 'はむさん');
console.log(typeof me.name)

// TSの型システムは構造的部分型
// 「構造的部分型」は、継承関係ではなくオブジェクトが持っているプロパティが互換しているかどうか、つまり構造が同じかどうかに着目する
// 逆に「公称型」では、型の互換性は継承関係があるかどうかで決まる