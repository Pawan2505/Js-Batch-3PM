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


class Parent{

    constructor(name){
        this.name = name;
    }
    
    show(){
        console.log("This is Parent class!");
        console.log(this.name);
    }
}

class Child extends Parent{

    constructor(name){
        super(name);
    }

    details(){
        console.log("This is Child Class!");
    }
}

let p = new Parent("Pawan");

// p.show();

let c1 = new Child("Manish");

c1.show();
// c1.details();


