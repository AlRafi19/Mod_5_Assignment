const fs = require("fs")
const http =require("http")

const server = http.createServer(function(request,response){
    if (request.url=="/"){
        fs.readFile("home.html",function(error,data){
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data)
            response.end()
        })

    }else{
        response.end("File not Found")
    }
})

server.listen(3000)
console.log("Connected to Server")