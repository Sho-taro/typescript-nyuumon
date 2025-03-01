export {};

// リテラル型では、プリミティブ型よりもさらに細かな指定ができる
// 3つのリテラル型　-> 文字列、数値、真偽値

let myFavorite: 'curry' = 'curry';
// myFavorite = 'pasta';  // これはコンパイルエラー

let lang: 'JPN'|'ENG' = 'JPN';
lang = 'ENG';
// lang = 'CHN';  // これはコンパイルエラー

let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
// month = 13;   // これはコンパイルエラー

