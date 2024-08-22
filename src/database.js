import mongoose from "mongoose";

mongoose.connect("mongodb+srv://nicoriver122:coderhouse@cluster0.agrpiwa.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0")
    .then( () => console.log("Nos conectamos a mongodb"))
    .catch( (error) => console.log(error))
