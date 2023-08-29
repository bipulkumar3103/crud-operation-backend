import mongoose from "mongoose"


const Connection= async (username,password)=>{
     const URL=`mongodb+srv://${username}:${password}@bipul0.jk7l3sl.mongodb.net/?retryWrites=true&w=majority`
        try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('Database Connected Successfully');
    }catch(error){
        console.log(`Error while connecting to database ${error}`)
    }
}

export default Connection