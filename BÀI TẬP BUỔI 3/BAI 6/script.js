//6. (Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). 
// Create a new array containing only the odd Numbers of the entered sequence.
let  number = prompt("Enter the num: ").split(",");
arrOdd=[];
for (const i in number) {
    if(number[i]%2!=0) arrOdd.push(number[i]);
}
console.log(arrOdd.join(" "));