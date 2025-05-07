function addTwo(num: number) {
  // num.toUpperCase();
  return num + 2;
}


function addThree(num: number): number {
  // num.toUpperCase();
  // return num + 3;
  return "Hello";
}


function getUpper(val: string) {
  return val.toUpperCase()
}


function signUpUser(name: string, email: string, isPaid: boolean) {
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }



// getUpper(5)
getUpper("hello world")
addTwo(5);
signUpUser("hitesh", "hitesh@email.com", true)
loginUser("h", "h@h.com")


// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }



const getHello = (s: string): string => {
  return ""
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 3, 4]

heroes.map((hero: string) => {
  return `hero is ${hero}`
})


function consoleError(errmsg: string): never {
  throw new Error(errmsg)
}


function handleError(errmsg: string): void {
  console.log(errmsg)
}


export { }