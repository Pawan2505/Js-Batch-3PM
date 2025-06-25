
// SyntaxError: Invalid or unexpected token
// console.log("Hello Bhai)

// ReferenceError: x is not defined

// console.log(x);

// let x;

// console.log(x) // undefined


// let obj;
// console.log(obj.age)//TypeError: Cannot read properties of undefined (reading 'age')



// let arr = new Array(5);

// console.log(typeof(arr))
// console.log(arr.length)

// let arr = new Array(-5);

// console.log(arr) // RangeError: Invalid array length


// try{
//    console.log(x)
// }catch(ex){
//     console.log(ex)
// }
try{
   console.log(x)
}catch(ex){
    console.log(ex.message)
}finally{
    console.log("un-wanted memory cleanup...")
}
