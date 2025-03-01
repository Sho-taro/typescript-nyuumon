export {};

// tuple型は共用型と違い、順序の制約を持つ
let profile: [string, number] = ['Ken', 19];
// profile = [19, 'Ken'];  // これは型エラー

let profile2: [string, number, boolean] = ['Taro', 22, true];
console.log({ profile2 })