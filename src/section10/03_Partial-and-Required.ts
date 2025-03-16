export {};

type Profile = {
    name: string;
    age: number;
};

// Partial ← 全てのプロパティを任意（optional）にする

// type Profile2 = {
//     name?: string;
//     age?: number;
// }
type PartialProfile = Partial<Profile>;


// Required ← 全てのプロパティを必須（required）にする

type Person = {
    name: string;
    age: number;
    nationality?: string;
}
type RequiredPerson = Required<Person>;