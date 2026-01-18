import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html'
})
export class TypeScriptComponent implements OnInit {

  tsBasics = [
    {label: 'Superset of JavaScript', text: 'All JavaScript code is valid TypeScript'},
    {label: 'Static Typing', text: 'Catch errors at compile time'},
    {label: 'Better Tooling', text: 'IntelliSense, refactoring, navigation'},
    {label: 'Compiles to JavaScript', text: 'Runs anywhere JavaScript runs'}
  ];

  jsProblems = [
    {label: 'No Type Safety', text: 'Runtime errors from type mismatches'},
    {label: 'Poor IDE Support', text: 'Limited autocomplete and refactoring'},
    {label: 'Hard to Maintain', text: 'Difficult to understand large codebases'},
    {label: 'Late Error Detection', text: 'Bugs discovered only at runtime'}
  ];

  basicsCode = `// TypeScript adds type annotations to JavaScript
let message: string = "Hello TypeScript";
let count: number = 42;
let isActive: boolean = true;

// Type inference - TypeScript infers the type
let inferredString = "TypeScript"; // string
let inferredNumber = 100; // number`;

  typesCode = `// String
let name: string = "John";

// Number
let age: number = 30;
let price: number = 99.99;

// Boolean
let isStudent: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple - fixed length array with specific types
let person: [string, number] = ["John", 30];

// Any - opt-out of type checking
let anything: any = "string";
anything = 42; // OK

// Void - absence of type (functions that don't return)
function logMessage(msg: string): void {
  console.log(msg);
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never - function never returns
function throwError(message: string): never {
  throw new Error(message);
}`;

  interfacesCode = `// Interface defines object shape
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};

// Interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Extending interfaces
interface Employee extends User {
  department: string;
  salary: number;
}`;

  typeAliasesCode = `// Type alias - alternative to interface
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = string | number;
type Status = "pending" | "approved" | "rejected";

let userId: ID = "user123";
let orderStatus: Status = "pending";

// Function type alias
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;`;

  classesCode = `// Class with access modifiers
class Person {
  public name: string; // accessible everywhere
  private age: number; // only within class
  protected email: string; // within class and subclasses

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getAge(): number {
    return this.age;
  }
}

// Shorthand constructor
class User {
  constructor(
    public id: number,
    public name: string,
    private password: string
  ) {}
}

// Inheritance
class Employee extends Person {
  constructor(
    name: string,
    age: number,
    email: string,
    public department: string
  ) {
    super(name, age, email);
  }
}

// Abstract class
abstract class Animal {
  abstract makeSound(): void;
  
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}`;

  genericsCode = `// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "text" };
const numberBox: Box<number> = { value: 123 };

// Generic class
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T {
    return this.data[index];
  }
}

const numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);

// Generic constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello"); // OK
logLength([1, 2, 3]); // OK`;

  enumsCode = `// Numeric enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;

// String enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

let orderStatus: Status = Status.Pending;

// Enum with custom values
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

// Const enum (inlined at compile time)
const enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Red;`;

  unionIntersectionCode = `// Union type - value can be one of several types
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello"; // OK
value = 42; // OK

// Union with literal types
type Status = "success" | "error" | "pending";
let status: Status = "success";

// Intersection type - combines multiple types
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "John",
  age: 30,
  employeeId: 123,
  department: "IT"
};

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}`;

  typeGuardsCode = `// typeof type guard
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// instanceof type guard
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// in operator
type Person = { name: string; age: number };
type Company = { name: string; employees: number };

function printInfo(entity: Person | Company) {
  if ("age" in entity) {
    console.log(\`Person: \${entity.name}, Age: \${entity.age}\`);
  } else {
    console.log(\`Company: \${entity.name}, Employees: \${entity.employees}\`);
  }
}`;

  utilityTypesCode = `// Partial - makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit - exclude specific properties
type UserWithoutEmail = Omit<User, "email">;
// { id: number; name: string; }

// Record - create object type with specific keys
type Roles = "admin" | "user" | "guest";
type Permissions = Record<Roles, string[]>;

const permissions: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

// ReturnType - extract return type of function
function getUser() {
  return { id: 1, name: "John" };
}

type UserType = ReturnType<typeof getUser>;
// { id: number; name: string; }

// Exclude - exclude types from union
type T1 = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

// Extract - extract types from union
type T2 = Extract<"a" | "b" | "c", "a" | "f">;
// "a"

// NonNullable - exclude null and undefined
type T3 = NonNullable<string | number | null | undefined>;
// string | number`;

  decoratorsCode = `// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyKey} with\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Property decorator
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Person {
  @readonly
  name: string = "John";
}

// Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(\`Parameter at index \${parameterIndex} is required\`);
}

class Greeter {
  greet(@required name: string) {
    return \`Hello, \${name}\`;
  }
}`;

  modulesCode = `// Exporting
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;

// Default export
export default class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Importing
// app.ts
import Calculator, { add, subtract, PI } from './math';

const result1 = add(5, 3);
const result2 = subtract(10, 4);
console.log(PI);

const calc = new Calculator();
const result3 = calc.multiply(2, 3);

// Import all as namespace
import * as MathUtils from './math';

MathUtils.add(1, 2);
MathUtils.PI;

// Re-exporting
// index.ts
export { add, subtract } from './math';
export { default as Calculator } from './math';

// Type-only imports/exports
export type { User } from './types';
import type { Config } from './config';`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('TypeScript - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
