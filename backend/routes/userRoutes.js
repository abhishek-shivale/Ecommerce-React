import express from 'express'
import { DeleteUser, GetUserDetails, UpdateDetails, createAccuont, loginAccount } from '../controller/userController.js'
import ProtectedRoute from '../middlewares/ProtectedRoute.js'

const UserRouter = express.Router()

UserRouter.route('/register').post(createAccuont)

UserRouter.route('/login').post(loginAccount)

UserRouter.route('/info').get(ProtectedRoute,GetUserDetails)

UserRouter.route('/update').put(ProtectedRoute,UpdateDetails)

UserRouter.route('/delete').delete(ProtectedRoute,DeleteUser)


export default UserRouter