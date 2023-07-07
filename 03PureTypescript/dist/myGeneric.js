"use strict";
//ARRAYS
const score = [];
const game = [];
//FUNCTIONS
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(8);
// identityThree<Bottle>({})
function getSearchProducts(products) {
    //do some database
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProduct = (products) => {
    //do some database
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.Cart = [];
    }
    addToCart(products) {
        this.Cart.push(products);
    }
}
//# sourceMappingURL=myGeneric.js.map