function sum (m, n) {
    let jami = m+n
    return jami
}

let result=sum (20,10)
console. log (result);



function srulisakhelidagvari(person){
    console.log ("sruli saxeli=",person.firstName, person.lastName)
} 
let person={
    firstName: "ninutsa",
    lastName:"sikharulidze"
}
fullname(person)




function fullname (person){
    let results="sruli saxeli=" + person.firstName+ person.lastName
    return (results)
}
let girl={
    firstName:"Lika",
    lastName:"Kldiashvili"
}
let srulisakheli=fullname(girl)
console.log(srulisakheli)