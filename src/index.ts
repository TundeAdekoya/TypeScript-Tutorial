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

    protected _courseCount = 1
    readonly city: string = 'lagos'


    constructor(
        public email:string, 
        public name:string,
        // private userId:string
        ){
    }

    private deleteToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <= 1){
            throw new Error('course count should be more than one')
        }
        this._courseCount = courseNum
    }

}

const tunde = new User('t@gmail.com', 'tund')
// tunde.deleteToken() 

class SubUser extends User {
    isFamily: boolean = true 
    changeCourseCount() {
        this._courseCount = 4
    }
}