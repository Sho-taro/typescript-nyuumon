export {};

// ※豆知識：　TSは単一継承（複数のクラスを継承できない）
// ただし、インターフェースは複数実装（継承）できる implementsキーワードを使う

// インターフェースでシグネチャを定義
// シグネチャ　＝　プロパティ名やメソッド名のみを定義したもの（中身は定義しない）
interface Wizard {
    ionazun(): void;
}
interface Souryo {
    attack(): void;
}

class Hero implements Wizard, Souryo {
    ionazun(): void {
        console.log('ionazun');
    }
    attack(): void {
        console.log('kougeki');
    }
}

let taro = new Hero();
console.log(taro.ionazun());
console.log(taro.attack());
