// function definition
// function greet(){
//    // return "Hello world";
//    console.log("Hello Bhai");
// }

// greet(); // fun invoke / call

// let result =  greet();
// console.log(result)

// console.log(greet())

// function add(x,y){ // x,y -> parameter
//    console.log(x+y);
// }

// add(10,20); // 10,20 -> argument

// function add(x,y=20){ // x,y -> parameter
//    console.log(x+y);
// }

// add(10,50); // 10,20 -> argument
// function add(x=10,y){ // x,y -> parameter
//    console.log(x);
//    console.log(x+y);
// }

// add(10); // 10,20 -> argument

// let person ={
//      name : 'Pawan',
//      age:25,
//      greet : function(){
//       console.log(this);
//      }
// }

// person.greet();

// console.log(person);

// const person ={
//      name : 'Pawan',
//      age:25,
//     greet: function(){
//        return "Hello JavaScript Class!";
//     }
// }

// // console.log(person);

//  const fn = person.greet();
//  console.log(fn)

// console.log(person.name)

// const person ={
//      name : 'Pawan',
//      age:25,
//     greet: function(){
//       console.log(`I'm ${this.name}`)
//     }
// }

// person.greet();

// function constructor

// function Person(name,age,salary){
//    this.name = name;
//    this.age = age;
//    this.salary = salary;

// }

// const myObj = new Person("Pawan",25,100);
// const myObj1 = new Person("Manish",22,10000);

// console.log(myObj);
// console.log(myObj1);

// class Student{

//    show(){
//       console.log("Hello Class.");
//    }
// }

// let s1 = new Student();
// s1.show();

// class Student{

//    constructor(name,age){
//       this.name = name;
//       this.age = age;
//    }

//    show(){
//       console.log(`I'm ${this.name}`);
//       console.log(`My age is ${this.age}`);
//    }
// }

// let s1 = new Student("Pawan",25);  // constructor invoke
// let s2 = new Student("Pankaj",20);  // constructor invoke
// s1.show();
// s2.show();

// class Student{

//    setDetails(name,age){
//       this.name = name;
//       this.age = age;
//    }

//   getDetails(){
//       console.log(`I'm ${this.name}`);
//       console.log(`My age is ${this.age}`);
//    }
// }

// let s1 = new Student();

// s1.setDetails("Pawan",25);
// s1.getDetails();

// class Student{

//    #name;

//    setDetails(name,age){
//       this.#name = name;
//       this.age = age;
//    }

//   getDetails(){
//       console.log(`I'm ${this.name}`);
//       console.log(`My age is ${this.age}`);
//    }
// }

// let s1 = new Student();

// s1.setDetails("Pawan",25);
// // s1.name = "Manish";

// console.log(s1.name);
// s1.getDetails();

// class Student{
//    constructor(name, age){
//       this.name = name;
//       this.age = age;
//       console.log("Parameterised constructor...");
//    }
//    show(){
//      console.log(`Name : ${this.name}`)
//      console.log(`age : ${this.age}`)
//    }
// }

// let s1 = new Student();
// let s2 = new Student("Pawan",25);

// s1.show();
// s2.show()

// function constructor : inisilise object

// function Person(name,age,gender){
//    this.name = name;
//    this.age = age;
//    this.gender = gender;
// }

// const p1 = new Person("Pawan",25,"male");
// const p2 = new Person("Manish",24,"male");
// const p3 = new Person("vanshi",12,"female");

// console.log(p1.name);
// console.log(p2);
// console.log(p3);

// class Student{
//    // data member -> property

//    // member function -> behaviour
// }

//  let s1 = new Student();

// class Student {
//   constructor() {
//     console.log("Constructor called...");
//   }

//   show() {
//     console.log("Bhai purane dard mat udhero!");
//   }
// }

// let s1 = new Student();



// class Student{

//    constructor(){
//          console.log("Constructor called...");
//    }

//    show(){
//       console.log("Bhai purane dard mat udhero!");
//    }
// }

//  let s1 = new Student();
//  let s2 = new Student();

// class Student{

//    constructor(name, age){
//          this.name = name;
//          this.age = age;
//    }
//    constructor(name, age, marks){  // A class may only have one constructor
//          this.name = name;
//          this.age = age;
//    }

//    show(){
//       console.log("Name : ",this.name);
//       console.log("Age : ",this.age);
//       console.log("Age : ",this.marks);
//    }
// }

//  let s1 = new Student("Rohit", 23);
//  let s2 = new Student("Lofar", 24, 23);

//  s1.show();
//  s2.show();


// class Student{
//     #name
//    constructor(name, age){
//          this.#name = name;
//          this.age = age;
//    }
//    show(){
//       console.log("Name : ",this.#name);
//       console.log("Age : ",this.age);
//    }
// }

//  let s1 = new Student("Rohit", 23);
//  s1.show();

// console.log(s1.name);

