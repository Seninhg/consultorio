const express = require("express");

const config = {
    port: 8080,
    host: 'localhost',
}

const app = express();

//para servir archivos estáticos
app.use("/css", express.static("static/css"));
app.use("/images", express.static(__dirname + "/src/products"));

//para configurar el motor de vistas
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/products", (req, res)=>{
    res.render("products");
})



app.listen(config.port, config.host,()=>{
    console.log(`servidor corriendo en http://${config.host}:${config.port}`);
})