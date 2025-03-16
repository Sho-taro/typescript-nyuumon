export {};

// Exclude<T, U>
type DebugType = () => void;
type SomeType = string | number | DebugType;


// Extract<T, U>
type StringType = Extract<SomeType, string>;

// Extractの処理の中身
type MyExtract<T, U> = T extends U ? T : never;
