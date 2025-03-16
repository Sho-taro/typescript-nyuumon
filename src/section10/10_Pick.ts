export {};

// Pick<T, K>
// 第一引数 t はオブジェクト
// 第二引数 k は、t に含まれるプロパティでなければならない
type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
}

type SimpleProfile = Pick<DetailedProfile, "name" | "height">;

// Pickの処理の中身
type Pick<T, K extends keyof T> = { [P in K]: T[P]; }