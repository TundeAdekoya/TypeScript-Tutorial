"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLocaleUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('provide id');
        return;
    }
    id.toLowerCase();
}
const isAdminAccount = (account) => {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
};
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side 
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
