export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;
// ↓ Partialの処理の中身（インデックスシグネチャを使用）
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};


// ※keyofキーワード ← 全てのプロパティ名の文字列リテラルのユニオン型を返す
type PropertyTypes = keyof Profile;  // すなわちこれは、下の行と同義
// type PropertyTypes = "name" | "age";