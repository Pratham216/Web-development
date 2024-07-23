console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No number was not supporting you.");
    }else{
        console.log('this will take 3 second to run');
        setTimeout(() => {
            console.log('yes i am done');
            resolve("This promise is resolved.");        
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No number was not supporting you. 2");
    }else{
        console.log('this will take 1 second to run 2');
        setTimeout(() => {
            console.log('yes i am done 2');
            resolve("This promise is resolved. 2");        
        }, 1000);
    }
})

// prom1.then((a) =>{
//     console.log(a);     // when the promise is resolved this will print it in console 
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.race([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.any([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.resolve([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

let p3 = Promise.reject([prom1, prom2]);
p3.then((a) =>{
    console.log(a);
}).catch(err =>{
    console.log(err);
})