
# **React-js**
`

- ![diagram](./Images/image.png)


# 🔥 Difference Between `||` and `??` in JavaScript (React Friendly Guide)

---

## 🧠 Core Idea

### ✅ `||` (Logical OR)

Returns the **first truthy value**

👉 If the left side is *falsy*, it moves to the right

---

### ✅ `??` (Nullish Coalescing)

Returns the **first defined value**

👉 Only ignores:

* `null`
* `undefined`

---

## ⚡ What is “falsy”?

In JavaScript, these values are considered falsy:

```js
false
0
""
null
undefined
NaN
```

---

## 🔍 Behavior Difference

### 1️⃣ Using `||`

```js
let value = 0 || "fallback";
console.log(value);
```

👉 Output:

```js
"fallback"
```

❗ Why?
Because `0` is falsy → so it picks `"fallback"`

---

### 2️⃣ Using `??`

```js
let value = 0 ?? "fallback";
console.log(value);
```

👉 Output:

```js
0
```

✅ Because:

* `0` is NOT null/undefined → so it keeps `0`

---

## 🔥 Side-by-side Comparison

```js
console.log(0 || "A");         // "A"
console.log(0 ?? "A");         // 0

console.log("" || "B");        // "B"
console.log("" ?? "B");        // ""

console.log(false || "C");     // "C"
console.log(false ?? "C");     // false

console.log(null || "D");      // "D"
console.log(null ?? "D");      // "D"

console.log(undefined || "E"); // "E"
console.log(undefined ?? "E"); // "E"
```

---

## ⚛️ Why this matters in React

### ❌ Problem with `||`

```js
let count = 0;

return <p>{count || "empty"}</p>;
```

👉 Output:

```
empty
```

❗ WRONG — because:

* `0` is a valid value
* But `||` treats it as falsy

---

### ✅ Correct with `??`

```js
let count = 0;

return <p>{count ?? "empty"}</p>;
```

👉 Output:

```
0
```

✔️ Correct behavior

---

## 🧩 Real-life Analogy

* `||` → “Give me something TRUTHY”
* `??` → “Give me something that EXISTS”

---

## 🧠 When to use what?

### ✅ Use `||` when:

You want a default for all falsy values

```js
let name = input || "Guest";
```

---

### ✅ Use `??` when:

`0`, `false`, `""` are valid values

```js
let count = data.count ?? 0;
```

---

## 🚀 Pro Tip

Avoid mixing directly:

```js
a || b ?? c  ❌ (Syntax Error)
```

👉 Use parentheses:

```js
(a || b) ?? c  ✅
```

---

## 🎯 Final Summary

| Operator | Checks for | Replaces             |       |                               |
| -------- | ---------- | -------------------- | ----- | ----------------------------- |
| `        |            | `                    | falsy | 0, "", false, null, undefined |
| `??`     | nullish    | only null, undefined |       |                               |

---

## 🔁 Revision Questions

<details>
<summary>Click to expand</summary>

* What does `||` return?
* What does `??` ignore?
* Why is `count || "empty"` wrong in React?
* When should you prefer `??` over `||`?

</details>

# 🚀 Topic 01 — ES6+ Essentials

---

## 🧠 First Principle: Why does this matter for React?

React code is **100% modern JavaScript**.
If you don’t know ES6+, React will look like some *magic syntax* — but it’s just JavaScript.

👉 Learn this → React becomes easy.

---

## 1️⃣ `let` and `const` — Stop using `var`

### ❌ Problem with `var`

```js
if (true) {
  var name = "React";
}
console.log(name); // "React" ❌ leaked outside
```

### ✅ Correct with `let` & `const`

```js
if (true) {
  let name = "React";
  const version = 18;
}
console.log(name); // ❌ ReferenceError (correct behavior)
```

---

### 📌 Rule of Thumb

* ✅ Use `const` by default
* ✅ Use `let` when reassigning
* ❌ Never use `var`

```js
const user = { name: "Ali" };
user.name = "Sara"; // ✅ allowed (object mutated)

let count = 0;
count = count + 1; // ✅ reassigned
```

---

## 2️⃣ Arrow Functions — Used everywhere in React

```js
// Old
function add(a, b) {
  return a + b;
}

