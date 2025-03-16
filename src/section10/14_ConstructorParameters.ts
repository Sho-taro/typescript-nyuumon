export {};

// ConstructorParameters<T>
// 引数 T はクラス型

class Person {
  constructor(public name: string, public age: number) {}
}

let taro = new Person('Taro', 12);

type ConstructorParam = ConstructorParameters<typeof Person>;

let param: ConstructorParam = ['Jiro', 10];
let jiro = new Person(...param);

// ConstructorParametersの処理の中身
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;