//1. Initialize a variable named products, containing an array of products,
// each product has a name, price, brand, category, and color
let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'IPhone X',
        brand:  'Apple',
        price: 21490,
        color: 'Gray',
        category:'Phone',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category:'Phone',
    }
]
// 1.1 Print/log name and price of all the products out
function outputName_Price(obj){
            console.log('Name : ' + obj.name);
            console.log('Price: ' + obj.price);
}
for (const i of products) {
    outputName_Price(i);
}
//1.2. Write a script printing/logging out the products with their number,
// then print/logging out the details of a product with its position entered by users
for (const i of products) {
    console.log( (products.indexOf(i) + 1) + '  '+ i.name);
}
// let pos = Number(prompt('Enter the position of the product: '));
// for (const key in products) {
//     if(pos==key) console.table(products[key-1]);
// }
//1.3. Write a script printing/logging out the products based on category input by users
let cate = prompt('Enter the category of the product: ');
for (const i of products) {
    if(cate===i.category) {
        console.log(`Name : ${i.name}`);
        console.log(`Price : ${i.price}`);
        console.log('____________________');
    }
}
//1.4. Add providers to each product
for (let i of products) {
    if(i.brand === 'Xiaomi')  i.provider = 'Phukienzero, Dientuccc'.split(',');
    else i.provider = 'Tgdd';
}
for (const i of products) {
    outputName_Price(i);
    console.log('Provider: ' + i.provider);
    console.log('____________________');
}
//1.5. (Optional) Search the products based on the wanted provider entered by users, 
// if you need more directions, find the hints at the end of this homework
console.log('1.5');
let inputPro = prompt('Enter name of provider you want: ');
for (const i of products) {
    if(i.provider === inputPro){
        outputName_Price(i);
        console.log('------------');
    }
}