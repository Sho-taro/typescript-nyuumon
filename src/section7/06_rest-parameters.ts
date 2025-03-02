export {};

// レストパラメータ（残余引数）を設定する
// 引数valuesがレストパラメータ
const getSum = (...values: number[]) => {
    console.log(values);
}

getSum(1, 2, 3, 4, 5);


// 少し応用
// コールバック関数
const reducer = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
}

const getSum2 = (...values: number[]): number => {
    // 配列のreduceメソッドを使用
    return values.reduce(reducer);
}

console.log(getSum2(1, 2, 3, 4, 5, 6));