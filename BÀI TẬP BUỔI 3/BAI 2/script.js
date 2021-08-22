//2. Write a script asking users to enter a sequence of numbers, 
//the numbers are separated by commas, find the smallest number and log it out to users

let  num = prompt("Nhap  day so: ").split(",");
let arr=[];
for(let i in num){
    arr.push(num[i]); 
}
let min = arr[0];
for(let j=1;j<arr.length;j++)
{
    if(min > arr[j]) min = arr[j];
}
alert(min);