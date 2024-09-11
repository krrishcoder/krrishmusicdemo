const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{

    // call back function
    // handle the requests

   //console.log(req)

    // creating logs

    const log = `${Date.now()} : ${req.url} : New Req Received\n`

    fs.appendFile("log.txt",log,(err,data)=>{  // when the req. was recorded in logs.txt
        // console.log("new req. recorded")
        // res.end("hello from server")

        if(req.url === "/favicon.ico"){
            return res.end();
        }


        const myUrl = url.parse(req.url,true)
        console.log(myUrl);

        switch(myUrl.pathname){
            case '/' : res.end("Home page");
            break

            case '/about' : {
                
                const username = myUrl.query['myname']
                console.log(username)
                res.end(`hello ${username}`);

            }
            break
            default :
            res.end("404 not found")
        }
    })

 
    
});

// we need PORT to run the server

// PORT is like door

myServer.listen(8000,()=>{  // handler function
    console.log("Server Started...")
})


// a basic server

