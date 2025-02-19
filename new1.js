const http=require('http')
http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type',"text/html")
    res.write("<h1>GOOD AFTERNOON STUDENTS</h1>")
    res.write("<br>")
    res.write("<h3>GIM</h3>")
    res.write(`
        
        
        
        
        `)
    
 
    res.end()

}).listen(2000)