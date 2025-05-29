// console.log("tutorial TS");

// const stringValue: string = "shakeAdnBake";
// // stringValue = stringValue.toUpperCase();
// console.log(stringValue.toUpperCase());

// let age: number = 20;
// age = age + 5;
// console.log(age);

// let isLoading: boolean = false;
// isLoading = true;
// if (isLoading) {
//   console.log("Loading...");
// }

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";

// orderStatus = "processing";
// orderStatus = "delivered";

// let discount: number | string = 20;
// discount = "20%";

// const bike: { brand: string; year: number } = { brand: "Honda", year: 2020 };
// const product: { brand: string; price: number } = {
//   brand: "Honda",
//   price: 2020,
// };

// const book = { title: "hod", price: 609 };
// const book1 = { title: "hod" };

// const products: { title: string; price?: number }[] = [book, book1];

// const names: string[] = ["bob", "john", "kelly"];

// const isNameInList = (name: string): boolean => {
//   return names.includes(name);
// };

// console.log(isNameInList("Rom"));
// console.log(isNameInList("bob"));

// const processInput = (num: number | string): void => {
//   if (typeof num === "number") console.log(num * 2);
//   if (typeof num === "string") console.log(num.toUpperCase());
// };

// processInput(20);
// processInput("bob");

// const processData = (
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number => {
//   if (typeof input === "number") {
//     return input * input;
//   }

//   if (typeof input === "string" && config.reverse) {
//     return input.split("").reverse().join("").toUpperCase();
//   }

//   if (typeof input === "string") {
//     return input.toUpperCase();
//   }

//   return "Please, provide proper values";
// };

// console.log(processData("bobie"));
// console.log(processData("bobie", { reverse: true }));

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };
// type Staff = Employee | Manager;

// const printStaffDetails = (staff: Staff): string => {
//   if ("employees" in staff) {
//     return `${staff.name} is a Manager and has ${staff.employees.length} employees`;
//   }

//   if ("department" in staff) {
//     return `${staff.name} is an employee and belongs to ${staff.department} department`;
//   }

//   return "We don't have this staff";
// };

// const steve: Employee = { id: 1, name: "Steve", department: "Kitchen" };
// const john: Employee = { id: 1, name: "John", department: "Painters" };
// const olive: Manager = { id: 2, name: "Kelly", employees: [steve, john] };

// console.log(printStaffDetails(steve));
// console.log(printStaffDetails(john));
// console.log(printStaffDetails(olive));

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(amount: number): number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: "Apple",
//   ram: 1024,
//   storage: 8,
//   upgradeRam(amount) {
//     return amount + this.ram;
//   },
// };

// console.log(laptop.upgradeRam(1024));

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const getEmployee = (): Person | DogOwner | Manager => {
//   const random = parseFloat(Math.random().toFixed(2));

//   if (random < 0.33) {
//     return {
//       name: "john",
//     };
//   }

//   if (random < 0.66) {
//     return {
//       name: "sarah",
//       dogName: "rex",
//     };
//   }

//   return {
//     name: "Natally",
//     managePeople() {
//       console.log("Manage people...");
//     },
//     delegateTasks() {
//       console.log("Delegating task...");
//     },
//   };
// };

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

// console.log(isManager(employee));

// enum ServerResponseStatus {
//   Success = 200,
//   Error = "Error",
// }

type ServerResponseStatus = "Success" | "Error";

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: "Success",
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

type UserRole = "Admin" | "Manager" | "Employee";

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// const createUser = (user: User): User => {
//   return user;
// };

// const john: User = {
//   id: 1,
//   name: "john",
//   role: "Admin",
//   contact: ["john@gmail.com", "1234567"],
// };

// const newUser = createUser(john);
// console.log(newUser);

type Status = "pending" | "declined";

type User = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue: Status = "pending";

const user: User = { name: "john", status: statusValue };

type Task = {
  // str: string;
  sentence: string[];
  list: string[][];
  answer: string[];
};

const task: Task = {
  //   str: "{0} you a teacher? Yes, I {1}",
  sentence: ["{0}", "you", "a", "teacher?", "Yes,", "I", "{1}"],
  list: [
    ["Are", "is"],
    ["am", "are"],
  ],
  answer: ["Are", "am"],
};

const make = (obj: Task): string => {
  //   const arr = text.split(" ");
  //   const regex: RegExp = /{[0-9]}/;
  const regex: RegExp = new RegExp("{[0-9]}");
  //   console.log(regex.test(text));

  const newArr = obj.sentence.map((item) => {
    if (regex.test(item)) {
      return obj.answer[parseInt(item[1])];
    }
    return item;
  });

  return newArr.join(" ");
};

console.log(make(task));
