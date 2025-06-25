// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// const dog = new Dog();
// dog.speak(); 
// const an = new Animal();
// an.speak(); 


// class A {
//     area(x, y) {
//         console.log(x * y);
//     }
//     area(x, y,z) {
//         console.log(x * y*z);
//     }
// }


// let ob = new A();
// let output1 = ob.area(100, 200);
// output1.area();
// let output2 = ob.area(100, 200,300);
// output2.area();


// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.usename = function() {
//   return this.firstName + " " + this.lastName
// };

// let obj1 = new Person("Pawan","Maurya",25,"Brown");

// console.log(obj1.username())

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.username = function(data) {
//   this.firstName = data;
// };


// let obj1 = new Person("Pawan","Maurya",25,"Brown");
// obj1.username("Manish")
// console.log(obj1);




// class ZoomOut{

//     show(){
//         console.log("Zoom out class....");
//     }
// }


// class ZoomIn extends  ZoomOut{
//     show(){
//         console.log("Zoom in class...")
//     }
// }


// const o1 = new ZoomOut();
// const i1 = new ZoomIn();

// o1.show();
// i1.show();


// class ZoomOut{

//     show(name){
//         console.log("Zoom out class....",name);
//     }

//     show(age){
//         console.log("Zoom in class....",age);
//     }
    
// }

// const o1 = new ZoomOut();

// o1.show("Pawan");
// o1.show(25);


// JavaScript does not natively support method overloading, where multiple methods with the same name but different arguments exist in the same scope. However, method overloading can be simulated by checking the number or type of arguments passed to a function, and executing different logic based on them.




