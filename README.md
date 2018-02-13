# Notes

```bash
$ yarn add -S flux bootstrap@3.3.7 react-bootstrap superagent keymirror
```
> `bootstrap`用3.3.7版本，目前`react-bootstrap`還沒到新的版本4

## Flux

refs: [1](http://andyyou.logdown.com/posts/241839-flux-notes)

`dispatcher`, `store`, `views`, `actions`
想像一家商店(store)，裡面的補貨叫貨流程都有一定的SOP，所以是負責邏輯部分。而領班(dispatcher)則是收到(register)工作內容(actions)後負責出一張嘴分配工作給其他的員工，以完成營業(views)的前置作業，營運store。

```
Action > Dispatcher > Store > View
```

## Problems

* Problem1 (solved)
[ref](https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type)

注意呼叫callback(Conatact.js)是`AppStore.removeChangeListener(this.onChange)`，並非`AppStore.removeChangeListener(this.onChange())`

若是後者則會發生
```throw TypeError('listener must be a function');```

測試
```js
function a(){console.log('wow')}
typeof a === 'function'
typeof a() === 'undefined'
```
---

* Problem2 (solved)

```Encountered two children with the same key```
在原本頁面以接受外來的10個contacts，自建表單由於沒有設定id給`contact`使用，會使的id沒有改變，使得兩個新建的`contact`產生id的衝突，進而影響到`key`。

解決方式在該表單file建立變數：
```js 
let id = 11
```
每當呼叫完AppActions.saveContact()，讓`id++`，放在setState()裡面外面沒差

完整的程式碼下：
```js
let id = 11
export default class ContactListItem extends Component {

  handleSubmit(e) {
    if (!this.name.value) alert('type your name')
    else {
      this.setState({
        newContact: {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          id: id
        }
      }, () => {
        AppActions.saveContact(this.state.newContact)
      })
        id++
    }
    this.name.value = ''
    this.email.value = ''
    this.phone.value = ''
    e.preventDefault()
  }
}
```

另一種加入id到state裡面控制，`handleSubmit()`，但函式裡面兩個setState是同步執行的，所以`id`要設為10，而第二個setState即便是同步的狀況下也不能放在第一個setState前面。


```js
export default class ContactListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newContact: {
        /* 省略  */
        id: 10
      }
    }
  }

  handleSubmit(e) {
    if (!this.name.value) alert('type your name')
    else {
      this.setState({
        newContact: {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          id: this.state.newContact.id
        }
      }, () => {
        AppActions.saveContact(this.state.newContact)
      })
      this.setState({ newContact: { id: this.state.newContact.id + 1 } })
    }
    this.name.value = ''
    this.email.value = ''
    this.phone.value = ''
    e.preventDefault()
  }
}
```
---

另一個問題是自己新增的contact刪除不了，崩╰(〒皿〒)╯潰

---

### Bootstrap問題

* button
<button>的type若為submit，按下去會reload，使用event.preventDefault()

* 引用react-bootstrap有些大小寫要分清楚
像是</Panel.Body>誤寫成</Panel.body>

```
Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```


## Sort Function
```js
const SortByName = (a, b) => {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0))
}
```

## Refs

* AppStore.js參考[EventEmitter](https://ithelp.ithome.com.tw/articles/10185646)

* [keymirror工具](https://github.com/STRML/keyMirror)

* superagent以及其他methods[比較](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)

> AJAX/XHR/jQuery/Fetch
