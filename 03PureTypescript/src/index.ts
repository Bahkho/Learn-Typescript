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
  protected _courseCount = 1;

  readonly city: string = "lagos";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  private deleteToken() {
    console.log("delete token");
  }

  get getEmail(): string {
    return `email${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
const akorede = new User("a@a.com", "akorede", "akorede02");
// akorede.name;
