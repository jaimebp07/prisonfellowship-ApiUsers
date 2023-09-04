import {Router} from 'express'
import userController from '../controllers/User.ts'

const peopleContactRoutesModule: Router = Router()

peopleContactRoutesModule.get('/', userController.displayStartupInformation)
// router.post('/addcustomer', customerController.addcustomer)

peopleContactRoutesModule.get('*', userController.pageNotFound)

export default peopleContactRoutesModule