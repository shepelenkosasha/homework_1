/*# Задача 8

Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

Использовать встроенные методы массивов — нельзя.

```js
const array = [1, 2, 3, 4, 5, 6];
```*/

const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i in arr) {
	if (arr[i] % 2 === 0 && arr[i] > 3) {
		sum += arr[i];
	}
}
console.log(sum);