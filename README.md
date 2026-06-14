
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
# Topic 05 — Object Methods

## First principle: Why do you need these?

APIs return objects. State is often an object. Config is an object. You constantly need to loop over objects, transform them, merge them, copy them. JavaScript doesn't have `.map()` or `.filter()` directly on objects — these methods are how you work with objects the way you work with arrays.

---

## 1. `Object.keys()` — Get all the keys

```js
const user = {
  name: "Ali",
  age: 25,
  city: "Delhi",
  role: "Admin",
};

Object.keys(user);
// ["name", "age", "city", "role"]

// Returns an ARRAY — so you can use all array methods on it
Object.keys(user).length; // 4

Object.keys(user).forEach(key => {
  console.log(key, "→", user[key]);
});
// name → Ali
// age  → 25
// city → Delhi
// role → Admin
```

**React use — render object fields dynamically:**

```jsx
const UserDetails = ({ user }) => {
  return (
    <ul>
      {Object.keys(user).map(key => (
        <li key={key}>
          <strong>{key}:</strong> {user[key]}
        </li>
      ))}
    </ul>
  );
};
```

No hardcoding field names — works for any shape of object.

---

## 2. `Object.values()` — Get all the values

```js
const scores = {
  math:    95,
  english: 88,
  science: 92,
};

Object.values(scores);
// [95, 88, 92]

// Now you can use array methods
const total   = Object.values(scores).reduce((a, b) => a + b, 0); // 275
const average = total / Object.values(scores).length;              // 91.67
const highest = Math.max(...Object.values(scores));                // 95
```

**React use — form validation:**

```jsx
const [errors, setErrors] = useState({
  name:     "Name is required",
  email:    "",
  password: "Too short",
});

// Check if form has ANY errors
const hasErrors = Object.values(errors).some(msg => msg !== "");

<button disabled={hasErrors}>Submit</button>
```

---

## 3. `Object.entries()` — Get key-value pairs together

Returns an array of `[key, value]` pairs. Most powerful of the three — you get both key and value at once.

```js
const product = {
  name:  "Laptop",
  price: 70000,
  stock: 15,
};

Object.entries(product);
// [["name", "Laptop"], ["price", 70000], ["stock", 15]]

// Destructure each pair directly
Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// name:  Laptop
// price: 70000
// stock: 15
```

**React use — render a settings/config panel:**

```jsx
const settings = {
  darkMode:       true,
  notifications:  false,
  autoSave:       true,
  language:       "English",
};

const SettingsPanel = () => {
  return (
    <div>
      {Object.entries(settings).map(([key, value]) => (
        <div key={key} style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{key}</span>
          <span>{String(value)}</span>
        </div>
      ))}
    </div>
  );
};
```

**Transform an object — entries → map → back to object:**

```js
const prices = { apple: 100, banana: 40, mango: 80 };

// Apply 10% discount to every price
const discounted = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);
// { apple: 90, banana: 36, mango: 72 }
```

`Object.entries()` → transform with `.map()` → `Object.fromEntries()` back to object. This trio is extremely powerful.

---

## 4. `Object.assign()` — Merge objects

Copies properties from one or more source objects into a target object. Mutates the target.

```js
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 18 };

// Merge — userPrefs overrides defaults
const config = Object.assign({}, defaults, userPrefs);
// { theme: "dark", lang: "en", fontSize: 18 }

// {} as target = don't mutate originals
// Properties from right override properties from left
```

**Honestly — in modern React, spread is preferred over `Object.assign`:**

```js
// These do the same thing
const config = Object.assign({}, defaults, userPrefs);
const config = { ...defaults, ...userPrefs }; // cleaner — use this
```

You'll still see `Object.assign` in older codebases and in Redux reducers, so know it.

---

## 5. `Object.fromEntries()` — Entries array back to object

The reverse of `Object.entries()`. Takes an array of `[key, value]` pairs and builds an object.

```js
const entries = [["name", "Ali"], ["age", 25], ["city", "Delhi"]];

const obj = Object.fromEntries(entries);
// { name: "Ali", age: 25, city: "Delhi" }
```

**Real use — transform URL search params into an object:**

```js
// URL: /products?category=electronics&sort=price&order=asc
const params = new URLSearchParams(window.location.search);
const filters = Object.fromEntries(params);
// { category: "electronics", sort: "price", order: "asc" }
```

**Real use — filter object keys (no direct method exists):**

```js
const user = {
  name:        "Ali",
  password:    "secret123",
  email:       "ali@example.com",
  internalId:  "usr_xyz",
};

// Remove sensitive fields before displaying
const safeUser = Object.fromEntries(
  Object.entries(user).filter(([key]) => !["password", "internalId"].includes(key))
);
// { name: "Ali", email: "ali@example.com" }
```

---

## 6. `Object.freeze()` and `Object.isFrozen()`

Prevents an object from being modified — useful for constants and config.

```js
const CONFIG = Object.freeze({
  API_URL:  "https://api.example.com",
  TIMEOUT:  5000,
  MAX_RETRIES: 3,
});

CONFIG.API_URL = "something else"; // silently fails in normal mode
                                    // throws in strict mode
console.log(CONFIG.API_URL);        // still "https://api.example.com"

// Note — freeze is SHALLOW
const obj = Object.freeze({ user: { name: "Ali" } });
obj.user.name = "Sara"; // this WORKS — freeze doesn't go deep
```

---

## The full mental model — objects vs arrays

```js
const data = {
  user_1: { name: "Ali",  score: 90 },
  user_2: { name: "Sara", score: 85 },
  user_3: { name: "Ravi", score: 92 },
};

// Loop over it like an array
Object.entries(data).forEach(([id, user]) => {
  console.log(id, user.name, user.score);
});

// Find the top scorer
const topScorer = Object.entries(data).reduce((best, [id, user]) => {
  return user.score > best.score ? user : best;
}, { score: 0 });
// { name: "Ravi", score: 92 }

// Get just the names
const names = Object.values(data).map(user => user.name);
// ["Ali", "Sara", "Ravi"]

// Filter to only high scorers
const highScorers = Object.fromEntries(
  Object.entries(data).filter(([, user]) => user.score >= 90)
);
// { user_1: { name: "Ali", score: 90 }, user_3: { name: "Ravi", score: 92 } }
```

One dataset, four transformations — all with the methods you just learned.

---

## Quick Reference Card

| Method | What it returns | Use when |
|---|---|---|
| `Object.keys(obj)` | Array of keys | Looping, counting fields |
| `Object.values(obj)` | Array of values | Summing, checking values |
| `Object.entries(obj)` | Array of `[key, value]` | Need both key and value |
| `Object.assign({}, a, b)` | New merged object | Merging (prefer spread) |
| `Object.fromEntries(arr)` | Object from pairs | Converting back from entries |
| `Object.freeze(obj)` | Frozen object | Immutable constants |

---

## Interview Questions

**Q: How do you loop over an object in JavaScript?**
`Object.entries()` with `.forEach()` or `.map()`. For just keys: `Object.keys()`. For just values: `Object.values()`. You can't use a regular `for...of` directly on a plain object.

**Q: How do you filter keys out of an object?**
Convert to entries with `Object.entries()`, filter the array, convert back with `Object.fromEntries()`. There's no direct `.filter()` on objects.

**Q: What's the difference between `Object.assign` and spread?**
They behave the same for shallow merging. Spread (`{ ...a, ...b }`) is preferred in modern React — it's more readable and works inline. `Object.assign` is more common in older code and mutates the first argument (which is why you always pass `{}` as the first arg).

---

## Phase 1 Complete 🎉

You now know everything you need before touching React:

- `let/const`, arrow functions, destructuring, spread/rest
- `map`, `filter`, `reduce`, `find`, `some`, `every`
- `import/export`, barrel files, path aliases
- Promises, `async/await`, `fetch`, `AbortController`
- `Object.keys/values/entries/fromEntries/assign`

This is the JavaScript foundation that makes React feel obvious instead of magical.

---

**Phase 2 starts now — Core React.** This is where it gets exciting.

# Topic 06 — What is React?

## First principle: What problem does React solve?

Before React, building dynamic UIs meant manually updating the DOM every time data changed. This was the source of every bug, every performance issue, every inconsistency in web apps.

```js
// Old way — jQuery/vanilla JS
// Every time data changes, YOU manually update the DOM
const user = { name: "Ali", score: 95 };

document.getElementById("username").textContent = user.name;
document.getElementById("score").textContent    = user.score;
document.getElementById("badge").className      = user.score > 90 ? "gold" : "silver";
document.getElementById("rank").style.display   = user.score > 90 ? "block" : "none";

// Now imagine 50 things on screen that depend on this data
// You have to track EVERY element and update EVERY one manually
// Miss one → UI is out of sync with data → bugs everywhere
```

