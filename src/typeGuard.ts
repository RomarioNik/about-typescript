// "typeof" guard

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

const checkValue = (value: ValueType): ValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  if (typeof value === "boolean") {
    return value;
  }

  return "Please, provide the correct value!";
};

const newValue: ValueType = checkValue(value);
console.log(newValue);

// Equality Narrowing

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

const makeSound1 = (animal: Animal): void => {
  if (animal.type === "dog") {
    animal.bark();
    return;
  }

  if (animal.type === "cat") {
    animal.meow();
    return;
  }
};

const rex: Dog = {
  type: "dog",
  name: "rex",
  bark() {
    console.log("Bark, bark!");
  },
};

makeSound1(rex);

// check for property

const makeSound2 = (animal: Animal): void => {
  if ("bark" in animal) {
    animal.bark();
  }

  if ("meow" in animal) {
    animal.meow();
  }
};

makeSound2(rex);

// "Truthy"/"Falsy" guard

const printLength = (str: string | null | undefined): string => {
  if (str) {
    return `String length is: ${str.length}`;
  }

  return "No string provided";
};

console.log(printLength("Hello, World!"));
console.log(printLength(""));

// "instanceof" type guard

try {
  // Some code that may throw an error
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("Caught an unknown error");
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }

  return input;
}

const currentDate = new Date();
const justAString = "2020-05-05";

const output1 = checkInput(currentDate);
const output2 = checkInput(justAString);

console.log(output1);
console.log(output2);

// Type Predicate

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person = randomPerson();

const isStudent = (person: Person): person is Student => {
  // return "study" in person;
  return (person as Student).study !== undefined;
};

if (isStudent(person)) {
  person.study();
}

if (!isStudent(person)) {
  person.login();
}

console.log(isStudent(person));
console.log(isStudent(person));

// Discriminated Unions and exhaustive check using the never type

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + action.amount;

    case "decrement":
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
};

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

console.log(newState);
