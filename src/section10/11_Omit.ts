export {};

// Omit<T, K>
// 第一引数 t はオブジェクト
// 第二引数 k は、オブジェクトのプロパティの型（すなわち、stringまたはnumberまたはシンボル）

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
}

type SimpleProfile = Omit<DetailedProfile, "name" | "height">;

// Omitの処理の中身
type Omit<T, K extends keyof any> = { [P in Exclude<keyof T, K>]: T[P]; }