This approach has a fundamental flaw: **your UI and your data can get out of sync.** You're managing two things — the data AND the DOM — separately.

React's insight was this:

> **UI should be a function of state. When state changes, UI automatically reflects it. You never touch the DOM directly.**

```
Old way:   Data changes → You manually update DOM → Hope you didn't miss anything
React way: Data changes → React automatically re-renders → UI always matches data
```

---

## The Core Mental Model

```js
UI = f(state)
```

Your component is just a function. It takes state as input, returns UI as output. Every time state changes, React calls your function again and gets the new UI. That's the entire mental model.

```jsx
// This IS React's mental model in code
const Counter = () => {
  const [count, setCount] = useState(0); // state

  // UI is just a function of that state
  // React calls this function every time count changes
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

You never say "go find the `<p>` and update its text." You just say "count is now 1" and React figures out what the UI should look like.

---

## What is the Virtual DOM?

Here's the problem with re-rendering everything on every state change: **touching the real DOM is slow.**

The real DOM is a massive C++ object inside the browser. Reading and writing to it is expensive. If you re-rendered the entire page on every keystroke, it would be noticeably slow.

React's solution: **the Virtual DOM.**

The Virtual DOM is a plain JavaScript object — a lightweight copy of the real DOM that lives in memory.

```js
// Real DOM node — heavy C++ browser object, expensive to create/modify
<div class="card">
  <h1>Ali</h1>
  <p>Score: 95</p>
</div>

// Virtual DOM representation — just a plain JS object, cheap
{
  type: "div",
  props: { className: "card" },
  children: [
    { type: "h1", props: {}, children: ["Ali"] },
    { type: "p",  props: {}, children: ["Score: 95"] }
  ]
}
```

Plain JS objects are thousands of times cheaper to create and compare than real DOM nodes.

---

## Reconciliation — How React updates the DOM

When state changes, React doesn't throw away the entire DOM and rebuild it. It does something smarter:

**Step 1 — Render:** React calls your component function and builds a new Virtual DOM tree.

**Step 2 — Diff:** React compares the new Virtual DOM with the previous one (this is called **diffing**).

**Step 3 — Commit:** React finds the exact differences (called a **patch**) and applies ONLY those changes to the real DOM.

```
State changes
     ↓
React renders new Virtual DOM
     ↓
React diffs new vs old Virtual DOM
     ↓
React finds: "only this <p> text changed"
     ↓
React updates ONLY that one <p> in the real DOM
     ↓
Everything else is untouched
```

```jsx
const UserCard = () => {
  const [score, setScore] = useState(95);

  return (
    <div className="card">        {/* unchanged — React won't touch this */}
      <h1>Ali</h1>               {/* unchanged — React won't touch this */}
      <p>Score: {score}</p>      {/* changed — React updates ONLY this */}
      <button onClick={() => setScore(score + 1)}>+</button>
    </div>
  );
};
```

React surgically updates only what changed. Everything else stays untouched.

---

## The Diffing Algorithm — How React compares trees

React's diffing makes two assumptions that make it O(n) instead of O(n³):

**Assumption 1 — Different types produce different trees.**

If a `<div>` changes to a `<section>`, React throws away the entire subtree and rebuilds. No point diffing further.

```jsx
// Before
<div>
  <Counter />
</div>

// After — type changed from div to section
<section>        {/* React unmounts old tree entirely, builds new one */}
  <Counter />    {/* Counter is remounted — loses its state */}
</section>
```

**Assumption 2 — Keys tell React which items are which in a list.**

```jsx
// Without keys — React can't track items
// If you add "Ravi" at the top, React thinks ALL items changed
<ul>
  <li>Ali</li>
  <li>Sara</li>
</ul>

// With keys — React knows exactly which item is which
// Adding "Ravi" at the top, React knows Ali and Sara are unchanged
<ul>
  <li key="user-3">Ravi</li>   {/* new */}
  <li key="user-1">Ali</li>    {/* unchanged */}
  <li key="user-2">Sara</li>   {/* unchanged */}
</ul>
```

This is why the `key` prop exists and why it must be unique and stable (not array index).

---

## React Fiber — The modern reconciler

In React 16, the reconciliation engine was rewritten as **Fiber**. The key upgrade: reconciliation became **interruptible**.

Before Fiber, if React was diffing a huge tree, it blocked everything until done — janky animations, dropped frames. Fiber broke work into small units that can be paused, prioritized, and resumed.

```
Old reconciler:  [===entire tree===] → blocks everything until done

Fiber:           [chunk] → pause if urgent work exists → [chunk] → [chunk]
                 "User clicked a button? Handle that first, come back to this"
```

This is what enables React 18's **Concurrent Features** — like `startTransition` (mark a state update as non-urgent) and `Suspense` (pause rendering until data is ready).

You don't use Fiber directly, but it's why React feels fast and responsive at scale.

---

## Why React specifically — what makes it different

```
jQuery:    You manage the DOM directly. Imperative.
React:     You describe what the UI should look like. Declarative.

Vue:       Declarative, uses templates + reactive system. Opinionated.
Angular:   Full framework, two-way binding, TypeScript-first. Very opinionated.
React:     Just the UI layer. Unopinionated. You choose everything else.
Svelte:    Compiles away — no runtime. Smaller bundles.
React:     Runtime-based. Larger bundles. But largest ecosystem by far.
```

React's strengths:
- **Largest ecosystem** — more jobs, more libraries, more answers on Stack Overflow
- **Component model** — everything is a reusable component
- **Unidirectional data flow** — data goes one way (parent → child), predictable
- **Hooks** — share stateful logic without class components
- **React Native** — same knowledge, write mobile apps

---

## How a React app actually boots

```jsx
// index.html — just one div
<body>
  <div id="root"></div>   // React takes over this div
</body>

// main.jsx — entry point
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// App.jsx — your entire app as a component tree
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
```

React hijacks that single `<div id="root">` and manages everything inside it. The browser only ever has one real page — React simulates navigation and updates inside that one div. This is called a **Single Page Application (SPA)**.

---

## The component tree — how React thinks

```
App
├── Header
│   ├── Logo
│   └── Nav
│       ├── NavLink (Home)
│       ├── NavLink (About)
│       └── NavLink (Contact)
├── Main
│   ├── Sidebar
│   └── ProductList
│       ├── ProductCard (id:1)
│       ├── ProductCard (id:2)
│       └── ProductCard (id:3)
└── Footer
```

When `ProductList`'s state changes, React re-renders `ProductList` and its children — not `Header`, not `Footer`. Only the affected subtree.

---

## Interview Questions

**Q: What is the Virtual DOM and why does React use it?**
The Virtual DOM is a plain JavaScript object representation of the real DOM. React uses it because JS objects are cheap to create and compare, while real DOM operations are expensive. React diffs the new and old Virtual DOM, finds the minimal changes needed, and applies only those to the real DOM — making updates fast.

**Q: What is reconciliation?**
Reconciliation is the process React uses to update the DOM. When state changes, React builds a new Virtual DOM tree, diffs it against the previous one, and commits only the changed parts to the real DOM. The algorithm is O(n) thanks to two heuristics: different element types produce different trees, and keys identify list items across renders.

**Q: What is React Fiber?**
Fiber is React's reconciliation engine introduced in React 16. It breaks rendering work into small interruptible units, allowing React to pause, prioritize, and resume work. This enables concurrent features like `startTransition` and `Suspense` — making React responsive even under heavy rendering load.

**Q: What is a SPA and what are the trade-offs?**
A Single Page Application loads once and React manages all navigation and updates inside one HTML page. Pros: fast navigation, no full page reloads, great UX. Cons: slower initial load (large JS bundle), poor SEO by default (solved by Next.js SSR/SSG).

---

# Topic 07 — JSX

## First principle: JSX is not HTML. It's not magic. It's just JavaScript.

The biggest confusion beginners have is thinking JSX is some special templating language. It isn't. JSX is **syntactic sugar** — it gets compiled to plain JavaScript function calls before the browser ever sees it.

```jsx
// What you write — JSX
const element = <h1 className="title">Hello, Ali</h1>;

