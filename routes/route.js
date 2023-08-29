import express from 'express';
import { addUser,getUsers,getUser,editUser,deleteUser } from '../controller/user-controller.js';

const router=express.Router()


router.post('/addUser',addUser)
router.get('/allUser',getUsers)
router.get('/editUser/:id',getUser)
router.put('/editUser/:id',editUser)
router.delete('/allUser/:id',deleteUser)



export default router