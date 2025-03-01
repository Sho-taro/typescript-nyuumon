export {};

// interface
// 型エイリアスと違って、＝はいらない
// インターフェース名の語頭は必ず大文字。行末にはセミコロン(;)
interface ObjectInterface {
    color: string;
    size: string;
    onSale: boolean;
}

let shirt: ObjectInterface = {
    color: 'white',
    size: 'large',
    onSale: true,
}

// interfaceは、クラスをアノテーションする際に利用する