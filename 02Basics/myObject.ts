// const user = {
//   name: "akorede",
//   email: "a@a.com",
//   isActive: true,
// };
// //-------------------------------------------------------------
// function createUser({ name: string, isPaid: boolean }) {}
// var newUser = { name: "akorede", isPaid: false, email: "a@a.com" };
// createUser(newUser);
// //-------------------------------------------------------------
// function createCourse(): { name: string; price: number } {
//   return { name: "akorede", price: 499 };
// }
//-------------------------------------------------------------
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};
var myUser: User = {
  _id: "1234",
  name: "akorede",
  email: "a@a.com",
  isActive: false,
};
type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  carddate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
myUser.email = "b@b.com";
export {};
