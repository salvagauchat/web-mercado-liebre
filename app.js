const express = require ("express");
const path = require("path");

const app = express();

const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath)); //decirle a express que queremos tener la carpeta public como archivos estaticos para usarlos siemrpe.



app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register.html", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login.html", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.listen(3030, ()=>{
    console.log("Servidor corriendo en el puerto 3030");
});