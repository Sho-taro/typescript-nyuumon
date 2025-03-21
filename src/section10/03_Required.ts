export {};

// Required ← 全てのプロパティを必須（required）にする

type Person = {
    name: string;
    age: number;
    nationality?: string;
}
type RequiredPerson = Required<Person>;