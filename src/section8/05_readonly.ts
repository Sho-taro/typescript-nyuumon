export {};

class VisaCard {
    constructor(public readonly owner: string) {}
    // constructor(readonly owner: string) {}  // publicは省略可

    // readonlyプロパティにはsetterは設定できない
    // set owner(newOwner: string) {
    //     this._owner = newOwner;
    // }
}

let myVisaCard = new VisaCard('Ham');
console.log(myVisaCard.owner);
// myVisaCard.owner = '新しいオーナー';