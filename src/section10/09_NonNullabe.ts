export {};

// Exclude<T, U>
type DebugType = () => void;
type SomeType = string | number | DebugType;

// NonNullable<T>
// ユニオン型から null型やundefined型を排除してくれる
type MyNullableTypes = string | number | null | undefined;
type MyNonNullableTypes = NonNullable<MyNullableTypes>;

// NonNullableの処理の中身
type MyNonNullable<T> = T extends null | undefined ? never : T;
