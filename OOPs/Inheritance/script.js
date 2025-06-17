// class Parent{

//     show(){
//         console.log("This is Parent class!");
//     }
// }

// class Child extends Parent{

//     details(){
//         console.log("This is Child Class!");
//     }
// }


// let c1 = new Child();

// c1.show();
// c1.details();


// class Parent{

//     constructor(name){
//         this.name = name;
//     }
    
//     show(){
//         console.log("This is Parent class!");
//         console.log(this.name);
//     }
// }

// class Child extends Parent{

//     constructor(name){
//         super(name);
//     }

//     details(){
//         console.log("This is Child Class!");
//     }
// }

// let p = new Parent("Pawan");

// // p.show();

// let c1 = new Child("Manish");

// c1.show();
// // c1.details();


// class Parent{

//     display(){
//         console.log("This is Parent Class");
//     }
// }

// class Child extends Parent {

// }

// // const p1 = new Parent();

// // p1.display();

// const c1 = new Child();

// c1.display();


// class Parent{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     display(){
//         console.log("This is Parent Class");
//         console.log("Name : ",this.name);
//         console.log("Age : ",this.age);
//         console.log("Marks : ",this.marks);
        
//     }
// }

// class Child extends Parent {

//     constructor(name,age,marks){
//         super(name,age);
//         this.marks = marks;
//     }

// }

// // const p1 = new Parent("dishant",20);

// // p1.display();

// const c1 = new Child("Manish",25,100);

// c1.display();




// class Vehicle{

//     setdetails(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     getdetails(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }


// const v1 = new Vehicle();
// v1.setdetails("Pawan",25);


// v1.getdetails();


// class Vehicle{

//     set details({name,age}){
//         this.name = name;
//         this.age = age;
//     }

//     get details(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }


// const v1 = new Vehicle();
// v1.details = {name:"Pawan",age:25};


// v1.details;



// const obj = {
//     username:"Pawan",
//     age:25
// }


// const {username, age} = obj;

// console.log(username)
// console.log(age)



// let x = 10;
// let y = 20;

// [y,x] = [x,y]

// console.log(x)
// console.log(y)



//  let arr = [12,25,34];

//  [a,,b] = arr;

//  console.log(a)
//  console.log(b)



let arr = [12,34,56,78];
console.log(arr)

console.log(...arr)