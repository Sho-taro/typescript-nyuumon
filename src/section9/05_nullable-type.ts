export {};

// Union型を使ってnullを許容する
let profile: { name: string; age: number | null } = {
  name: "Ham",
  age: null,
};
