
// try{
//     let x = 10;
//     let y = 5;

//     if(y==0){
//         throw new Error("y should be greater than 0");
//     }else{
//         let result = x/y;
//         console.log(result);
//     } 
// }catch(ex){
//     console.log(ex.message);
// }


// try {
//     // let x;
//     let arr = new Array(-2);
//     console.log(arr);
//     throw new ReferenceError("This is a custom syntax error"); 
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Caught a syntax error1:", error.message) 
//     } else {
//         console.log("Caught some other error2:", error.message) 
//     }
// }


// try{
//     let x = 5

//     if(x%2 != 0){
//         throw new Error("This is an error");
//     }

// }catch(err){
//     console.log(err.message)
// }

// try{
    
//     console.log(x)
//     throw new Error("This is an error");
  

// }catch(err){
//     console.log(err)
// }


// try{
    
//     console.log(x)
//     throw new ReferenceError("This is an error");
  

// }catch(err){
//     if(err instanceof ReferenceError){
//         console.log("Refrence error...")
//     }else{
//         console.log("cusstom error...")
//     }
// }

// try{
//     let x = new Array(-4);
//     console.log(x)
//     throw new ReferenceError("This is an error");
  

// }catch(err){
//     if(err instanceof ReferenceError){
//         console.log("Refrence error...")
//     }else{
//         console.log("cusstom error...")
//     }
// }


// try{
//     // let x = new Array(-4);
//     console.log(x)
//     throw new ReferenceError();
  

// }catch(err){
//     if(err instanceof ReferenceError){
//         console.log("Refrence error...",err.message)
//     }else{
//         console.log("cusstom error...", err.message)
//     }
// }

// synchronous -> uper vala jo code completely run -> uske niche vala excite hota
// console.log("Step 1");
// console.log("Step 2")
// console.log("Step 3")
// console.log("Step 4")
// console.log("Step 5")


// console.log("Step 1");
// console.log("Step 2")
// console.log(c)
// console.log("Step 4")
// console.log("Step 5")


// asynchronous

// console.log("Step 1");
// console.log("Step 2")
// setTimeout(()=>{
// console.log(c)
// },2000)
// console.log("Step 4")
// console.log("Step 5")

let count = 1

let interval = setInterval(()=>{
    console.log(count++)
},1000)

setTimeout(()=>{
clearInterval(interval)
},6000)