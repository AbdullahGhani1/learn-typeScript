## TypeScript inference

TypeScript is a statically-typed superset of JavaScript that includes a feature called "type inference". Type inference is the ability of the TypeScript compiler to automatically infer the type of a variable based on its usage.

In other words, when a value is assigned to a variable, TypeScript can often infer the type of that variable based on the value being assigned. This can help reduce the amount of explicit type annotations needed in code, making it more concise and easier to read.

Here are some examples of type inference in TypeScript:

- Inferred type for a string variable:

```typescript
const message = "Hello, world!"; // TypeScript infers that message is of type string
```

- Inferred type for a number variable:

```typescript
const count = 42; // TypeScript infers that count is of type number
```

- Inferred type for a boolean variable:

```typescript
const isActive = true; // TypeScript infers that isActive is of type boolean
```

- Inferred type for a function parameter:

```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // TypeScript infers that the argument passed to greet is of type string
```

- Inferred type for a Object:

```typescript
const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// TypeScript infers that person is of type:
// {
//   name: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//     zip: string;
//   };
// }
```