// What Babel compiles it to — plain JS
const element = React.createElement(
  "h1",                        // element type
  { className: "title" },      // props
  "Hello, Ali"                 // children
);
```

`React.createElement` returns a plain JavaScript object — the Virtual DOM node you learned about in Topic 06. JSX is just a nicer way to write those function calls.

---

## Why JSX exists

```jsx
// Without JSX — writing a real UI is unreadable
const App = () => {
  return React.createElement(
    "div", { className: "app" },
    React.createElement("h1", null, "Welcome"),
    React.createElement(
      "ul", null,
      React.createElement("li", { key: 1 }, "Item 1"),
      React.createElement("li", { key: 2 }, "Item 2"),
      React.createElement("li", { key: 3 }, "Item 3")
    )
  );
};

// With JSX — same thing, actually readable
const App = () => {
  return (
    <div className="app">
      <h1>Welcome</h1>
      <ul>
        <li key={1}>Item 1</li>
        <li key={2}>Item 2</li>
        <li key={3}>Item 3</li>
      </ul>
    </div>
  );
};
```

Same output. JSX is just for humans.

---

## Rule 1 — One root element

Every JSX expression must return **one** root element. You can't return siblings.

```jsx
// WRONG — two root elements
const App = () => {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>   // Error: Adjacent JSX elements must be wrapped
  );
};

// CORRECT — wrap in a div
const App = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
};

// BETTER — use a Fragment (no extra DOM node)
const App = () => {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
};
```

`<>...</>` is shorthand for `<React.Fragment>...</React.Fragment>`. It groups elements without adding an extra `<div>` to the DOM. Use it whenever you don't need a wrapper element.

---

## Rule 2 — className, not class

HTML attributes that conflict with JS reserved words are renamed in JSX:

```jsx
// HTML             →  JSX
class="card"        →  className="card"
for="username"      →  htmlFor="username"   (on <label>)
tabindex="0"        →  tabIndex="0"
```

```jsx
// WRONG
<div class="card">...</div>         // class is reserved in JS
<label for="name">Name</label>      // for is reserved in JS

// CORRECT
<div className="card">...</div>
<label htmlFor="name">Name</label>
```

---

## Rule 3 — All tags must be closed

HTML is forgiving about unclosed tags. JSX is not.

```jsx
// WRONG — valid HTML but invalid JSX
<img src="photo.jpg">
<input type="text">
<br>

// CORRECT — self-closing tags required
<img src="photo.jpg" />
<input type="text" />
<br />
```

---

## Rule 4 — Expressions in `{}` — The most important rule

Anything inside `{}` is evaluated as a JavaScript expression. This is how you make JSX dynamic.

```jsx
const name    = "Ali";
const age     = 25;
const isAdmin = true;

const UserCard = () => {
  return (
    <div>
      <h1>{name}</h1>                          {/* variable */}
      <p>Age: {age}</p>                        {/* number */}
      <p>Role: {isAdmin ? "Admin" : "User"}</p>{/* ternary */}
      <p>In 10 years: {age + 10}</p>           {/* expression */}
      <p>{name.toUpperCase()}</p>              {/* method call */}
      <p>{`Hello, ${name}!`}</p>              {/* template literal */}
    </div>
  );
};
```

**What can go inside `{}`:**
```jsx
{someVariable}           // variable
{2 + 2}                  // expression → renders "4"
{isLoggedIn ? "Hi" : "Login"} // ternary
{user.name}              // property access
{formatDate(date)}       // function call
{[1,2,3].join(", ")}     // method chain
```

**What CANNOT go inside `{}`:**
```jsx
{if (x) { ... }}         // statements don't work — use ternary instead
{for (let i...) { ... }} // loops don't work — use .map() instead
{let x = 5}              // declarations don't work
```

---

## Rule 5 — JSX is an expression itself

JSX can be stored in variables, returned from functions, passed as props — because it compiles to a function call which returns an object.

```jsx
// Store in a variable
const heading = <h1>Welcome</h1>;

// Return from a function
const getGreeting = (name) => <p>Hello, {name}!</p>;

// Use in a ternary
const content = isLoggedIn
  ? <Dashboard />
  : <LoginPage />;

// Pass as a prop (children)
const layout = (
  <Layout>
    <Sidebar />
    <Main />
  </Layout>
);
```

---

## Inline styles — objects, not strings

In JSX, `style` takes a JavaScript object, not a CSS string. Property names are camelCase.

```jsx
// HTML way — string (WRONG in JSX)
<div style="background-color: red; font-size: 16px;">

// JSX way — object with camelCase properties
<div style={{ backgroundColor: "red", fontSize: "16px" }}>
```

The double `{{ }}` isn't special syntax — the outer `{}` means "JavaScript expression", the inner `{}` is the object literal.

```jsx
// Clean way — define the style object separately
const cardStyle = {
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const Card = () => <div style={cardStyle}>Content</div>;

// Dynamic styles
const Button = ({ primary }) => {
  const style = {
    backgroundColor: primary ? "#0070f3" : "#fff",
    color:           primary ? "#fff"    : "#000",
    padding:         "8px 16px",
    border:          "1px solid #0070f3",
    borderRadius:    "4px",
    cursor:          "pointer",
  };

  return <button style={style}>Click me</button>;
};
```

---

## Comments in JSX

```jsx
const App = () => {
  return (
    <div>
      {/* This is a JSX comment */}
      <h1>Hello</h1>

      {/* Multi-line
          comment */}
      <p>World</p>

      // This is NOT a comment — it renders as text on screen!
    </div>
  );
};
```

---

## Rendering different types — what React does with values

```jsx
// String and numbers — render as text
{42}          // → "42"
{"hello"}     // → "hello"

// Booleans — render NOTHING
{true}        // → nothing
{false}       // → nothing
{undefined}   // → nothing
{null}        // → nothing

// This is why && conditional rendering works
{isLoggedIn && <Dashboard />}
// If false → renders nothing
// If true  → renders <Dashboard />

// Arrays — render each item
{[<li key="a">A</li>, <li key="b">B</li>]}
// → renders both items

// OBJECTS — throw an error
{{ name: "Ali" }}  // Error: Objects are not valid as React children
// You must access a specific property
{user.name}        // correct
```

---

## JSX spread props — pass all props at once

```jsx
const buttonProps = {
  type:      "submit",
  disabled:  false,
  className: "btn-primary",
};

// Instead of passing each one manually
<button type={buttonProps.type} disabled={buttonProps.disabled} className={buttonProps.className}>

// Spread them all at once
<button {...buttonProps}>Submit</button>

// Combine spread with specific overrides
<button {...buttonProps} disabled={true}>Submit</button>
// disabled={true} overrides the spread value
```

This is extremely useful when building wrapper components that pass through all props:

```jsx
// A custom button that wraps native button
const Button = ({ children, variant = "primary", ...rest }) => {
  // ...rest captures all other props (onClick, disabled, type, etc.)
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};

// Usage — onClick, disabled are passed through via ...rest
<Button variant="secondary" onClick={handleClick} disabled={loading}>
  Save
</Button>
```

---

## The `children` prop — content between tags

```jsx
// Anything between opening and closing tags = children prop
<Button>Click me</Button>
// Button receives props.children = "Click me"

<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>
// Card receives props.children = [<h2>, <p>]

// Using children inside the component
const Card = ({ children, title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}         {/* renders whatever was passed between tags */}
      </div>
    </div>
  );
};

// Usage
<Card title="User Profile">
  <img src="avatar.jpg" />
  <p>Ali — Admin</p>
  <button>Edit</button>
