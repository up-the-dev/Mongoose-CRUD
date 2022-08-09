import { CustomErrorHandler } from "../../services"
import { User } from '../../models/user'
import { addressValidator } from "../../validators/address"
const addressController = {
    async update(req, res, next) {
        //request validation
        addressValidator(req, res, next)
        //fetch user from user
        //save req.body to model
        try {
            const user = await User.findOne({ _id: req.user._id })
            if (!user) {
                return next(CustomErrorHandler.notFound())
            }
        } catch (err) {
            return next(err)
        }
        res.send("done")



    }
}
export default addressController