// Arrow
const add = (a, b) => a + b;

const double = n => n * 2;

const greet = (name) => {
  const message = "Hello " + name;
  return message;
};
```

---

### ⚛️ React Usage

```jsx
const Button = () => {
  return <button>Click me</button>;
};

<button onClick={() => console.log("clicked")}>
  Click
</button>
```

---

## 3️⃣ Destructuring — MOST IMPORTANT

### 📦 Object Destructuring

```js
const user = { name: "Ali", age: 25 };

const { name, age } = user;

const { name: userName } = user;

const { role = "user" } = user;
```

---

### 📦 Array Destructuring

```js
const colors = ["red", "green", "blue"];

const [first, second] = colors;
const [, , third] = colors;
```

---

### ⚛️ React Usage

```jsx
const [count, setCount] = useState(0);

const UserCard = ({ name, age }) => {
  return <p>{name} is {age}</p>;
};
```

---

## 4️⃣ Spread & Rest (`...`)

### 🔹 Spread

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];

const user = { name: "Ali", age: 25 };

const updatedUser = { ...user, age: 26 };
```

---

### 🔹 Rest

```js
const [first, ...rest] = [1, 2, 3, 4];

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
```

---

### ⚛️ React Usage

```jsx
const [user, setUser] = useState({ name: "Ali", age: 25 });

// ❌ Wrong
user.age = 26;
setUser(user);

// ✅ Correct
setUser({ ...user, age: 26 });
```

---

## 5️⃣ Template Literals

```js
const name = "Ali";
const age = 25;

const msg = `My name is ${name} and I am ${age}`;

const status = `Status: ${age >= 18 ? "Adult" : "Minor"}`;
```

---

## 6️⃣ Short-circuit & Optional Chaining

```js
// &&
isLoggedIn && console.log("Welcome");

// ||
const display = username || "Guest";

// ??
const count = 0;
const display1 = count || "nothing"; // ❌ wrong
const display2 = count ?? "nothing"; // ✅ correct

// ?.
const user = null;
console.log(user?.name); // undefined
```

---

### ⚛️ React Usage

```jsx
{isLoggedIn && <Dashboard />}

{user?.profile?.avatar && (
  <img src={user.profile.avatar} />
)}
```

---

## 🎯 Interview Questions

<details>
<summary>Click to expand</summary>

### ❓ Difference between `??` and `||`

* `||` → replaces falsy values (`0`, `""`, `false`)
* `??` → replaces only `null` & `undefined`

👉 Use `??` in React when `0` or `false` are valid

---

### ❓ Why spread state?

React checks **reference**.
Same object → no re-render
New object → re-render ✅

---

### ❓ What is this?

```js
const [count, setCount] = useState(0);
```

👉 Array destructuring

</details>

---

## 🔁 Revision Checklist

* [ ] Difference between `let`, `const`, `var`
* [ ] Arrow functions syntax
* [ ] Destructuring (object + array)
* [ ] Spread vs Rest
* [ ] Template literals
* [ ] `||` vs `??`
* [ ] Optional chaining

---

## 🧪 Practice Tasks

* Create a counter using `useState`
* Update object state using spread
* Render UI using conditional `&&`
* Handle null data using `?.`

---

We already crushed Topic 01 just above! 🎯 You've got `let/const`, arrow functions, destructuring, spread/rest, template literals, and short-circuit operators covered.

Let's keep the momentum and jump straight into **Topic 02 — Array Methods.** These are the backbone of rendering lists and managing data in React.

---

# Topic 02 — Array Methods

## First principle: Why does React care so much about these?

In React, your UI is a function of your data. You have an array of users → you render a list of cards. You have an array of products → you filter, sort, display. **You never write `for` loops in React JSX.** Array methods are how you transform data into UI — cleanly, in one line.

---

## 1. `.map()` — Transform every item

Takes every item, runs a function on it, returns a **new array** of the same length.

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]

// Original is UNTOUCHED
console.log(numbers); // [1, 2, 3, 4]
```

**Real React use — rendering a list:**

```jsx
const users = [
  { id: 1, name: "Ali", role: "Admin" },
  { id: 2, name: "Sara", role: "Editor" },
  { id: 3, name: "Ravi", role: "Viewer" },
];

