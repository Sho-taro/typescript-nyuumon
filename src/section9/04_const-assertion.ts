export {};

// 例１
let name = 'Atsushi' as const;  // nameは文字列リテラル型が指定される
// name = 'アツシ';  // エラー

// 例２
let profile = {
    name: 'Atsushi',
    height: 178,
} as const;   // nameプロパティとheightプロパティはreadonlyになる
// profile.name = 'アツシ';  // エラー