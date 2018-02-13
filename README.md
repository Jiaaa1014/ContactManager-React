# Notes

```bash
$ yarn add -S flux bootstrap@3.3.7 react-bootstrap superagent keymirror
```
> `bootstrap`用3.3.7版本，目前`react-bootstrap`還沒到新的版本4

## Flux
* refs: [1](http://andyyou.logdown.com/posts/241839-flux-notes)

`dispatcher`, `store`, `views`, `actions`
想像一家商店(store)，裡面的補貨叫貨流程都有一定的SOP，所以是負責邏輯部分。而領班(dispatcher)則是收到(register)工作內容(actions)後負責出一張嘴分配工作給其他的員工，以完成營業時間(views)的前置作業，營運store。


```
Action > Dispatcher > Store > View
```

Action顧名思義就是行為通常帶著`payload`以及`type`，有些行為帶有payload(參數)，有些沒有。四大概念files之間通常會共用一個constants file，定義現在我們在做的事情的名字以便溝通，傳給`type`。


## Problems solved

* [ref](https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type)
注意呼叫callback(Conatact.js)
是`AppStore.removeChangeListener(this.onChange)`，並非`AppStore.removeChangeListener(this.onChange())`

若是後者會發生
```throw TypeError('listener must be a function');```

測試
```js
function a(){console.log('wow')}
typeof a === 'function'
typeof a() === 'undefined'
```

## Refs

* AppStore.js參考[EventEmitter](https://ithelp.ithome.com.tw/articles/10185646)

* [keymirror工具](https://github.com/STRML/keyMirror)

* superagent以及其他methods[比較](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)

> AJAX/XHR/jQuery/Fetch