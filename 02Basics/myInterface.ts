interface User {
  readonly DBId: number;
  email: string;
  userId: number;
  googleId?: number;
  //   startTrail: () => string,
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learner";
}
const akorede: Admin = {
  DBId: 22,
  role: "admin",
  githubToken: "github",
  email: "a@a.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "akorede10", off: 10) => {
    return 10;
  },
};

export {};
