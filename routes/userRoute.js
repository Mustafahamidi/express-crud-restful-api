import express from 'express'
import { allUsers,singleUser,addUser,updateUser,deleteUser } from '../controllers/usersControllers.js'
export const router = express.Router()


router.get('/users', allUsers)

router.get('/users/:id',singleUser )

router.post('/users', addUser)

router.patch("/users/:id", updateUser)

router.delete('/users/:id', deleteUser);
