import { Router } from "express";
import TodoModel from "../models/todo.model.js";
const router = Router();

//Ruta principal que me muestra todo los datos
router.get("/", (req, res ) => {
    res.render("todos")
});

router.get ("/", async (req, res ) =>{
    try {
        const todos = await TodoModel.find().lean();
        res.render("todos", {todos});
    } catch (error) {
        res.status(500). send("Error interno del servidor, vamos a morir");
    }
})
//Ruta post para crear  un nuevo "todo"

router.post("/todos", async (req, res) => {
    const {title, description} = req.body;
    try {
        const nuevoTodo = new TodoModel({title, description});
        await nuevoTodo.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).send("error en el servidor al intentar enviar todo, llueve toda la semana")
    }
});

//Ruta para renderizar la vista "new"
router.get("/new", (req, res) => {
    res.render("new");
});

/* router.post("/todos/:id/complete", async (req, res) =>{
    try {
        
    } catch (error) {
        res.status(500).send("ssdaf")
    }
});

router.post("/todos/:id/complete", async (req, res)) =>{
} */
export default router;