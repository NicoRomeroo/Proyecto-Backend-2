
import express from "express";
import todoRouter from "./routes/todo.router.js";
import exphbs from "express-handlebars";
const app = express();
import "./database.js"

//Midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));

//Express-Handlebars
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/", todoRouter);

app.listen(3000, () =>{
    console.log("escuchando en el puerto: 3000");
});
