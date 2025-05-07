// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// type Mystring = string;

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: false }
// }

// createUser({
//     name: "",
//     email: "",
//     isActive: true
// })

// export { }

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "Hitesh",
    email: "h@h.com",
    isActive: false
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}



myUser.email = "h@gmail.com"
// myUser._id = "22222"

export { }