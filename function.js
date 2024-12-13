function compareNumber (m,n) {
    if (m>n) {return m}
    else if (n>m) {return n}
    else {return 0}
}



function sum (num1, num2) { 
    return num1+num2

}
console.log (sum (3,5))



function myName(){
    console.log("ninutsa sikharulidze")
} 
myName()


function fullname (firstName,lastName){
    let srulisakheli= firstName+" "+lastName
    return (srulisakheli)
}
let lika=fullname("lika","kldiashvili")
console.log (lika)

function total(n) {
    let amount = 1;
    for(let i=1; i<n ;i++)
        {amount= amount*i}
    return amount

}
console.log (total(5))

let student =  {
    firstName: "giorgi",
    lastName: "kldiashvili",
    age:31,
    scores:[4,7,5,3,2],
    fullname:function(){
        return this.firstName+" " +this.lastName

    }
}
console.log (student.fullname())

function qulebisjami(scores) {
    let jami=0;
    for (let i=0; i<scores.length; i++){
        jami= jami+scores [i]
    }
    return jami
}console.log (qulebisjami(student.scores))

console.log ("name an age:", student.firstName, student.age )

