import express from 'express'
import userController from '../controllers/User.ts'

const peopleContactRoutesModule = express.Router()

peopleContactRoutesModule.get('/', userController.displayStartupInformation)
// router.post('/addcustomer', customerController.addcustomer)

peopleContactRoutesModule.get('*', userController.pageNotFound)

export default peopleContactRoutesModule