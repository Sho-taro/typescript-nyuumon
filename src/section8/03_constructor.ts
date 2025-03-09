export {};

class Person {
    // constructorメソッドの中でプロパティの初期化処理を行う
    constructor(public name: string, protected age: number) {
        // 以下の文は省略できる
        // this.name = name;
        // this.age = age;
    }
}

const me = new Person('Ham', 43);
console.log({me});