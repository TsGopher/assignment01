## TypeScript-এ interface এবং type এর মধ্যে পার্থক্য কী?

TypeScript এ interface আর type - দুটোই আমাদেরকে custom type তৈরি করতে সাহায্য করে। কিন্তু এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে!

### interface (ইন্টারফেস)

```ts
interface User {
  name: string;
  age: number;
}

interface Employee extends User {
  salary: number;
}
```

### type (টাইপ)

```ts
type User = {
  name: string;
  age: number;
};

type Employee = User & {
  salary: number;
};
```

### মূল পার্থক্যগুলো:

1. #### এক্সটেন্ড করার পদ্ধতি

   `interface`: extends keyword ব্যবহার করে

   `type`: & (ইন্টারসেকশন) ব্যবহার করে

2. #### ডিক্লারেশন মার্জিং

   `interface`: একই নামে multiple interface লিখলে তারা auto merge হয়ে যায়

   `type`: একই নামে multiple type লিখলে error দেবে

3. #### ব্যবহারের ক্ষেত্র

   `interface`: শুধু object type এর জন্য

   `type`: যেকোনো type এর জন্য (object, union, primitive, etc.)

### কখন কী ব্যবহার করব?

Object shapes এর জন্য → `interface` (বেশি readable)

Union types, complex types এর জন্য → `type`

সাধারণত, object এর structure define করতে `interface` আর advanced type operations এ `type` ব্যবহার করাই ভালো প্র্যাকটিস!

## ইউনিয়ন এবং ইন্টারসেকশন টাইপস

### ইউনিয়ন টাইপ (`|`)

ইউনিয়ন টাইপ দিয়ে আমরা একাধিক টাইপ ডিক্লেয়ার করতে পারি একটি ভেরিয়েবলের জন্য। উদাহরণস্বরূপ:

```ts
let id: string | number; // স্ট্রিং বা নাম্বার গ্রহণ করতে পারে
id = "ABC123"; // ভ্যালিড
id = 123; // ভ্যালিড
id = true; // এরর - বুলিয়ান এক্সেপ্ট করবে না

// ফাংশন প্যারামিটারেও ব্যবহার
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}
```

### ইন্টারসেকশন টাইপ (`&`)

ইন্টারসেকশন টাইপ দিয়ে আমরা একাধিক টাইপকে একত্রিত করতে পারি। উদাহরণস্বরূপ:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

// দুইটি ইন্টারফেস কম্বাইন
type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "রহিম",
  age: 30,
  employeeId: "E123",
  department: "IT",
};

function processEmployee(person: Person & Employee) {
  console.log(`Employee Name: ${person.name}, ID: ${person.employeeId}`);
}
```

### সারসংক্ষেপ:

- ইউনিয়ন (`|`) = একাধিক টাইপের যেকোনো একটি

- ইন্টারসেকশন (`&`) = সব টাইপের প্রোপার্টি একসাথে
