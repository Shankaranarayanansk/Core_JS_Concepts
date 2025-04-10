let users = [
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 4, name: "David", age: 22, email: "david@example.com" },
  { id: 5, name: "Eve", age: 26, email: "eve@example.com" },
];
//ithukum map kuk diff ena na map false naalum return pannum but filter only returns true
let sem = users
  .filter((val, ind, total) => {
    console.log(ind);
    console.log(total)
    return val.age < 30;
  })
  .fill({ id: 1, name1: "xyz" }, 2, 3);
  console.log("-----------------------")
// users.filter(val=>console.log(val))
console.log(sem);

console.log("------Find------");
let todos = [
  { id: 1, task: "Learn React", completed: false },
  { id: 2, task: "Build Portfolio", completed: true },
  { id: 3, task: "Apply for Jobs", completed: false },
  { id: 4, task: "Revise JavaScript", completed: true },
];

//which 1st satisfy the condition only that added
let newto = todos.find((val) => {
  return val.completed == true;
});
console.log(newto);