</Card>
```

`children` is just a prop — the content between your component's tags. This is the foundation of composition in React.

---

## Full example — everything together

```jsx
const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, image, inStock, rating } = product;

  const cardStyle = {
    opacity: inStock ? 1 : 0.6,
    border:  "1px solid #eee",
    padding: "16px",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle} className="product-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">₹{price.toLocaleString()}</p>

      {/* Conditional rendering */}
      {!inStock && <span className="badge">Out of Stock</span>}

      {/* Expression */}
      <p>{"★".repeat(Math.round(rating))} ({rating})</p>

      {/* Event handler inline */}
      <button
        disabled={!inStock}
        onClick={() => onAddToCart(product)}
        className={`btn ${inStock ? "btn-primary" : "btn-disabled"}`}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>

    </div>
  );
};
```

---

## Interview Questions

**Q: What is JSX and how does it work?**
JSX is syntactic sugar that compiles to `React.createElement()` calls. When Babel processes your code, every JSX element becomes a function call that returns a plain JavaScript object — a Virtual DOM node. The browser never sees JSX; it only sees JavaScript.

**Q: Why can't you use `if` statements directly in JSX?**
JSX `{}` only accepts expressions — code that evaluates to a value. `if` is a statement, not an expression. Use ternary (`condition ? a : b`) or short-circuit (`condition && element`) for conditionals inside JSX. For complex logic, compute it before the return statement.

**Q: What is a Fragment and why use it?**
A Fragment (`<>...</>`) lets you return multiple elements without adding an extra DOM node. If you wrap in a `<div>` instead, you pollute the DOM with meaningless wrapper elements that can break layouts (especially flexbox/grid). Fragments give React what it needs (one root) without affecting the DOM.

**Q: What's the difference between `null`, `false`, `undefined` in JSX?**
All three render nothing — they're React's way of saying "render no output here." This is intentional and enables the `&&` pattern: `{isLoggedIn && <Dashboard />}`. If `isLoggedIn` is false, nothing renders. But be careful — `0` is falsy but DOES render! Use `{count > 0 && <Badge />}` instead of `{count && <Badge />}`.

---

# Topic 08 — Components

## First principle: What is a component?

A component is a **function that returns UI**. That's it. No magic. You give it some input (props), it gives you back some JSX (output). Because it's just a function, everything you know about functions applies — you can compose them, reuse them, pass them around.

```jsx
// This is a complete React component
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};
```

The power comes from one idea: **your entire UI is a tree of components.** Every button, every card, every page — all components. Big components are made of smaller components. Small components are reused everywhere.

---

## Anatomy of a component

```jsx
// 1. Name starts with CAPITAL LETTER — required
//    Lowercase = HTML tag, Uppercase = React component
const UserCard = ({ name, role, avatar }) => {  // 2. Props are the input

  // 3. Logic lives here — JS, hooks, calculations
  const initials = name.split(" ").map(n => n[0]).join("");
  const isAdmin  = role === "admin";

  // 4. One return — the UI
  return (
    <div className="card">
      {avatar
        ? <img src={avatar} alt={name} />
        : <div className="avatar">{initials}</div>
      }
      <h3>{name}</h3>
      <p>{role}</p>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  );
};
```

Four parts: name, props, logic, return. Every component follows this structure.

---

## Capital letter rule — why it matters

```jsx
// React sees lowercase → treats as HTML tag → looks for <usercard> in HTML spec
<usercard />   // renders nothing useful, no error

// React sees uppercase → treats as component → calls UserCard function
<UserCard />   // calls your function, renders what it returns

// This is how React tells them apart at compile time
// <div>  → React.createElement("div", ...)     — string, HTML element
// <Card> → React.createElement(Card, ...)      — reference to your function
```

---

## Three ways to write components

```jsx
// 1. Arrow function — most common in modern React
const Button = ({ label }) => {
  return <button>{label}</button>;
};

// 2. Arrow function with implicit return — for simple components
const Button = ({ label }) => <button>{label}</button>;

// 3. Function declaration — also valid, slightly different hoisting
function Button({ label }) {
  return <button>{label}</button>;
}
```

All three are identical in behaviour. Arrow function is the convention in most codebases — use that.

---

## Thinking in components — how to break down a UI

This is the most important skill. Given any UI, you need to identify the component boundaries.

```
┌─────────────────────────────────┐
│  Header                         │
│  ┌──────┐  ┌─────────────────┐  │
│  │ Logo │  │  Nav            │  │
│  └──────┘  │ [Home][About]   │  │
│            └─────────────────┘  │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  ProductList                    │
│  ┌──────────┐  ┌──────────┐    │
│  │ProductCard│  │ProductCard│   │
│  │  Phone   │  │  Laptop  │    │
│  │  ₹30,000 │  │  ₹70,000 │    │
│  │[Add Cart]│  │[Add Cart]│    │
│  └──────────┘  └──────────┘    │
└─────────────────────────────────┘
```

Rules for splitting:
- **Single responsibility** — one component does one thing
- **Reusability** — if something appears more than once, it's a component
- **Complexity** — if a section is complex enough to reason about separately, extract it

---

## Building the UI above — component by component

```jsx
// Smallest first — build bottom-up

// 1. Leaf components — no children components inside
const Logo = () => (
  <img src="/logo.svg" alt="Logo" className="logo" />
);

const NavLink = ({ href, label }) => (
  <a href={href} className="nav-link">{label}</a>
);

// 2. Compose into bigger components
const Nav = () => (
  <nav>
    <NavLink href="/"       label="Home"    />
    <NavLink href="/about"  label="About"   />
    <NavLink href="/contact"label="Contact" />
  </nav>
);

const Header = () => (
  <header className="header">
    <Logo />
    <Nav />
  </header>
);

// 3. Product components
const ProductCard = ({ name, price, image }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>₹{price.toLocaleString()}</p>
    <button>Add to Cart</button>
  </div>
);

const products = [
  { id: 1, name: "Phone",  price: 30000, image: "/phone.jpg"  },
  { id: 2, name: "Laptop", price: 70000, image: "/laptop.jpg" },
];

const ProductList = () => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

// 4. Assemble the full page
const App = () => (
  <>
    <Header />
    <main>
      <ProductList />
    </main>
  </>
);
```

Each component is small, focused, and readable. The composition is the power.

---

## Component reusability — the real value

```jsx
// ONE component, used everywhere with different props
const Badge = ({ text, variant = "default" }) => {
  const colors = {
    default: { bg: "#f0f0f0", color: "#333"  },
    success: { bg: "#d4edda", color: "#155724"},
    danger:  { bg: "#f8d7da", color: "#721c24"},
    info:    { bg: "#d1ecf1", color: "#0c5460"},
  };

  const style = {
    ...colors[variant],
    padding:      "2px 8px",
    borderRadius: "12px",
    fontSize:     "12px",
    fontWeight:   "500",
    display:      "inline-block",
  };

  return <span style={style}>{text}</span>;
};

// Reused everywhere with different data
<Badge text="Admin"      variant="info"    />
<Badge text="New"        variant="success" />
<Badge text="Sold Out"   variant="danger"  />
<Badge text="Pending"    variant="default" />
```

Write once, use everywhere. Change the component once — every usage updates.

---

## Container vs Presentational components

A pattern that helps organise thinking:

```jsx
// Presentational — only cares about how things look
// Receives data via props, no logic, no API calls
const UserList = ({ users, onDelete }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name}
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