const UserList = () => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} — {user.role}
        </li>
      ))}
    </ul>
  );
};
```

The `key` prop is required — React uses it to track which item changed. Always use a unique ID, never the array index (unless you have no choice).

---

## 2. `.filter()` — Keep only matching items

Returns a **new array** with only the items where the function returns `true`.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

const users = [
  { name: "Ali",  active: true  },
  { name: "Sara", active: false },
  { name: "Ravi", active: true  },
];

const activeUsers = users.filter(user => user.active);
// [{ name: "Ali", active: true }, { name: "Ravi", active: true }]
```

**Real React use — deleting an item from state:**

```jsx
const [todos, setTodos] = useState([
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build project" },
  { id: 3, text: "Get job" },
]);

const deleteTodo = (id) => {
  // Keep everything EXCEPT the one with this id
  setTodos(todos.filter(todo => todo.id !== id));
};

return (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);
```

No splice, no index juggling. One line removes an item from state.

---

## 3. `.reduce()` — Collapse an array into one value

The most powerful — and most misunderstood — method. It takes every item and "accumulates" them into a single result (a number, object, array, anything).

```js
// Signature: array.reduce((accumulator, currentItem) => ..., initialValue)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, n) => acc + n, 0);
// Step 1: acc=0,  n=1 → 1
// Step 2: acc=1,  n=2 → 3
// Step 3: acc=3,  n=3 → 6
// Step 4: acc=6,  n=4 → 10
// Step 5: acc=10, n=5 → 15
console.log(sum); // 15
```

**Reducing to an object — very common in real apps:**

```js
const cart = [
  { id: 1, item: "Phone",  price: 30000 },
  { id: 2, item: "Case",   price: 500   },
  { id: 3, item: "Charger",price: 1200  },
];

// Total price
const total = cart.reduce((acc, product) => acc + product.price, 0);
// 31700

// Group by category
const people = [
  { name: "Ali",  dept: "Engineering" },
  { name: "Sara", dept: "Design"      },
  { name: "Ravi", dept: "Engineering" },
];

const grouped = people.reduce((acc, person) => {
  const dept = person.dept;
  if (!acc[dept]) acc[dept] = [];
  acc[dept].push(person);
  return acc;
}, {});

// {
//   Engineering: [{ name: "Ali"... }, { name: "Ravi"... }],
//   Design:      [{ name: "Sara"... }]
// }
```

---

## 4. `.find()` — Get the first match

Returns the **item itself** (not an array). Returns `undefined` if nothing found.

```js
const users = [
  { id: 1, name: "Ali"  },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ravi" },
];

const user = users.find(u => u.id === 2);
// { id: 2, name: "Sara" }

const missing = users.find(u => u.id === 99);
// undefined
```

**React use — find and edit an item in state:**

```jsx
const editTodo = (id, newText) => {
  setTodos(todos.map(todo =>
    todo.id === id
      ? { ...todo, text: newText }  // spread + override the matching one
      : todo                         // leave the rest untouched
  ));
};
```

This pattern — `map` + `spread` + ternary — is the standard way to update one item in a state array. Memorize it.

---

## 5. `.some()` and `.every()`

```js
const ages = [22, 17, 25, 30];

// some — is at least ONE item true?
const hasMinor = ages.some(age => age < 18);   // true

// every — are ALL items true?
const allAdults = ages.every(age => age >= 18); // false

// React use
const allTodosComplete = todos.every(todo => todo.done);
{allTodosComplete && <p>All done! 🎉</p>}

const hasUnsavedChanges = fields.some(field => field.dirty);
<button disabled={!hasUnsavedChanges}>Save</button>
```

---

## 6. Chaining methods — The real power

Methods return new arrays, so you can chain them:

```js
const products = [
  { name: "Phone",  price: 30000, inStock: true  },
  { name: "TV",     price: 50000, inStock: false },
  { name: "Laptop", price: 70000, inStock: true  },
  { name: "Tablet", price: 25000, inStock: true  },
];

// Get names of in-stock products under ₹40,000
const result = products
  .filter(p => p.inStock)
  .filter(p => p.price < 40000)
  .map(p => p.name);

// ["Phone", "Tablet"]
```

