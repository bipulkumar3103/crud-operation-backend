import User from "../schema/user-schema.js";
// import {counterModel} from "../schema/user-schema.js"
export const addUser= async (req,resp)=>{
    const user=req.body;
    // console.log(user);
    
    const newUser=new User(user)
    // counterModel.findByIdAndUpdate(
    //     {id:"autoval"},
    //     {"$inc":{"seq":1}},
    //     {new:true},(error,cd)=>{
    //         if(cd==null){
    //             const newVal=new counterModel({id:'autoval',seq:1})
    //             newVal.save()
    //         }
    //     }
    // )
    try{
        await newUser.save();
        resp.status(201).json(newUser)
    }catch(error){  
        resp.status(409).json({message:message.error})
    }
    
    
    
}

export const getUsers= async(req,resp)=>{
    
    try{
        const users=await User.find({});
        resp.status(200).json(users)
    }catch(error){  
        resp.status(404).json({message:message.error})
    }
}
export const getUser= async(req,resp)=>{

    
    
    try{
        const user=await User.findById(req.params.id);
        resp.status(200).json(user)
    }catch(error){  
        resp.status(404).json({message:message.error})
    }
}
export const editUser= async(req,resp)=>{
    let user=req.body;
    const editUser=new User(user)
    
    
    try{
        const user=await User.updateOne({_id:req.params.id},editUser);
        resp.status(201).json(user)
    }catch(error){  
        resp.status(409).json({message:message.error})
    }
}
export const deleteUser= async(req,resp)=>{
        
    try{
        await User.deleteOne({_id:req.params.id});
        resp.status(200).json({message:'User Successfully Deleted'})
    }catch(error){  
        resp.status(409).json({message:message.error})
    }
}



