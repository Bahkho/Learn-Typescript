"use strict";
//CLASS & PRIVATE,PUBLIC,PROTECTED & GETTERS AND SETTERS
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "lagos";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "lagos";
    }
    deleteToken() {
        console.log("delete token");
    }
    get getEmail() {
        return `email${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const akorede = new User("a@a.com", "akorede", "akorede02");
// akorede.name;
