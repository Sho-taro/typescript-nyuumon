export {};

class MyNumberCard {
    // _owner
    //  ＊参照できる
    //  ＊途中で変更できない
    // _secretNumber
    //  ＊参照できない
    //  ＊途中で変更できる
    constructor(private _owner: string, private _secretNumber: number) {}

    // getter
    get owner(): string {
        return this._owner;
    }

    // setter
    set secretNumber(num: number) {
        this._secretNumber = num;
    }

    debugP() {
        return `_secretNumberの値は${this._secretNumber}です。`;
    }
}

let card = new MyNumberCard('Ham', 12345);
// card.owner = '新オーナー';
console.log(card.owner);   // getterを呼び出す
// console.log(card.owner());   // （誤）getterを呼び出す

console.log(card.debugP());
card.secretNumber = 67890;   // setterを呼び出す
// card.secretNumber(67890);  // （誤）setterを呼び出す
console.log(card.debugP());