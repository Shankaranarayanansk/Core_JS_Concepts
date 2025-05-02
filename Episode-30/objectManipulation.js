// ✅ prototype is blueprint of objects
// when we run in browser, we can observe prototype chaining in action

// ------------------ 1. Object Creation ------------------ //
let person = {
    pName : "Johu",
    age : 30 
};

// 🔹 Object.assign - used to add more key and value
Object.assign(person, { job: "BDE" });
console.log("1️⃣ person:", person);
// ➤ { pName: 'Johu', age: 30, job: 'BDE' }

console.log("────────────────────────────");

// ------------------ 2. Another Object ------------------ //
let person2 = {
    id: "AWS9212",
    name1: "Leo"
};

// 🔹 Add more properties
Object.assign(person2, { role: "SDE", salary: 1000 });
console.log("2️⃣ person2:", person2);
// ➤ { id: 'AWS9212', name1: 'Leo', role: 'SDE', salary: 1000 }

console.log("────────────────────────────");

// ------------------ 3. Object.entries ------------------ //
// Object.entries() returns an array of an object's own enumerable 
// string-keyed property [key, value] pairs.
let product = {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    inStock: true
};

let multiArr = Object.entries(product);
multiArr.push(["name", "leo"]);
Object.assign(product, { name: "Leodas" });

console.log("3️⃣ multiArr:", multiArr);
// ➤ [
//   [ 'id', 1 ],
//   [ 'name', 'Laptop' ],
//   [ 'category', 'Electronics' ],
//   [ 'price', 999.99 ],
//   [ 'inStock', true ],
//   [ 'name', 'leo' ]
// ]

console.log("4️⃣ product after assign:", product);
// ➤ { id: 1, name: 'Leodas', category: 'Electronics', price: 999.99, inStock: true }

console.log("────────────────────────────");

// ------------------ 4. Object.fromEntries ------------------ //
// Converts entries array back to object
let change_nor = Object.fromEntries(multiArr);
console.log("5️⃣ fromEntries object:", change_nor);
// ➤ { id: 1, name: 'leo', category: 'Electronics', price: 999.99, inStock: true }

console.log("────────────────────────────");

// ------------------ 5. Object.keys & Object.values ------------------ //
// only keys
let only_key = Object.keys(change_nor);
console.log("6️⃣ keys:", only_key);
// ➤ [ 'id', 'name', 'category', 'price', 'inStock' ]

// only values
let only_obj = Object.values(change_nor);
console.log("7️⃣ values:", only_obj);
// ➤ [ 1, 'leo', 'Electronics', 999.99, true ]

console.log("────────────────────────────");

// ------------------ 6. Object.freeze ------------------ //
// freeze - no property can be created or modified
const meo = {
    name: "Killer"
};

let freze = Object.freeze(meo);

// 🔹 Attempting to add/modify
meo.name1 = "leo"; // not added
meo.name = "muu";  // not modified

console.log("8️⃣ frozen object:", freze);
// ➤ { name: 'Killer' }

console.log("9️⃣ meo after freeze attempt:", meo);
// ➤ { name: 'Killer' }

console.log("🔟 isFrozen:", Object.isFrozen(meo));
// ➤ true
