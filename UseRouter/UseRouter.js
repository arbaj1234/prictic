import express from 'express';
import { CreateUser, Deletauser, GetallUser, GetbyidUser, Login, Ragister, Updateuser } from '../Userconteroller/userController.js';


const router=express.Router();

router.post('ragister',Ragister);
router.post('login',Login)
router.post('create',CreateUser)
router.get('getall',GetallUser)
router.get('getbyid',GetbyidUser)
router.put('update',Updateuser)
router.delete('delete',Deletauser)


export default router