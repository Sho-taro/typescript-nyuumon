export {};

// 抽象クラスはabstractキーワードを使う
abstract class Animal {
    // 抽象メソッド（処理の中身は子クラスで実装する）
    abstract cry(): string;
    run(): string {
        return 'I can run 80km/h';
    }
}

// 子クラスの中で必ず抽象メソッドの中身の実装を行う
class Lion extends Animal {
    cry(): string {
        return 'roar';
    }
}

class Tiger extends Animal {
    cry(): string {
        return 'grrr';
    }
}