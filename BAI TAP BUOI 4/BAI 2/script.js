//bai 2:
let course =[
    {
        id:1,
        name: 'HTML',
        complete: false,   
    },
    {
        id:2,
        name: 'CSS',
        complete: false,   
    },{
        id:3,
        name: 'Basic of JS',
        complete: false,   
    },{
        id:4,
        name: 'Node Package Manager',
        complete: false,   
    },{
        id:5,
        name: 'Git',
        complete: false,   
    },
];

function outCourse(childCourse){
    console.log(childCourse.id+'. '+childCourse.name);
    console.log('   Complete: '+ childCourse.complete); 
}
//2.1
console.log('2.1');
for (const i of course) {
    outCourse(i);
}
//2.2
console.log('2.2 - 2.5');
while(1){
let command = prompt('Enter your command: (New, Delete, Update, Complete, Exit :)');
if(command==='New'){
    let nameCourse = prompt('Enter new coures: ');
    let newCourse = {
        id : course.length+1,
        name: nameCourse,
        complete: false,
    };
    course.push(newCourse);
    for (const i of course) {
        outCourse(i);
    }
}
else if(command==='Update'){
    let id = Number(prompt('Enter id update: '));
    for (const i of course) {
        if(i.id===id){
            let newName = prompt('Enter new Name: ');
            i.name=newName;
        }
    }
}
else if(command==='Complete'){
    let id = Number(prompt('Enter id complete:'));
    for (const i of course) {
        if(id.i===id){
            i.complete= true;
            break;
        }
    }
}
else if(command==='Delete'){
    let id = Number(prompt('Enter id delete: '));
    for (const i of course) {
        if(i.id===id){
            course.splice(id-1,1);
            break;
        }
    }
}
else if(command === 'Exit') break;
else alert('Error!!');
}
//2.6
console.log('2.6');
for (const i of course) {
    console.log(i.id + '. [ ] '+i.name);
}

    