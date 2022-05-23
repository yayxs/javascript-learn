const http = require('http')
const url = require('url')
const path = require('path')

const server = http.createServer((req,res)=>{
  // todo

  const urlObj = url.parse(req.url)
  console.log(urlObj);

  res.writeHead(200);
  res.write('123');
  res.end();
})


server.listen(3000,()=>{
  console.log('ok')
})