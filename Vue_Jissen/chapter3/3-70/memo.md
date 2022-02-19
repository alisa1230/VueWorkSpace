# 属性名をブラケットで括ることで、jsの値から動的に生成できる（動的引数）
v-bindでもv-onでも動的引数を利用できる

ソースの説明：
<h2> 入力値に応じて<img>要素のheight/widhを設定している </h2>
ちょっとよくわからない。。
<br />
[v-bindディレクティブの動的引数の指定例] (https://johobase.covue-js-directive-dynamic-arguments/)

<br/>

```html
<a v-bind:[attribute]="url">リンク</a>
```
```javascript
Vue.createApp({
  data: function() {
    return {
      attribute: 'href',
	  url: 'https://johobase.com/'
    }
  }
}).mount('#app')
```
出力されるHTML
```html
 <a href="https://johobase.com/"> リンク </a>
 ```