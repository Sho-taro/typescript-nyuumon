export {};

type Profile = {
    name: string;
    age: number;
}

let me: Profile = {
    name: 'Ham',
    age: 43,
}

console.log(me.age)
me.age++;
console.log(me.age)


type ReadonlyProfile = Readonly<Profile>;
let friend: ReadonlyProfile = {
    name: 'Shigeru',
    age: 40,
}

// friend.age++;   // ageプロパティはreadonlyなため、エラー


// Readonlyの処理の中身
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}