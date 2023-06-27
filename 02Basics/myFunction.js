"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("bakare");
signUpUser("bakare", "akorede@gmail.com", false);
loginUser("bakare", "akorede@gmail.com");
var heros = ["superman", "ironman", "hulk"];
// const heros = [2, 3, 1];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMessage) {
    console.log(errMessage);
}
function handleError(errMessage) {
    throw new Error(errMessage);
}
