export {};

// How to write index signature
// { [ index: typeForIndex ]: typeForValue }

// 例１
interface Profile {
    [index: string]: string | number;
}
let profile: Profile = {
    name: 'Ham',
};

// 例２
interface Profile2 {
    name: string;
    isOverTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile2: Profile2 = {
    name: 'はむ',
    isOverTwenty: true,
}