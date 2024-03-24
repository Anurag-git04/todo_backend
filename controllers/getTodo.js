//import the model
const Todo = require("../models/Todo");

//define Routes Handler

exports.getTodo = async(req,res) =>{
    try {     
        //fetch all todo item from database
        const todos = await Todo.find({});
        
        //response 
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire Todo Data id Fetched",
            }
        );
    }
    catch(err){
       console.error(err);
       res.status(500).json(
        {
            success:false,
            data:"intenal server error",
            message : "Server Error",
        })
    }
}


exports.getTodoById = async(req,res)=>{
    try{
        //extract on basis og id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // given for given id not found
        if(!todo){
            return res.status(404).json({
                success : false,
                message : "No Data Found with Given Id"
            })
        }

        //data for given id found 
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"intenal server error",
                message : "Server Error",
            })
    }
}