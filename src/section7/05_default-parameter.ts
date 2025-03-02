export {};

// デフォルト引数を設定する
// 引数rateがデフォルト引数
const getNextYearSalary = (
  currentSalary: number,
  rate: number = 1.1
): number => {
  return currentSalary * rate;
};

console.log(getNextYearSalary(1000, 1.05));
console.log(getNextYearSalary(1000));