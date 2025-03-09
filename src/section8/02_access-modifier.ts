export {};

class Person {
  // クラスのプロパティを宣言
  public name: string; // public はどこからでもアクセス可能
  private age: number; // private は自身のクラス内からのみアクセス可能
  protected nationality: string; // protected は自身のクラス内もしくは子クラス内からアクセス可能

  constructor(name: string, age: number, nationality: string) {
    // constructorの戻り値に対する型アノテーションは書いてはいけない
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
    private sex: boolean;
    constructor(name: string, age: number, nationality: string, sex: boolean) {
        super(name, age, nationality);
        this.sex = sex;
    }

    profile(): string {
        return `name: ${this.name}, nationality: ${this.nationality}, sex: ${this.sex}`;
    }
}

let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
// console.log(taro.age)  // privateプロパティにはインスタンスからアクセスできない
console.log(taro.profile());

let robot = new Android("XYZ", 10, "USA", true);
console.log(robot. profile())
