const todo = require("../models/todo");

exports.postTodo = async (req, res) => {
    try {
        const title = req.body;
        if(!title || !title.trim()){
            return res.status(400).json({message: "Required field missing."})
        }
        const newTodo = new todo({title})
        await newTodo.save();
        return res.status(201).json({message: "new todo added."})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong! Could not create new todo", error});
    }
}

exports.getTodo = async (req, res) => {
    try {
        const todos = await todo.find();
        return res.status(200).json({message: "ok", todos});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong! Could not fetch todos", error});
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const reqBody = req.body;
        const todoId = req.params.id;
        const title = typeof(reqBody.title) == "string" && reqBody.title.trim().length > 0 ? reqBody.title.trim() : "";
        const completed = typeof(reqBody.completed) == "boolean" && [true, false].indexOf(reqBody.completed) > -1 ? reqBody.completed : undefined;
        if(!todoId){
            return res.status(400).json({message: "required id missing."})
        }
        let obj = {};
        if(title){
            obj.title = title;
        }
        if(completed != undefined){
            obj.completed = completed;
        }
        await todo.findByIdAndUpdate(todoId, obj)
        return res.status(200).json({message: "todo updated"});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong! Could not update todo", error});
    }
}

exports.deleteTodo = async () => {
    try {
        const todoId = req.params.id;
        if(!todoId){
            return res.status(400).json({message: "required id missing."});
        }
        await todo.findByIdAndDelete(todoId);
        return res.status(200).json({message: "todo deleted"});
    } catch (error) {
        return res.status(500).json({message: "Something went wrong! Could not delete todo", error});
    }
}