This is exactly how you'd build a search + filter feature in React.

---

## The mental model — never mutate, always return new

| Method | Input | Returns | Mutates original? |
|---|---|---|---|
| `.map()` | array | new array (same length) | No |
| `.filter()` | array | new array (shorter) | No |
| `.reduce()` | array | single value (any type) | No |
| `.find()` | array | single item or undefined | No |
| `.some()` | array | boolean | No |
| `.every()` | array | boolean | No |

**None of them mutate the original.** This is perfect for React — state should never be mutated directly.

---

## Interview Questions

**Q: Why use `.map()` instead of `forEach` in React JSX?**
`forEach` returns `undefined` — you can't use it inside JSX. `.map()` returns a new array of JSX elements, which React can render. Always `.map()` in JSX.

**Q: How do you update one item in a state array?**
`.map()` + spread + ternary: `items.map(item => item.id === id ? { ...item, updated: true } : item)`. This creates a new array with the matching item replaced — React detects the new reference and re-renders.

**Q: How do you delete an item from a state array?**
`.filter()`: `items.filter(item => item.id !== id)`. Returns everything except the deleted item.

**Q: What's the difference between `.find()` and `.filter()`?**
`.filter()` returns an array of all matches. `.find()` returns the first matching item itself. If you need one specific item (like finding a user by ID), use `.find()`.

---
# Topic 03 — Modules (import / export)


## First principle: Why do modules exist?

Before modules, all JavaScript lived in one file or leaked into a global scope — variables from one file could clash with another. Modules give every file its **own private scope**. You explicitly choose what to share (`export`) and what to use from other files (`import`).
=======

In React, **every component is its own file, every utility is its own file** — modules are how they connect.

---

## Two types of exports — Named and Default

### Default Export — one main thing per file

```js
// UserCard.jsx — only ONE default export per file
const UserCard = ({ name, age }) => {
  return <div>{name} — {age}</div>;
};

export default UserCard;
```

```js
// Importing a default export — you name it whatever you want
import UserCard from "./UserCard";
import Card from "./UserCard";      // same thing, different name — valid
import Whatever from "./UserCard";  // still works — name is up to you
```

---

### Named Export — multiple things from one file

```js
// utils.js — multiple named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const PI = 3.14159;
```

```js
// Importing named exports — name MUST match exactly
import { add, subtract } from "./utils";
import { add, PI } from "./utils";       // pick only what you need

// Rename on import using "as"
import { add as sum } from "./utils";
sum(2, 3); // 5
```

---

### Default + Named together — very common in React

```js
// Button.jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export const BUTTON_SIZES = { sm: "small", md: "medium", lg: "large" };
export const BUTTON_VARIANTS = ["primary", "secondary", "ghost"];

export default Button;  // one default
// + two named exports from the same file
```

```js
import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from "./Button";
//     ^default   ^named exports
```

---

## Re-exports — the index.js pattern

In real projects you'll have a folder of components. Instead of importing from deep paths everywhere, you create an `index.js` that re-exports everything:

```
components/
  Button.jsx
  Input.jsx
  Modal.jsx
  index.js      ← barrel file
```

```js
// components/index.js — re-export everything
export { default as Button } from "./Button";
export { default as Input }  from "./Input";
export { default as Modal }  from "./Modal";
```

```js
// Now anywhere in your app — clean single import
import { Button, Input, Modal } from "./components";

// Instead of this mess
import Button from "./components/Button";
import Input  from "./components/Input";
import Modal  from "./components/Modal";
```

This pattern is called a **barrel file** — you'll see it in every professional React project.

---

## Import aliases — for deep paths

In large projects, relative imports get ugly:

```js
import Button from "../../../components/Button";  // horrible
```

Most React setups (Vite, Next.js, CRA) let you configure path aliases:

```js
// vite.config.js
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  }
});
```

```js
// Now anywhere in your app
import Button from "@/components/Button";  // clean, absolute-style
import { useAuth } from "@/hooks/useAuth";
```

---

## How React uses modules — the full picture

