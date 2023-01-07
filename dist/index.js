"use strict";
// class User {
//     public email:string
//     private name:string
//     readonly city: string = 'lagos'
//     constructor(email:string, name:string){
//         this.email = email;
//         this.name = name;
//         this.city 
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'lagos';
    }
    deleteToken() {
        console.log('token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than one');
        }
        this._courseCount = courseNum;
    }
}
const tunde = new User('t@gmail.com', 'tund');
// tunde.deleteToken() 
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
