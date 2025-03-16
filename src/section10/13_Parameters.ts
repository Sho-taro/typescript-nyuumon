export {};

// Parameters<T>
// 引数 T はFunction型
// 引数に渡された関数の引数の型を返す

const debugProfile = (name: string, age: number) => {
    console.log({name, age});
};

debugProfile('Ham', 43);
type Profile = Parameters<typeof debugProfile>;

const param: Profile = ['Gloria', 24];
// const param2: Profile = ['Alice', true];  // これはエラー
debugProfile(...param);

// Parametersの処理の中身
type MyParameters<T extends Function> = T extends (...args: infer P) => any ? P : never;