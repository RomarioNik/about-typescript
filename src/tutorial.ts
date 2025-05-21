console.log("tutorial TS");

const stringValue: string = "shakeAdnBake";
// stringValue = stringValue.toUpperCase();
console.log(stringValue.toUpperCase());

let age: number = 20;
age = age + 5;
console.log(age);

let isLoading: boolean = false;
isLoading = true;
if (isLoading) {
  console.log("Loading...");
}

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

orderStatus = "processing";
orderStatus = "delivered";

let discount: number | string = 20;
discount = "20%";

const bike: { brand: string; year: number } = { brand: "Honda", year: 2020 };
const product: { brand: string; price: number } = {
  brand: "Honda",
  price: 2020,
};

const book = { title: "hod", price: 609 };
const book1 = { title: "hod" };

const products: { title: string; price?: number }[] = [book, book1];

const names: string[] = ["bob", "john", "kelly"];

const isNameInList = (name: string): boolean => {
  return names.includes(name);
};

console.log(isNameInList("Rom"));
console.log(isNameInList("bob"));

const processInput = (num: number | string): void => {
  if (typeof num === "number") console.log(num * 2);
  if (typeof num === "string") console.log(num.toUpperCase());
};

processInput(20);
processInput("bob");

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number => {
  if (typeof input === "number") {
    return input * input;
  }

  if (typeof input === "string" && config.reverse) {
    return input.split("").reverse().join("").toUpperCase();
  }

  if (typeof input === "string") {
    return input.toUpperCase();
  }

  return "Please, provide proper values";
};

console.log(processData("bobie"));
console.log(processData("bobie", { reverse: true }));

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

const printStaffDetails = (staff: Staff): string => {
  if ("employees" in staff) {
    return `${staff.name} is a Manager and has ${staff.employees.length} employees`;
  }

  if ("department" in staff) {
    return `${staff.name} is an employee and belongs to ${staff.department} department`;
  }

  return "We don't have this staff";
};

const steve: Employee = { id: 1, name: "Steve", department: "Kitchen" };
const john: Employee = { id: 1, name: "John", department: "Painters" };
const olive: Manager = { id: 2, name: "Kelly", employees: [steve, john] };

console.log(printStaffDetails(steve));
console.log(printStaffDetails(john));
console.log(printStaffDetails(olive));
