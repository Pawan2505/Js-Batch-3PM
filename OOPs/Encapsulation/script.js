// const person ={
//      name : 'Pawan',
//      age:25
// }

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




class Student{
   constructor(name, age){
      this.name = name;
      this.age = age;
      console.log("Parameterised constructor...");
   }
   show(){
     console.log(`Name : ${this.name}`)
     console.log(`age : ${this.age}`)
   }
}

let s1 = new Student(); 
let s2 = new Student("Pawan",25); 

s1.show();
s2.show()





