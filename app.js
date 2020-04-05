const http = require("http");
const path =  require("path");

http.createServer((req,res) => {
    res.write("Hellow Node");
    res.end();
}).listen(3000)

console.log('server is running')