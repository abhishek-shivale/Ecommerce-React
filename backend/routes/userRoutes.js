import express from 'express'
import { UpdateDetails, createAccuont, loginAccount } from '../controller/userController.js'
import ProtectedRoute from '../middlewares/ProtectedRoute.js'

const UserRouter = express.Router()

UserRouter.route('/register').post(createAccuont)

UserRouter.route('/login').post(loginAccount)

UserRouter.route('/update').put(ProtectedRoute,UpdateDetails)

export default UserRouter