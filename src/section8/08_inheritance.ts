export {};

class Animal {
    constructor(public name: string) {}
    run(): string {
        return 'I can run';
    }
}

// 継承はextendsキーワードを使う
class Lion extends Animal {
    public speed: number;
    constructor(public name: string, speed: number) {
        super(name);  //子クラスのコンストラクタ関数ではsuper()の呼び出しが必須
        this.speed = speed;
    }
    run(): string {
        let parentMessage = super.run();
        return `${parentMessage} ${this.speed}km/h.`;
    }
}

let lion = new Lion('sinba', 100);
console.log(lion.run());