```
src/
  components/
    Button.jsx         ← export default Button
    UserCard.jsx       ← export default UserCard
    index.js           ← barrel file
  hooks/
    useAuth.js         ← export const useAuth = ...
    useFetch.js        ← export const useFetch = ...
  utils/
    formatDate.js      ← export const formatDate = ...
    validators.js      ← export const isEmail, isPhone...
  pages/
    Home.jsx
    Profile.jsx
  App.jsx
  main.jsx             ← entry point
```

```jsx
// App.jsx — pulling everything together
import { Button, UserCard } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { formatDate } from "@/utils/formatDate";

const App = () => {
  const { user } = useAuth();
  return (
    <div>
      <UserCard name={user.name} joined={formatDate(user.createdAt)} />
      <Button label="Logout" onClick={() => {}} />
    </div>
  );
};

export default App;
```

Every single line here is just imports. You already understand all of it.

---

## Common mistakes

```js
// MISTAKE 1 — importing default with curly braces
import { UserCard } from "./UserCard";  // wrong if it's a default export
import UserCard from "./UserCard";       // correct

// MISTAKE 2 — wrong file path
import Button from "./button";  // case-sensitive on Linux/Mac — will fail
import Button from "./Button";  // correct

// MISTAKE 3 — forgetting to export
const helper = () => {};        // no export keyword — can't be imported
export const helper = () => {}; // correct

// MISTAKE 4 — two default exports (syntax error)
export default ComponentA;
export default ComponentB; // SyntaxError — only one default allowed
```

---

## Interview Questions

**Q: What's the difference between default and named exports?**
A file can have only one default export but multiple named exports. Default imports can be renamed freely on import; named imports must match exactly (or use `as` to rename). Use default for the main thing a file exports (usually a component), named for utilities or constants.

**Q: What is a barrel file / index.js pattern?**
A file that re-exports from multiple files in a folder, so consumers can import from one clean path instead of deep individual paths. Common in component libraries and hooks folders.

**Q: Why does React use one component per file?**
Modules give each file its own scope — no naming conflicts. It also makes code splitting possible: bundlers like Vite can load only the modules actually used, keeping bundle size small.

---
# Topic 04 — Async JavaScript

## First principle: Why does async exist?

JavaScript runs on a **single thread** — it can only do one thing at a time. If you call an API and wait for the response synchronously, the entire browser freezes. Async lets JS say *"go fetch this data, and when it's ready, come back to me — I'll keep doing other things in the meantime."*

In React, **every API call, every database read, every file load is async.** You can't avoid this.

---

## The problem async solves

```js
// Imagine this is how APIs worked — synchronous (they don't, but imagine)
const data = fetch("https://api.example.com/users"); // browser FREEZES here
// Nothing else runs until this completes — page is completely frozen
console.log(data);
```

That's why we have async patterns — so JS can keep running while waiting.

---

## Stage 1 — Callbacks (old way, just understand it)

```js
// Old pattern — function called when data is ready
getData(function(error, data) {
  if (error) {
    handleError(error);
    return;
  }
  processData(data, function(error, result) {
    if (error) {
      handleError(error);
      return;
    }
    saveResult(result, function(error) {
      // This is "callback hell" — deeply nested, hard to read
    });
  });
});
```

This gets unreadable fast. Promises solved this.

---

## Stage 2 — Promises

A Promise is an object that represents a value that **will be available in the future**. It has 3 states:

- `pending` — waiting, not done yet
- `fulfilled` — completed successfully, has a value
- `rejected` — failed, has an error

```js
// Creating a promise manually (rare — usually APIs return them)
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data loaded!");   // fulfilled
  } else {
    reject("Something failed"); // rejected
  }
});

// Consuming a promise
myPromise
  .then(data => console.log(data))    // runs if fulfilled → "Data loaded!"
  .catch(error => console.log(error)) // runs if rejected
  .finally(() => console.log("Done")) // always runs, either way
```

**Chaining Promises — solves callback hell:**

```js
fetch("https://api.example.com/users")
  .then(response => response.json())    // parse JSON — also returns a promise
  .then(data => console.log(data))      // now you have the actual data
  .catch(error => console.error(error))
  .finally(() => setLoading(false));
```

Each `.then()` receives the return value of the previous one. Clean, readable, flat.

---

## Stage 3 — async/await (modern way — use this)