// Container — handles logic, data fetching, state
// Passes data down to presentational components
const UserListContainer = () => {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return <UserList users={users} onDelete={handleDelete} />;
};
```

This separation makes components easier to test, reason about, and reuse. The presentational component doesn't care where the data comes from — you can feed it from an API, from mock data, or from a test fixture.

---

## Component composition patterns

### Pattern 1 — children prop (slot pattern)

```jsx
// Generic layout shell — doesn't know what goes inside
const Card = ({ title, children, footer }) => (
  <div className="card">
    {title && <div className="card-header"><h3>{title}</h3></div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

// Fill it with anything
<Card title="User Profile" footer={<button>Edit</button>}>
  <img src="avatar.jpg" />
  <p>Ali — Admin</p>
  <p>ali@example.com</p>
</Card>

<Card title="Stats">
  <p>Posts: 42</p>
  <p>Followers: 1,204</p>
</Card>
```

### Pattern 2 — Components as props

```jsx
// Pass a component as a prop — powerful for layouts
const Page = ({ header, sidebar, content }) => (
  <div className="page">
    <div className="page-header">{header}</div>
    <div className="page-body">
      <aside>{sidebar}</aside>
      <main>{content}</main>
    </div>
  </div>
);

// Usage — inject any component into any slot
<Page
  header={<Header />}
  sidebar={<FilterPanel />}
  content={<ProductList />}
/>
```

---

## When to split a component — practical rules

```jsx
// TOO BIG — do this and you'll regret it
const Dashboard = () => {
  return (
    <div>
      {/* 50 lines of stats UI */}
      {/* 80 lines of chart UI */}
      {/* 60 lines of table UI */}
      {/* 40 lines of filters */}
      {/* total: 230 lines — unreadable */}
    </div>
  );
};

// SPLIT — each concern is its own component
const Dashboard = () => (
  <div>
    <StatsBar />
    <ChartSection />
    <DataTable />
    <FilterPanel />
  </div>
);
// Dashboard is now 6 lines — reads like an outline
```

**Practical rule:** If a component is over ~80 lines, look for things to extract. If you have to scroll to understand one component, it's too big.

---

## Common mistakes

```jsx
// MISTAKE 1 — defining a component inside another component
// React creates a new function reference every render → always remounts
const Parent = () => {
  // DON'T do this — Child is redefined every render
  const Child = () => <p>I'm a child</p>;
  return <Child />;
};

// DO this — define outside
const Child = () => <p>I'm a child</p>;
const Parent = () => <Child />;


// MISTAKE 2 — returning nothing (returns undefined)
const Card = () => {
  <div>Content</div>  // forgot return keyword!
};

// Fix
const Card = () => {
  return <div>Content</div>;
};
// Or implicit return with parens
const Card = () => (
  <div>Content</div>
);


// MISTAKE 3 — lowercase component name
const userCard = () => <div>Ali</div>;
<userCard />  // treated as HTML tag — renders nothing

// Fix
const UserCard = () => <div>Ali</div>;
<UserCard />  // correct
```

---

## Interview Questions

**Q: What is a React component?**
A component is a JavaScript function that accepts props as input and returns JSX as output. React builds a tree of components — the entire UI is a composition of these functions. When state or props change, React re-calls the function and updates the DOM based on the new output.

**Q: What is the difference between a component and an element?**
A component is the function/class definition — the blueprint. An element is what gets returned when React calls that function — a plain JavaScript object describing what to render (`{ type: "div", props: {...} }`). When you write `<UserCard />`, React calls the `UserCard` function, which returns a React element.

**Q: Why should you not define components inside other components?**
Every render of the parent creates a new function reference for the inner component. React sees a different component type on each render and unmounts/remounts the inner component instead of updating it — destroying its state and causing unnecessary DOM work. Always define components at the module's top level.

**Q: What is the difference between container and presentational components?**
Presentational components only handle rendering — they receive data via props and return JSX. Container components handle logic, state, and data fetching, then pass data down to presentational components. This separation makes presentational components easily testable and reusable — they're pure functions of their props.

---

# Topic 09 — Props

## First principle: Props are how components talk to each other

React has one rule about data flow: **data goes one way — parent to child.** Props are the mechanism for that. A parent component passes data down to a child component through props, just like arguments to a function.

```jsx
// Props are just function arguments
const greet = (name) => `Hello, ${name}`;
greet("Ali"); // you pass data here

// Same idea in React
const Greeting = (props) => <h1>Hello, {props.name}</h1>;
<Greeting name="Ali" /> // you pass data here
```

The child never modifies props. It just reads them and renders. This one-way flow is what makes React predictable — you always know where data comes from.

---

## How props work — the mechanics

```jsx
// Parent passes props like HTML attributes
const App = () => {
  return (
    <UserCard
      name="Ali"
      age={25}
      isAdmin={true}
      scores={[90, 85, 92]}
      address={{ city: "Delhi", country: "India" }}
      onDelete={() => console.log("deleted")}
    />
  );
};

// Child receives ALL of them as one object
const UserCard = (props) => {
  console.log(props);
  // {
  //   name: "Ali",
  //   age: 25,
  //   isAdmin: true,
  //   scores: [90, 85, 92],
  //   address: { city: "Delhi", country: "India" },
  //   onDelete: [Function]
  // }

  return <div>{props.name}</div>;
};
```

Props is just an object. Every attribute you put on a component becomes a key in that object.

---

## Destructuring props — how everyone actually writes it

```jsx
// Nobody writes props.name, props.age everywhere
// Destructure in the parameter — clean and readable

const UserCard = ({ name, age, isAdmin, onDelete }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      {isAdmin && <span>Admin</span>}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
```

Same as destructuring any object — you learned this in Topic 01.

---

## Default props — fallback values

When a prop isn't passed, you want a sensible default instead of `undefined`.

```jsx
// Method 1 — default values in destructuring (preferred)
const Button = ({
  label    = "Click me",
  variant  = "primary",
  size     = "md",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn btn-${variant} btn-${size}`}
    >
      {label}
    </button>
  );
};

// All props optional — defaults kick in
<Button />                          // "Click me", primary, md
<Button label="Submit" />           // "Submit",   primary, md
<Button label="Delete" variant="danger" size="sm" /> // all overridden
```

---

## Prop types — the 5 types of props

```jsx
const Component = ({
  // 1. String
  title,

  // 2. Number — use {} not quotes
  count,

  // 3. Boolean — just the name = true, no value needed
  isActive,          // same as isActive={true}
  isDisabled={false},// explicitly false

  // 4. Array
  items,

  // 5. Object
  user,

  // 6. Function — callbacks/event handlers
  onClick,
  onSubmit,

  // 7. JSX / React element
  icon,
  children,
}) => { ... };

// Usage
<Component
  title="Hello"              // string
  count={42}                 // number
  isActive                   // boolean true
  items={["a", "b", "c"]}   // array
  user={{ name: "Ali" }}    // object
  onClick={() => {}}         // function
  icon={<StarIcon />}        // JSX element
>
  <p>I am children</p>       // children prop
</Component>
```

**A critical mistake:** passing numbers and booleans as strings

```jsx
// WRONG — these are strings "42" and "true"
<Card count="42" isActive="true" />

// CORRECT — use {} for anything that's not a string
<Card count={42} isActive={true} />
<Card count={42} isActive />      // shorthand for isActive={true}
```

---

## The `children` prop — deep dive

`children` is a special prop — it's whatever you put between a component's opening and closing tags.

```jsx
const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div className="card-body">{children}</div>
  </div>
);

// String children
<Card title="Note">This is a simple text note</Card>

// Element children
<Card title="Profile">
  <img src="avatar.jpg" alt="User" />
  <p>Ali — Engineer</p>
</Card>

// Component children
<Card title="Actions">
  <Button label="Edit"   variant="primary" />
  <Button label="Delete" variant="danger"  />
</Card>

// Multiple children — children becomes an array
<Card title="Stats">
  <Stat label="Posts"     value={42}    />
  <Stat label="Followers" value={1204}  />
  <Stat label="Following" value={389}   />
</Card>
```

---

## Prop drilling — the problem and awareness

When data needs to go from a grandparent to a grandchild, you pass it through every level in between — this is called **prop drilling**.

```jsx
// Data starts here
const App = () => {
  const user = { name: "Ali", role: "admin" };
  return <Dashboard user={user} />;
};

// Dashboard doesn't use user — just passes it down
const Dashboard = ({ user }) => {
  return <Sidebar user={user} />;
};

// Sidebar doesn't use user either — just passes it down
const Sidebar = ({ user }) => {
  return <UserProfile user={user} />;
};

// Finally used here — 3 levels deep
const UserProfile = ({ user }) => {
  return <p>{user.name} — {user.role}</p>;
};
```

`Dashboard` and `Sidebar` are just middlemen — they don't need `user` but have to carry it. This gets painful at 4-5 levels deep. The solution is **Context** (Topic 19) — but first you need to recognise the problem.

---

## Passing functions as props — callbacks

This is how children communicate back up to parents. The parent passes a function down, the child calls it.

```jsx
// Parent owns the state and the logic
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build app",   done: false },
  ]);

  // These functions live in the parent
  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}  // pass function down
          onDelete={deleteTodo}  // pass function down
        />
      ))}
    </ul>
  );
};

// Child receives functions and calls them
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}  // calls parent's function
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>✕</button>
    </li>
  );
};
```

The child never touches state directly. It just calls a function the parent gave it. Parent owns state, child reports events — clean separation.

---

## Spreading props — pass-through components

When building wrapper components, you often want to pass all props through to the underlying element:

```jsx
// Input wrapper — adds label but passes everything else to <input>
const FormInput = ({ label, id, error, ...inputProps }) => {
  // label, id, error are used here
  // ...inputProps captures: type, value, onChange, placeholder, disabled, etc.
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} className={error ? "input-error" : ""} />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

// Usage — all native input props work automatically
<FormInput
  label="Email"
  id="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="you@example.com"
  error={errors.email}
/>
```

`...inputProps` collects everything you didn't explicitly destructure and forwards it to `<input>`. This is how UI libraries like MUI and Chakra build their components.

---

## Computed props — derive values from props

```jsx
const Avatar = ({ name, size = 40, imageUrl }) => {
  // Derive values from props — compute inside the component
  const initials   = name.split(" ").map(w => w[0]).join("").toUpperCase();
  const fontSize   = size * 0.4;
  const bgColors   = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"];
  const colorIndex = name.charCodeAt(0) % bgColors.length;
  const bgColor    = bgColors[colorIndex];

  const style = {
    width:          size,
    height:         size,
    borderRadius:   "50%",
    backgroundColor: bgColor,
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    fontSize:       fontSize,
    fontWeight:     "600",
    color:          "#fff",
    overflow:       "hidden",
  };

  if (imageUrl) {
    return <img src={imageUrl} alt={name} style={style} />;
  }

  return <div style={style}>{initials}</div>;
};

// Same component — two very different renders based on props
<Avatar name="Ali Khan"   size={48} />             // shows "AK"
<Avatar name="Sara Singh" size={32} imageUrl="..." />// shows image
```

---

## Validating props with PropTypes

For JS projects (not TypeScript), PropTypes gives runtime warnings in development:

```jsx
import PropTypes from "prop-types";

const UserCard = ({ name, age, role, onDelete }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age} — {role}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

UserCard.propTypes = {
  name:     PropTypes.string.isRequired,
  age:      PropTypes.number.isRequired,
  role:     PropTypes.oneOf(["admin", "editor", "viewer"]),
  onDelete: PropTypes.func,
};

UserCard.defaultProps = {
  role:     "viewer",
  onDelete: () => {},
};
```

In modern projects with TypeScript, you skip PropTypes and define an interface instead — cleaner and catches errors at compile time, not runtime. We'll cover this in Phase 5.

---

## The immutability rule — never modify props

```jsx
// WRONG — never mutate props
const UserCard = ({ user }) => {
  user.name = "Modified"; // mutating props — NEVER do this
  return <div>{user.name}</div>;
};

// CORRECT — read only, derive new values
const UserCard = ({ user }) => {
  const displayName = user.name.toUpperCase(); // derive, don't mutate
  return <div>{displayName}</div>;
};
```

Props belong to the parent. The child has no right to change them. If you need to modify something, derive a new value from the prop — don't touch the prop itself.

---

## Interview Questions

**Q: What are props in React?**
Props are inputs to a React component — a plain JavaScript object passed from parent to child. They're read-only: a child component can never modify its own props. This enforces unidirectional data flow — data moves from parent to child, and children communicate back up through callback functions passed as props.

**Q: What is prop drilling and why is it a problem?**
Prop drilling is passing props through multiple intermediate components that don't use them — just to get data to a deeply nested child. It's a problem because intermediate components get cluttered with props they don't care about, and changing the data shape requires updating every level. The solution is Context API or a state management library like Zustand.

**Q: What is the difference between props and state?**
Props are external — passed in by the parent, read-only inside the component. State is internal — owned and managed by the component itself, can be changed with a setter. Props configure a component from outside; state tracks what changes inside the component over time.

**Q: How do children communicate with parents in React?**
By calling callback functions passed down as props. The parent defines a function, passes it as a prop, and the child calls it with data when an event happens. This keeps state in the parent while letting children trigger changes — maintaining unidirectional data flow.

---

# Topic 10 — `useState`

## First principle: What is state?

Props are data that comes **from outside** the component. State is data that lives **inside** the component and can change over time.

Think of it this way:

```
Props = parameters someone passes to your function — you can't change them
State = local variables your function remembers between calls — you control them
```

The key word is **remembers.** A normal variable resets every time the function runs. State persists across renders.

```jsx
// Why normal variables don't work
const Counter = () => {
  let count = 0; // resets to 0 EVERY render

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {
        count = count + 1;       // updates count...
        console.log(count);      // logs 1, 2, 3... correctly
        // BUT React doesn't know anything changed
        // So it never re-renders — screen stays at 0
      }}>+</button>
    </div>
  );
};
```

Two problems with normal variables:
1. React doesn't know the value changed — no re-render
2. Even if React did re-render, the variable resets to `0` anyway

`useState` solves both problems — it stores the value outside the component so it survives re-renders, and it tells React to re-render when the value changes.

---

## The syntax — unpacked completely

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //     ^       ^                   ^
  //     |       |                   initial value
  //     |       setter function — call this to update
  //     current value

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

`useState(0)` returns an array of exactly two things: `[currentValue, setterFunction]`. You destructure them and name them whatever you want — convention is `value` and `setValue`.

---

## What happens on every render — the full picture

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  // RENDER 1 (initial):
  //   useState(0) → count = 0
  //   React renders: <p>0</p>

  // User clicks button → setCount(1)
  // React schedules a re-render

  // RENDER 2:
  //   useState(0) → count = 1  ← React ignores the 0, gives stored value
  //   React renders: <p>1</p>

  // User clicks button → setCount(2)

  // RENDER 3:
  //   useState(0) → count = 2
  //   React renders: <p>2</p>

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
```

The `0` in `useState(0)` is only used on the **first render**. After that, React stores the value and returns it — the initial value argument is ignored on every subsequent render.

---

## The updater function — critical pattern

There are two ways to call the setter. Most beginners only know the first.

```jsx
// Way 1 — pass new value directly
setCount(count + 1);

// Way 2 — pass an updater function
setCount(prevCount => prevCount + 1);
```

They look similar — but there's a critical difference. React **batches** state updates. If you call the setter multiple times in one event handler, React doesn't re-render after each call — it batches them and re-renders once. This causes a bug with Way 1:

```jsx
// BUG — all three calls read the same stale count
const handleTripleIncrement = () => {
  setCount(count + 1); // count is 0 → sets to 1
  setCount(count + 1); // count is STILL 0 → sets to 1 again!
  setCount(count + 1); // count is STILL 0 → sets to 1 again!
  // Result: count becomes 1, not 3
};

// CORRECT — each call gets the latest value
const handleTripleIncrement = () => {
  setCount(prev => prev + 1); // prev=0 → 1
  setCount(prev => prev + 1); // prev=1 → 2
  setCount(prev => prev + 1); // prev=2 → 3
  // Result: count becomes 3 ✓
};
```

**Rule of thumb:** When new state depends on old state, always use the updater function.

```jsx
// Depends on old state → use updater function
setCount(prev => prev + 1);
setItems(prev => [...prev, newItem]);
setUser(prev => ({ ...prev, name: "Ali" }));

// Doesn't depend on old state → direct value is fine
setName("Ali");
setLoading(false);
setError(null);
```

---

## State with different data types

### Boolean state — toggles

```jsx
const [isOpen,    setIsOpen]    = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isDarkMode,setIsDarkMode]= useState(false);

// Toggle pattern
const toggle = () => setIsOpen(prev => !prev);

return (
  <div>
    <button onClick={toggle}>
      {isOpen ? "Close" : "Open"}
    </button>
    {isOpen && <Modal />}
  </div>
);
```

### String state — inputs

```jsx
const [name,  setName]  = useState("");
const [email, setEmail] = useState("");

return (
  <form>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name"
    />
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your email"
    />
    <p>Hello, {name || "stranger"}!</p>
  </form>
);
```

### Array state — lists

```jsx
const [todos, setTodos] = useState([]);
const [tags,  setTags]  = useState(["react", "js"]);

// ADD — spread existing + new item
const addTodo = (text) => {
  setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
};

// REMOVE — filter out the item
const removeTodo = (id) => {
  setTodos(prev => prev.filter(t => t.id !== id));
};

// UPDATE — map + spread the changed item
const toggleTodo = (id) => {
  setTodos(prev =>
    prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
  );
};
```

### Object state — forms and complex data

```jsx
const [user, setUser] = useState({
  name:  "",
  email: "",
  age:   "",
  role:  "viewer",
});

// Update one field — spread existing + override changed field
const updateField = (field, value) => {
  setUser(prev => ({ ...prev, [field]: value }));
  //                           ^computed property key
};

return (
  <form>
    <input
      value={user.name}
      onChange={(e) => updateField("name", e.target.value)}
    />
    <input
      value={user.email}
      onChange={(e) => updateField("email", e.target.value)}
    />
    <select
      value={user.role}
      onChange={(e) => updateField("role", e.target.value)}
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  </form>
);
```

---

## Lazy initialisation — expensive initial values

If your initial value is expensive to compute (reading from localStorage, heavy calculation), passing it as a function prevents it from running on every render:

```jsx
// BAD — runs JSON.parse on EVERY render, even though result only used once
const [todos, setTodos] = useState(
  JSON.parse(localStorage.getItem("todos")) || []
);

// GOOD — function only called on first render
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});
```

The function form of `useState` — called **lazy initialisation** — is a small but important optimisation.

---

## Multiple state variables vs one object

```jsx
// Option 1 — separate state variables (preferred for unrelated data)
const [name,    setName]    = useState("");
const [age,     setAge]     = useState(0);
const [loading, setLoading] = useState(false);
const [error,   setError]   = useState(null);

// Option 2 — one object (preferred when data is related / updated together)
const [form, setForm] = useState({
  username: "",
  password: "",
  confirm:  "",
});
```

**Rule:** If two pieces of state always update together, put them in one object. If they're independent, keep them separate. Separate state is simpler to update; grouped state keeps related data together.

---

## State is per-instance — each component has its own

```jsx
// Three separate counters — each has its own count state
// They don't share state — completely independent
const App = () => (
  <div>
    <Counter />   {/* count: 0 */}
    <Counter />   {/* count: 0 — different instance */}
    <Counter />   {/* count: 0 — different instance */}
  </div>
);
```

This is a core feature — reusable components each maintain their own private state. Incrementing one counter doesn't affect the others.

---

## State is asynchronous — you can't read it immediately after setting

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // still 0! Not 1!
  // State update is scheduled — the re-render hasn't happened yet
  // count still holds the old value in this execution
};
```

The new value is available on the **next render**, not immediately after calling the setter. If you need to work with the new value right away, store it in a variable first:

```jsx
const handleClick = () => {
  const newCount = count + 1;
  setCount(newCount);
  console.log(newCount); // 1 — correct, because it's just a variable
  sendAnalytics(newCount); // use the variable, not count
};
```

---

## Putting it all together — a real example

```jsx
const ShoppingCart = () => {
  const [items,   setItems]   = useState([]);
  const [coupon,  setCoupon]  = useState("");
  const [applied, setApplied] = useState(false);

  const addItem = (product) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        // Already in cart — increment quantity
        return prev.map(i =>
          i.id === product.id
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      // New item — add to cart
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discounted = applied ? total * 0.9 : total;

  return (
    <div>
      <h2>Cart ({items.length} items)</h2>

      {items.map(item => (
        <div key={item.id}>
          <span>{item.name} × {item.qty}</span>
          <span>₹{item.price * item.qty}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <div>
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon code"
        />
        <button onClick={() => setApplied(coupon === "SAVE10")}>
          Apply
        </button>
      </div>

      <p>Total: ₹{discounted.toFixed(2)}</p>
      {applied && <p>10% discount applied!</p>}
    </div>
  );
};
```

Three state variables, all independent, all working together to power a real feature.

---

## Interview Questions

**Q: What is the difference between `setState(value)` and `setState(prev => newValue)`?**
The first form uses the current value from the closure — if React batches multiple updates, all of them read the same stale value and only the last one wins. The second form always receives the most recent state as `prev`, so batched updates chain correctly. Use the function form whenever new state depends on old state.

**Q: Why can't you read new state immediately after calling the setter?**
`setState` schedules a re-render — it doesn't update the variable synchronously. The component function hasn't run again yet, so `count` still holds the old value. The new value is only available on the next render. If you need the new value immediately in the same function, store it in a local variable before calling the setter.

**Q: What is lazy initialisation in `useState`?**
Passing a function to `useState` instead of a value: `useState(() => expensiveComputation())`. React only calls the function on the first render and ignores it after. Without this, the expression runs on every render — wasteful if it's something expensive like `JSON.parse(localStorage.getItem(...))`.

**Q: When should you use multiple state variables vs one object?**
Separate variables when state changes independently — simpler to update and read. One object when fields are related and often updated together (like a form). One key reason to prefer separate variables: updating one field in an object requires spreading the whole thing; separate variables update in isolation.

---
# Topic 11 — Event Handling

## First principle: Events are how users talk to your app

State is your app's memory. Events are what change that memory. Every click, keystroke, form submission, hover — these are events. React listens for them and lets you run code when they happen.

React wraps browser events in its own system called **Synthetic Events** — but before that, understand what an event actually is.

---

## How event handling works in React vs the browser

```jsx
// Browser (vanilla JS) — you find the element, then attach a listener
document.getElementById("btn").addEventListener("click", handleClick);

// React — you attach the handler directly in JSX, declaratively
<button onClick={handleClick}>Click me</button>
```

React uses **event delegation** under the hood — it attaches one single listener at the root of your app (not on every element). When you click a button, the event bubbles up to the root, React figures out which component it belongs to, and calls your handler. This is more efficient than attaching listeners to every single element.

---

## Synthetic Events — what they are

React wraps the browser's native event in a **SyntheticEvent** — a cross-browser wrapper that normalises behaviour across Chrome, Firefox, Safari, etc.

```jsx
const Button = () => {
  const handleClick = (event) => {
    console.log(event);             // SyntheticEvent object
    console.log(event.type);        // "click"
    console.log(event.target);      // the DOM element clicked
    console.log(event.target.value);// value (useful for inputs)
    console.log(event.clientX);     // mouse X position
    console.log(event.clientY);     // mouse Y position

    event.preventDefault();         // prevent default browser behaviour
    event.stopPropagation();        // stop event bubbling up
  };

  return <button onClick={handleClick}>Click me</button>;
};
```

The Synthetic Event has the same API as the native browser event — `.preventDefault()`, `.stopPropagation()`, `.target`, `.currentTarget`. You use it identically.

---

## The three ways to attach handlers

```jsx
// Way 1 — inline arrow function
<button onClick={() => console.log("clicked")}>Click</button>

// Way 2 — reference to a function (no parentheses!)
const handleClick = () => console.log("clicked");
<button onClick={handleClick}>Click</button>

// Way 3 — inline arrow that calls a function with arguments
<button onClick={() => handleDelete(item.id)}>Delete</button>
```

The most critical mistake beginners make:

```jsx
// WRONG — calls the function immediately when component renders
// handleClick() runs on render, not on click
<button onClick={handleClick()}>Click</button>

// CORRECT — passes the function reference, called on click
<button onClick={handleClick}>Click</button>

// CORRECT — arrow function that calls it on click
<button onClick={() => handleClick()}>Click</button>
```

`onClick={handleClick}` — you're passing the function itself.
`onClick={handleClick()}` — you're calling the function right now and passing its return value.

---

## Common events — the ones you'll use daily

```jsx
const EventExamples = () => {

  // Mouse events
  const handleClick      = () => console.log("clicked");
  const handleDoubleClick= () => console.log("double clicked");
  const handleMouseEnter = () => console.log("mouse entered");
  const handleMouseLeave = () => console.log("mouse left");

  // Keyboard events
  const handleKeyDown = (e) => {
    console.log(e.key);         // "Enter", "a", "ArrowUp" etc.
    console.log(e.keyCode);     // 13 for Enter (older)
    console.log(e.ctrlKey);     // true if Ctrl held
    console.log(e.shiftKey);    // true if Shift held

    if (e.key === "Enter")  handleSubmit();
    if (e.key === "Escape") handleClose();
  };

  // Form events
  const handleChange = (e) => console.log(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh!
    console.log("form submitted");
  };
  const handleFocus  = () => console.log("input focused");
  const handleBlur   = () => console.log("input lost focus");

  return (
    <div>
      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover and click me
      </button>

      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
```

---

## The `onChange` event — how inputs work

`onChange` is the most used event in React. It fires on every keystroke, giving you the current value via `e.target.value`.

```jsx
const Form = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}                           // controlled — React owns the value
        onChange={(e) => setValue(e.target.value)} // update on every keystroke
      />
      <p>You typed: {value}</p>
      <p>Characters: {value.length}</p>
    </div>
  );
};
```

Different input types — `e.target.value` works for most, but checkboxes use `e.target.checked`:

```jsx
const [text,     setText]     = useState("");
const [checked,  setChecked]  = useState(false);
const [selected, setSelected] = useState("option1");
const [file,     setFile]     = useState(null);

// Text, email, password, number, textarea
<input value={text} onChange={(e) => setText(e.target.value)} />

// Checkbox — use e.target.checked not e.target.value
<input
  type="checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// Select dropdown
<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>

// File input — uncontrolled, access via e.target.files
<input type="file" onChange={(e) => setFile(e.target.files[0])} />
```

---

## The `onSubmit` event — form submission

Always call `e.preventDefault()` — otherwise the browser refreshes the page, losing all your state.

```jsx
const LoginForm = () => {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ALWAYS — stops page refresh

    // Validate
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setError("");
    console.log("Submitting:", { email, password });
    // call API here
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
```

---

## Passing arguments to handlers — the right way

When you're in a list and need to pass the item's ID to the handler:

```jsx
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build project" },
    { id: 3, text: "Get hired" },
  ]);

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, text: newText } : t)
    );
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          {/* Arrow function wraps the call — passes id as argument */}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleEdit(todo.id, "Updated!")}>Edit</button>
        </li>
      ))}
    </ul>
  );
};
```

---

## Event bubbling — and when to stop it

Events bubble up through the DOM — a click on a child fires the parent's click handler too.

```jsx
const Card = () => {
  const handleCardClick  = () => console.log("Card clicked");
  const handleButtonClick = (e) => {
    e.stopPropagation(); // stop the click from reaching the card
    console.log("Button clicked");
  };

  return (
    // Clicking the card → logs "Card clicked"
    <div onClick={handleCardClick} style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>Click the card or button</h3>

      {/* Without stopPropagation: clicking button logs BOTH messages */}
      {/* With stopPropagation: clicking button logs ONLY "Button clicked" */}
      <button onClick={handleButtonClick}>Button inside card</button>
    </div>
  );
};
```

**Real use case** — a clickable card that navigates somewhere, with a delete button inside that shouldn't trigger navigation:

```jsx
const ProductCard = ({ product, onNavigate, onDelete }) => {
  return (
    <div onClick={() => onNavigate(product.id)} className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();    // don't navigate
          onDelete(product.id);  // just delete
        }}
      >
        Delete
      </button>
    </div>
  );
};
```

---

## Keyboard event patterns — power user features

```jsx
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    // Search on Enter
    if (e.key === "Enter") {
      onSearch(query);
    }

    // Clear on Escape
    if (e.key === "Escape") {
      setQuery("");
    }

    // Ctrl+K shortcut — often used for focus
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault(); // prevent browser's default Ctrl+K behaviour
      inputRef.current.focus();
    }
  };

  const inputRef = useRef(null); // we'll cover this in Topic 18

  return (
    <input
      ref={inputRef}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search... (Enter to search, Esc to clear)"
    />
  );
};
```

---

## Building a reusable event handler — the generic change handler

For forms with many fields, instead of a separate `onChange` for each input, use a single generic handler:

```jsx
const RegistrationForm = () => {
  const [form, setForm] = useState({
    name:     "",
    email:    "",
    phone:    "",
    password: "",
    role:     "user",
    agreed:   false,
  });

  // One handler for ALL inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      // For checkbox use checked, for everything else use value
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name attribute MUST match the state key */}
      <input name="name"     value={form.name}     onChange={handleChange} placeholder="Name" />
      <input name="email"    value={form.email}     onChange={handleChange} placeholder="Email" />
      <input name="phone"    value={form.phone}     onChange={handleChange} placeholder="Phone" />
      <input name="password" value={form.password}  onChange={handleChange} placeholder="Password" type="password" />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="agreed"
          checked={form.agreed}
          onChange={handleChange}
        />
        I agree to terms
      </label>

      <button type="submit" disabled={!form.agreed}>Register</button>
    </form>
  );
};
```

`[name]: value` — computed property key from Topic 01. The `name` attribute on each input matches the state key. One handler, six inputs. This pattern scales to 20+ fields without adding a single new function.

---

## Visual mental model — event flow

```
User clicks button
        ↓
Browser fires native click event
        ↓
React intercepts at the root (event delegation)
        ↓
React creates SyntheticEvent wrapper
        ↓
React finds which component owns the handler
        ↓
Calls your onClick handler with SyntheticEvent
        ↓
You call setState inside the handler
        ↓
React schedules re-render
        ↓
Component re-renders with new state
        ↓
DOM updates
```

---

## Interview Questions

**Q: What is a Synthetic Event in React?**
A SyntheticEvent is React's cross-browser wrapper around the native browser event. It normalises event behaviour across different browsers and provides the same API as native events (`.preventDefault()`, `.stopPropagation()`, `.target`). React creates it via event delegation — one listener at the root rather than listeners on every element.

**Q: What is event delegation and why does React use it?**
Event delegation means attaching one listener to a parent (the root) instead of individual listeners on every child element. When an event fires, it bubbles up to the root listener, which figures out the target. React uses this for performance — thousands of buttons share one listener instead of having thousands of individual listeners.

**Q: Why do you need `e.preventDefault()` in form submit?**
By default, submitting an HTML form causes the browser to make a GET/POST request and reload the page — losing all React state. `e.preventDefault()` stops the browser's default behaviour, letting you handle submission in JavaScript instead.

**Q: What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?**
`onClick={handleClick}` passes the function reference — React calls it when the click happens. `onClick={handleClick()}` calls the function immediately during render and passes its return value to `onClick`. This is almost always a bug — the function runs on every render instead of on click.

---

**Topic 11 done.** Event handling fully covered — synthetic events, all common events, bubbling, generic handlers, and the parentheses trap.

**Topic 12 — Conditional Rendering.** `&&`, ternary, early returns, and when to use which pattern. The key to building dynamic UIs. Say **"next"** to continue.
If you're making notes for web development/React, add this section:

# Conditional Rendering

Conditional rendering means showing different UI elements based on a condition.

## 1. Using `if` Statement

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User!</h1>;
  }

  return <h1>Please Login</h1>;
}
```

**Output:**

* `isLoggedIn = true` → Welcome User!
* `isLoggedIn = false` → Please Login

---

## 2. Using Ternary Operator (`? :`)

```jsx
function App() {
  const isLoggedIn = false;

  return (
    <h1>
      {isLoggedIn ? "Welcome User!" : "Please Login"}
    </h1>
  );
}
```

### Syntax

```jsx
condition ? trueValue : falseValue
```

---

## 3. Using Logical AND (`&&`)

Used when you want to display something only if a condition is true.

```jsx
function App() {
  const showMessage = true;

  return (
    <div>
      {showMessage && <p>Hello World!</p>}
    </div>
  );
}
```

If `showMessage` is `false`, nothing is rendered.

---

## 4. Multiple Conditions

```jsx
function App() {
  const marks = 85;

  return (
    <h1>
      {marks >= 90
        ? "Excellent"
        : marks >= 75
        ? "Good"
        : "Needs Improvement"}
    </h1>
  );
}
```

---

## Why Conditional Rendering?

* Show login/logout buttons.
* Display loading spinners.
* Show error messages.
* Hide or display components based on user actions.
* Control UI according to permissions or roles.

### Example: Loading State

```jsx
function App() {
  const loading = true;

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data Loaded</p>}
    </div>
  );
}
```

Conditional rendering is one of the most important React concepts because it allows the UI to change dynamically according to the application's state and data.
# Topic 13 — List Rendering (React)

List Rendering means displaying multiple items from an array dynamically using the `map()` method.

Instead of writing elements manually:

```jsx
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
```

We store data in an array and generate UI automatically.

---

## Basic Example

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Output

```text
• Apple
• Banana
• Mango
```

---

## Why Use List Rendering?

Without list rendering:

```jsx
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
```

With list rendering:

```jsx
const fruits = ["Apple", "Banana", "Mango"];

