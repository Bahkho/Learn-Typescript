"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "44";
var bakare = { name: "akorede", id: 899 };
bakare = { userName: "ak", id: 899 };
// function getDBId(id: string | number) {
//   console.log(`DB Id is ${id}`);
// }
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDBId(3);
getDBId("3");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, "3", true];
var seatAllotment;
