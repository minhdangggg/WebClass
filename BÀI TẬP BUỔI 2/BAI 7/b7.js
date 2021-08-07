console.log('**a.');
let l1=h1=0;
for (let i1 = 1; i1 <= 6; i1++) {
    if(i1%2==0) h1++;
    else l1++;
}
console.log(`${l1} L`);
console.log(`${h1} H`);
console.log('**b.');
let l2=h2=0;
let n2=Number(prompt('Enter number for sentence b:'));
for (let i2 = 1; i2 <= n2; i2++) {
    if(i2%2==0) h2++;
    else l2++;
}
console.log(`${l2} L`);
console.log(`${h2} H`);
console.log('**c.');
let i3=u3=0;
while(1)
{
    if(u3+i3>=8) break;
    else {
        console.log('0');
        ++u3;
        if(u3+i3>=8) break;
        else
        {
            console.log('1');
            ++i3;
        }  
    } 
}
console.log('**d.');
let n4=Number(prompt('Enter number for sentence d:'));
let i4=u4=0;
while(1)
{
    if(u4+i4>=n4) break;
    else {
        console.log('0');
        ++u4;
        if(u4+i4>=n4) break;
        else
        {
            console.log('1');
            ++i4;
        }  
    } 
}
