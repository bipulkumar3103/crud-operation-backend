import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment'


const userSchema=mongoose.Schema({
    name:String,
    userName:String,
    email:String,
    phoneNumber:Number
})


// const counterSchema={
//     id:{
//         type:string
//     },
//     seq:{
//         type:Number
//     }
// }
// export const counterModel=mongoose.model('counter',counterSchema)

// autoIncrement.initialize(mongoose.connection)
// userSchema.plugin(autoIncrement.plugin,'user')


const user=mongoose.model('user',userSchema)

export default user