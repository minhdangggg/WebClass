let n= Number(prompt('Nhap n:'));
let kq=1;
for (let i = 2; i <= n; i++) {
   kq = kq*i; 
}
alert(`The factorial of ${n} is ${kq}`);