const express = require("express")
const app = express()
const getDarkJokes = require("./routes/getJokes")
const homeroutes = require("./routes/home")
app.set('view engine', 'ejs')
app.use(express.json())

app.use("/",homeroutes)

app.use("/jokes",getDarkJokes)

app.listen(3000,()=>{
    console.log("server is running,catch it if you can!!!")
})