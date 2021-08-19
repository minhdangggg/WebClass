//1. Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
const str_input='Concaro';

function print_DaoNguoc(str){
    let arr=[];
    for (let i = str.length-1; i >=0; i--) {
        arr.push(str[i]);
    }
    console.log(arr.join(''));
};
print_DaoNguoc(str_input);
//2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự
// và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
 
//3. Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả
const arr3 = [1,2,3,3,4,5,4,4,4,5,5];

function xoaTrung(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = arr.length-1; j >= i+1; j--) {
            if(arr[j]===arr[i]) arr.splice(j-1,1);
        }
    }
    console.log(arr.join(', '));
}
xoaTrung(arr3);
//4. Tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ).
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete)
//(2đ)


