# 親→子コンポーネントへのデータやり取り2 
①親ページで子を呼び出す
```
<my-counter init="0">
            ↑子に渡すプロパティ
```
②子でプロパティを受け取る
```
props: ['init']
```
③受け取ったプロパティを料理する
```
<div>現在値は{{ current }}です
<input type="button" v-on:click="onclick" value="増やす />

data(){
    return{
        current: this.init　②propsで受取ったプロパティ
    }
}
methods: {
    onclick () {
        this.current++ ③dataで宣言したcurrentを++したものがhtmlで表示される
    }
}
```
## init属性をそのまま更新するのはよろしくない
* 一旦データオブジェクトに退避させ更新するようにする。
<hr>