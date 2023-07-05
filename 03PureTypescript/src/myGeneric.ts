//ARRAYS
const score: Array<number> = [];
const game: Array<string> = [];
//FUNCTIONS
function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}
// identityThree(8);
// identityThree<Bottle>({})
function getSearchProducts<T>(products: T[]): T {
  //do some database
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProduct = <T>(products: T[]): T => {
  //do some database
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// anotherFunction(3,{})

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public Cart: T[] = [];
  addToCart(products: T) {
    this.Cart.push(products);
  }
}
