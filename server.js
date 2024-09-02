const express = require("express")

const app = express()

// console.log("Hello")

app.get("/", (req, res) => {
    res.sendFile("./index.html", './style.css', { root: __dirname })
})

app.listen(3001);