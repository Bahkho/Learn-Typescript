var score: string | number = 33;
score = 44;
score = "44";

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let bakare: User | Admin = { name: "akorede", id: 899 };

bakare = { userName: "ak", id: 899 };

// function getDBId(id: string | number) {
//   console.log(`DB Id is ${id}`);
// }

function getDBId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDBId(3);
getDBId("3");

//array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", 2, "3", true];

var seatAllotment: "aisle" | "middle";
// seatAllotment = "crew";
export {};
