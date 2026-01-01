// let loginStatus=true;

// let mypromise = new Promise((res,rej)=>{
//     if(loginStatus)  res({status:1,msg:"Succcessfull"})
   
//     else rej({ststus:0,msg:"Failed"})
// })


// mypromise.then((res)=>{
//     alert("Login Sucessfull Welcome" )
     
// })
// mypromise.catch((rej)=>{
//     alert("Login please")
// })

// let doWork = (subject) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (subject) {
//         res(`${subject} homework done`)
//       } else {
//         rej("Some error occurred")
//       }
//     }, 2000)
//   })
// }

// let finishWork = async()=>{
//     let task1 = doWork("English");
//     console.log(task1);
//     let task2 = await doWork("Hindi")
//     console.log(task2)
// }

// finishWork();

console.log("task 1");
setTimeout(()=>{
  console.log("task2")
},0);

console.log("task 3")