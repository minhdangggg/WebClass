//3. Create an array containing at least 5 numbers, then ask users enter a number,
// perform a search to look for the number in the array, if the number is found, 
//tell user that with the index of it in the array, if not, also tell them so

const arr = [3, 3, 3, -9, 10, -88, 2];
let arr1=[];

let input=Number(prompt("Enter a number:" ));
for (let index = 0; index < arr.length; index++) {
    if(input==arr[index]) arr1.push(arr[index]);
}
if(arr1.length>=1)
    for (let i = 0; i < arr1.length; i++) {
        alert(`${input} is in ${i+1} of the array.`);
    }
else alert(`${input} is not in the array.`);
 