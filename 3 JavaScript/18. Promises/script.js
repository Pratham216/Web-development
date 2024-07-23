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

prom1.then((a) =>{
    console.log(a);     // when the promise is resolved this will print it in console 
}).catch(err =>{
    console.log(err);
})
