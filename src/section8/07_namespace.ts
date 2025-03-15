export {};

namespace Japan {
    // exportすると、名前空間の外から参照可能となる
    export class Person {
        constructor(public name: string) {}
    }
}

namespace Europe {
    export namespace UK {
        export class Person {
            constructor(
                public firstName: string,
                public middleName: string,
                public lastName: string
            ) {}
        }
    }

    export namespace Germany {
        export class Person {
            constructor(
                public firstName: string,
                public middleName: string,
                public lastName: string
            ) {}
        }
    }
}

// 特定の名前空間のクラスを呼び出す　→　名前空間名.クラス名
const me = new Japan.Person('はむさん');
console.log(me.name);

const myFriend = new Europe.UK.Person('A', 'B', 'C');
console.log(myFriend.firstName);