import { User } from '../../models/user'
import { CustomErrorHandler } from "../../services"

const profileController = {
    async basicProfile(req, res, next) {
        try {
            const user = await User.findOne({ email: req.user.email }).select('-password -__v -updatedAt')
            if (!user) {
                return next(CustomErrorHandler.notFound("user not found !"))
            }
            res.send(user)
        } catch (err) {
            console.log(err)
            return next(err)
        }
    }
}
export default profileController