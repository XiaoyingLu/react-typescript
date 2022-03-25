// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: { name: string; age: number };

person = {
  name: "Max",
  age: 32,
};

let people: { name: string; age: number }[];

// Type inference

let course = "React - The Complete Guide";

// course = 12341;

// Union Type

let cour: string | number = "React - The Complete Guide";

cour = 123;

// Type Alias

type Person = { name: string; age: number };
let peopl: Person[];

// Functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

