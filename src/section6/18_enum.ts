export {};

// enum型（列挙型）
// 最初の要素から順に 0, 1, 2, 3 ... と採番してくれる
enum Months {
    // January = 1,   // このように記述すると 1 スタートとなる
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
};

console.log(Months.January);  // -> 0
console.log(Months.April);  // -> 3
console.log(Months.December);  // -> 11


// 文字列のenum型も可能
enum ColorCodes {
    RED = '#FF0000',
    WHITE = 'FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000',
};

let blue = ColorCodes.BLUE;
console.log({blue});

// 後から要素を追加することも可能
enum ColorCodes {
    YELLOW = '#FFFF00',
}
console.log(ColorCodes.YELLOW);