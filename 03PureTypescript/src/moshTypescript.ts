//-----------------------VARIABLES
let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age);

var sales: number = 123_456_789;
//-----------------------ARRAYS
var count: (string | number)[] = [1, 2, "3", 4];
//-----------------------TUPLES
var user: [number, string] = [2, "akorede"];
//-----------------------ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  small = 1,
  medium,
  large,
}
var mySize: Size = Size.large;
console.log(mySize);
//-----------------------FUNCTIONS
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2021) {
    return income * 1.2;
  }
  return income * 1.3;
}
calculateTax(10_000, 2022);
//-----------------------OBJECT
// var employee: { id: number; name: string; retire: (date: Date) => void } = {
//   id: 1,
//   name: "akorede",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
//-----------------------TYPE ALIAS
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
var Employee = {
  id: 1,
  name: "akorede",
  retire: (date: Date) => {
    console.log(date);
  },
};
//-----------------------UNION AND NARROWING
function KgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
KgToLbs(10);
KgToLbs("10");
//-----------------------INTERSECTION
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
var textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
//-----------------------LITERAL TYPES
type Quantity = 50 | 100;
var quantity: Quantity = 50;
type Metric = "cm" | "in";
var metric: Metric = "cm";
//-----------------------NULLABLE TYPES
function greet(name: string | null) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola");
  }
}
greet(null);
//-----------------------OPTIONAL CHAINING
