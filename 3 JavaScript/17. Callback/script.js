console.log('I am pratham');
console.log('I am Tony');

setTimeout(()=>{
    console.log('SetTimeout  is an asynchornus action'); 
},0);


setTimeout(()=>{
    console.log('that is why it is printing after js executed other function'); 
},0);

console.log('THe end');

const callback =(arg)=>{
    console.log(arg);
    
}

const loadScript = (src, callback)=>{
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = callback("Type Prism to check the loadScript");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
