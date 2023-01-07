"use strict";
// const score: number[] = []
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityThree(3);
identityFour({ brand: 'hjhk', type: 123 });
function getSearchProduct(product) {
    const myIndex = 5;
    return product[myIndex];
}
function getSearch(val) {
    return val[2];
}
const getModeSearchProducts = (product) => {
    const myIndex = 4;
    return product[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunction(3, ')
// anotherFunction(3,{connection:'a',username:'d',passord:'d'})
function megaBounce(one, two) {
    return {
        one,
        two
    };
}
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
