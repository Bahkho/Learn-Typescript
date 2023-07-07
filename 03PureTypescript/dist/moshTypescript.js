"use strict";
//-----------------------VARIABLES
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
var sales = 123456789;
//-----------------------ARRAYS
var count = [1, 2, "3", 4];
//-----------------------TUPLES
var user = [2, "akorede"];
//-----------------------ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var mySize = Size.large;
console.log(mySize);
//-----------------------FUNCTIONS
function calculateTax(income, taxYear) {
    if (taxYear < 2021) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
var Employee = {
    id: 1,
    name: "akorede",
    retire: (date) => {
        console.log(date);
    },
};
//-----------------------UNION AND NARROWING
function KgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
KgToLbs(10);
KgToLbs("10");
var textBox = {
    drag: () => { },
    resize: () => { },
};
//# sourceMappingURL=moshTypescript.js.map