`async/await` is just cleaner syntax built on top of Promises. Under the hood, it's the same thing — just looks synchronous.

```js
// The "async" keyword makes a function return a Promise
// The "await" keyword pauses execution inside that function until the Promise resolves

async function getUsers() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}

// Arrow function version — same thing
const getUsers = async () => {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
};
```

`await` can only be used **inside** an `async` function. It pauses that function, but the rest of the browser/app keeps running normally.

---

## Error handling with async/await

```js
// Use try/catch — same as synchronous error handling
const getUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");

    // fetch() only rejects on network failure — NOT on 404/500
    // You must check response.ok manually
    if (!response.ok) {
      throw new Error(`HTTP error — status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    throw error; // re-throw so the caller can handle it too
  }
};
```

This is a critical mistake beginners make — `fetch()` only throws on network failure (no internet, DNS error). A 404 or 500 response does NOT throw — you must check `response.ok` yourself.

---

## The full fetch pattern — what you'll write in React

```js
const fetchUserById = async (id) => {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`User not found — ${response.status}`);
    }

    const user = await response.json();
    return user;

  } catch (error) {
    throw error;
  }
};
```

**POST request — sending data:**

```js
const createUser = async (userData) => {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(userData), // object → JSON string
    });

    if (!response.ok) throw new Error("Failed to create user");

    const newUser = await response.json();
    return newUser;

  } catch (error) {
    throw error;
  }
};
```

---

## How this connects to React — useEffect + fetch

This is the pattern you'll write for every API call in React:

```jsx
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.example.com/users");

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setUsers(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

Three states — `loading`, `error`, `data` — every API call in React has exactly these three. This pattern is so important we'll revisit it deeply in Phase 4.

---

## Promise.all — run multiple requests at once

```js
// BAD — sequential, slow (waits for each one to finish before starting next)
const users    = await fetchUsers();    // 300ms
const products = await fetchProducts(); // 300ms
const orders   = await fetchOrders();   // 300ms
// Total: 900ms

// GOOD — parallel, fast (all start at same time)
const [users, products, orders] = await Promise.all([
  fetchUsers(),
  fetchProducts(),
  fetchOrders(),
]);
// Total: ~300ms (longest one wins)
```

`Promise.all` takes an array of promises, runs them in parallel, and resolves when ALL are done. If any one rejects, the whole thing rejects.

```js
// Promise.allSettled — resolves even if some fail
const results = await Promise.allSettled([
  fetchUsers(),
  fetchProducts(),
  fetchOrders(),
]);

results.forEach(result => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason);
  }
});
```

---

## Abort Controller — cancel a request

Critical for React — if a component unmounts before a fetch completes, you'll get a memory leak / state update on unmounted component warning.

```jsx
useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/users", {
        signal: controller.signal, // link the abort signal
      });
      const data = await response.json();
      setUsers(data);

    } catch (err) {
      if (err.name === "AbortError") return; // ignore — we cancelled it
      setError(err.message);
    }
  };

  fetchData();

  // Cleanup — if component unmounts, cancel the request
  return () => controller.abort();
}, []);
```

This is a detail that separates junior devs from mid-level devs in interviews.

---

## Interview Questions

**Q: What is the difference between `.then()` and `async/await`?**
They're the same thing — `async/await` is syntax sugar over Promises. `await` pauses the function and waits for the Promise to resolve, then returns the value. Under the hood, it's identical to `.then()`. `async/await` is preferred for readability, especially when chaining multiple async operations.

**Q: Does `fetch()` throw an error on a 404?**
No — this is a classic gotcha. `fetch()` only rejects on network errors (no internet, DNS failure). A 404 or 500 response still resolves successfully. You must check `response.ok` (which is true for status 200–299) and throw manually.

**Q: What is `Promise.all` and when do you use it?**
`Promise.all` runs multiple promises in parallel and resolves when all complete. Use it when requests are independent of each other — loading user + products + orders at the same time is 3x faster than sequential awaits.

**Q: What happens if you don't clean up a fetch in `useEffect`?**
If the component unmounts before the fetch completes, it tries to call `setState` on an unmounted component — causing a memory leak and a React warning. The fix is `AbortController` — you abort the request in the `useEffect` cleanup function.

---


