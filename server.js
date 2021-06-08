const express = require('express')
const app = express()
const port = 8080
const path = require("path")

app.use(express.static('dist'));
app.get('*',(req,res) => {
    //Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在 /d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2 。
    let indexHtmPath = path.join(__dirname,"dist","index.html")
    res.sendFile(indexHtmPath)
})
app.listen(port,
    ()=> console.log(`this is app listening on port ${port}:`))
