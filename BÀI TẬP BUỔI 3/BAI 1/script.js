//1. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, 
//calculate the sum of the numbers and show it to users

let  num = prompt("Nhap  day so: ").split(",");
let sum=0;
let arr=[];
for(let i in num){
    sum+=arr.push(num[i]);
}
alert(sum);