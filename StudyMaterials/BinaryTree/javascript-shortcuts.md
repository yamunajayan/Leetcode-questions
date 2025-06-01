
# 📘 JavaScript Quick Reference

A beginner-friendly guide to core JavaScript features for daily coding.

---

## 🔤 Data Types

| Type        | Example                     |
|-------------|-----------------------------|
| String      | `"Hello World"`             |
| Number      | `42`, `3.14`                |
| Boolean     | `true`, `false`             |
| Undefined   | `let x;`                    |
| Null        | `let y = null;`             |
| Object      | `{ name: "Yamua", age: 25 }`|
| Array       | `[1, 2, 3]`                 |
| Function    | `function greet() {}`       |

---

## 🔁 Array Methods

### 🔹 `.map()`

Creates a new array by applying a function to each item.

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]
```

---

### 🔹 `.reduce()`

Reduces the array to a single value.

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 10
```

---

### 🔹 `.slice(start, end)`

Returns a **shallow copy** of a portion of the array.

```js
const arr = [10, 20, 30, 40];
arr.slice(1, 3); // [20, 30]
```

> ✅ Does not modify the original array.

---

### 🔹 `.splice(start, deleteCount, ...items)`

**Modifies the array** by removing/replacing/adding elements.

```js
const arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 10); // Removes 2, 3 and inserts 9, 10
console.log(arr); // [1, 9, 10, 4]
```

> ⚠️ Alters the original array.

---

### 🔹 `.sort()`

Sorts the array **in place**.

```js
const nums = [5, 1, 3, 2];
nums.sort((a, b) => a - b); // Ascending [1, 2, 3, 5]
```

> Sorts alphabetically by default — use a compare function for numbers.

---

## 🧩 Spread Operator `...`

### 🔹 Copying Arrays

```js
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]
```

---

### 🔹 Merging Arrays

```js
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]
```

---

### 🔹 Expanding Function Arguments

```js
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
sum(...nums); // 6
```

---

## 📚 Keep Learning

- Learn more about [MDN Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Experiment with tools like [JSFiddle](https://jsfiddle.net) or [CodeSandbox](https://codesandbox.io/)

---
