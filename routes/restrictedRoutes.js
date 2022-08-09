const router = require('express').Router()
import { loginController, profileController, addressController } from '../controllers';

router.post('/profile/address', addressController.update)


//router.get('/profile/basicprofile', profileController.basicProfile)

router.post('/auth/logout', loginController.logout)


module.exports = router;