{fruits.map((fruit) => (
  <li>{fruit}</li>
))}
```

Benefits:

* Less code
* Dynamic UI
* Easy updates
* Data-driven rendering

---

## Rendering Objects

Arrays often contain objects.

```jsx
function App() {
  const users = [
    { id: 1, name: "Ankit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
}
```

Output:

```text
Ankit
Rahul
Aman
```

---

## The Importance of `key`

React requires a unique `key` for each list item.

❌ Wrong:

```jsx
{
  users.map((user) => (
    <li>{user.name}</li>
  ));
}
```

✅ Correct:

```jsx
{
  users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));
}
```

### Why Key?

React uses keys to:

* Identify elements uniquely
* Update UI efficiently
* Prevent unnecessary re-renders

---

## Using Index as Key

```jsx
{
  fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ));
}
```

Works, but avoid it when:

* Items can be deleted
* Items can be reordered
* Items can be inserted in the middle

Prefer a unique ID whenever possible.

---

## Rendering Components

```jsx
function User({ name }) {
  return <h3>{name}</h3>;
}

function App() {
  const users = ["Ankit", "Rahul", "Aman"];

  return (
    <>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </>
  );
}
```

---

## List Rendering + Conditional Rendering

```jsx
function App() {
  const users = [
    { id: 1, name: "Ankit", active: true },
    { id: 2, name: "Rahul", active: false }
  ];

  return (
    <ul>
      {users.map((user) =>
        user.active ? (
          <li key={user.id}>{user.name}</li>
        ) : null
      )}
    </ul>
  );
}
```

Only active users are displayed.

---

# Quick Revision Notes 🚀

### What is List Rendering?

Displaying multiple elements from an array dynamically.

### Method Used

```jsx
array.map()
```

### Basic Syntax

```jsx
{
  items.map((item) => <Component />);
}
```

### Key Prop

```jsx
key={uniqueId}
```

Used by React to identify list items uniquely.

### Avoid

```jsx
key={index}
```

when list items can change order.

### Common Use Cases

* Product lists
* User lists
* Comments
* Notifications
* Todo apps

### Interview Question

**Q: Why does React need a key prop?**

**Answer:** React uses keys to uniquely identify list items so it can efficiently update only the changed elements instead of re-rendering the entire list.
