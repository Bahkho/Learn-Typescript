function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}
addTwo(5);
//-------------------------------------------------------------
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("bakare");
//-------------------------------------------------------------
function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("bakare", "akorede@gmail.com", false);
//-------------------------------------------------------------
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("bakare", "akorede@gmail.com");
//-------------------------------------------------------------
const heros = ["superman", "ironman", "hulk"];
// const heros = [2, 3, 1];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMessage: string): void {
  console.log(errMessage);
}
function handleError(errMessage: string): never {
  throw new Error(errMessage);
}

export {};
