//5. (Optional) Write a script asking users to enter a sequence of names, separated by commas (,),
// Create a new array containing the names, each surrounded with <>. 
// If you need hints, find them at the end of this homework

let  name = String(prompt("Enter the names: ")).split(",");
let arr=[];
for(let i in name){
    arr.push(name[i]);
}
for (let i = 0; i < arr.length; i++) {
    arr[i]= `<${arr[i]}>`;
}
let aarr = arr.join(",")
alert(`${name} => ${aarr}.`);
