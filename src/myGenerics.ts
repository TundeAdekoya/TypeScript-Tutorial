// const score: number[] = []
const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean  | number{
    return val 
} 


function identityThree<Type>(val:Type):Type{
    return val 
}

function identityFour<T>(val:T):T{
    return val
}

interface Bootle {
    brand:string,
    type: number
}
identityThree(3)
identityFour<Bootle>({brand:'hjhk', type:123})

function getSearchProduct<T>(product:T[]): T{
    const myIndex = 5
    return product[myIndex]
}

function getSearch<T>(val:T[]):T{

    return val[2]
}

const getModeSearchProducts = <T,>(product: number[]):number => {
    const myIndex = 4

    return product[myIndex]
}

interface Database {
    connection: string,
    username: string,
    passord: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object{
 return {
    valOne,
    valTwo
 }
}  

// anotherFunction(3, ')

// anotherFunction(3,{connection:'a',username:'d',passord:'d'})




function megaBounce<M, N>(one:M, two:N):object{
    return {
        one,
        two
    }
} 


interface Quiz {
    name:string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class sellable <T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}    