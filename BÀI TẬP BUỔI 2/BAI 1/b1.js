console.log('**a.');
for (let i = 0; i < 7; i++) {
    console.log(i);
}
console.log('**b.');
let b = Number(prompt('Nhap so n cho cau b: '));
for (let i = 0; i <b; i++)
{
    console.log(i);
}
console.log('**c.');
let c = Number(prompt('Nhap so n cho cau c: '));
for (let i = 3; i <c; i++)
{
    console.log(i);
}
console.log('**d.');
let d1 = Number(prompt('Nhap so so dau cua cau d: '));
let d2 = Number(prompt('Nhap so so cuoi cua cau d: '));
for (let i = d1; i <d2; i++)
{
    console.log(i);
}
console.log('**e.');
let e1 = Number(prompt('Nhap so so dau cua cau e: '));
let e2 = Number(prompt('Nhap so so cuoi cua cau e: '));
for (let i = e1; i <=e2; i=i+3)
{
    console.log(i);
}
console.log('**f.');
let f1 = Number(prompt('Nhap so so dau cua cau f: '));
let f2 = Number(prompt('Nhap so so cuoi cua cau f: '));
let f3 = Number(prompt('Nhap so buoc nhay: '));
for (let i = f1; i <=f2; i=i+f3)
{
    console.log(i);
}