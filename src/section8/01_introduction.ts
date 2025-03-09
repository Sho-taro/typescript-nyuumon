export {};

class Person {
    // クラスのプロパティを宣言
    name: string;
    age: number;

    constructor(name: string, age: number) {  // constructorの戻り値に対する型アノテーションは書いてはいけない
        this.name = name;
        this.age = age;
    }

    profile (): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

let taro = new Person('Taro', 30);
console.log({taro})
console.log(taro.profile())