import axios from  'axios';

// 学習教材のURL
// https://udemy-utils.herokuapp.com/api/v1/articles?token=token123

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(response) {
    // 型が分からない場合はany型を使う
    // any型を使うのは極力避ける
    // let data: any = response.data;

    // object型を使っても良いが、まだ制約は弱い
    // let data: object[] = response.data;

    // interfaceを使ってオブジェクトの独自の型を定義する
    // interface名の先頭は大文字？
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    let data: Article[] = response.data;
    // これは型エラー
    // data = [
    //     {
    //         id: 1,
    //         title: 'title',
    //         description: 'aaa',
    //         year: 1996,
    //     }
    // ]
    console.log(data);
})

export {};
