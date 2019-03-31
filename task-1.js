/*####Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
  result = true;
} else {
  result = false;
}
```*/
var a = 1;
var b = 2;
var result = (a + b < 4) ? console.log(true) : console.log(false);

