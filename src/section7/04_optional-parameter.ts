export {};

// オプション引数を設定する
// 引数echoFlagがオプション引数
let getBmi: (h: number, w: number, echoFlag?: boolean) => number = (
  h: number,
  w: number,
  echoFlag?: boolean
): number => {
  let bmi = w / (h * h);
  if (echoFlag) {
    console.log({ bmi });
  }
  return bmi;
};

getBmi(1.8, 70, true);
getBmi(1.8, 70, false);
getBmi(1.8, 70);
