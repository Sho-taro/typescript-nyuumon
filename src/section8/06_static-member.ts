export {};

// 静的メンバと静的メソッド（クラスメンバ、クラスメソッド）
// インスタンスを生成しなくてもアクセスできるメンバ
class Me {
    static isProgrammer: boolean = true;
    static readonly firstName: string = 'Atsushi';
    static readonly lastName: string = 'Ishida';

    static work() {
        // return `Hey, guys! This is ${Me.firstName}!`;  // 非推奨
        return `Hey, guys! This is ${this.firstName}!`;  // 非推奨

    }
}

// let me = new Me();
// console.log(me.isProgrammer)

console.log(Me.isProgrammer);
Me.isProgrammer = false;
console.log(Me.isProgrammer);

console.log(Me.work());
// Me.firstName = 'Takahiro';   // readonlyな静的メンバは再代入できない
console.log(Me.work());
