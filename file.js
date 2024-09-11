const fs = require("fs");

//sync
//fs.writeFileSync('./test.txt', 'Hello world');

// async

// fs.writeFile("./test.txt", "hello world async",(err)=>{

// });


// sync
//const res = fs.readFileSync("./contact.txt", "utf-8");


// async
// fs.readFile("./contact.txt","utf-8", (err,res)=>{
//     if(err){
//         console.log("error : ",err);
//     }else{
//         console.log(res);
//     }
// });

// append file
fs.appendFileSync("./test.txt", `${Date.now()} \n`);


fs.mkdirSync("my-docs");