import userService from "../service/userService.js"

const register = async (req, res, next) => {
    try {

        const result = await userService.registerService(req.body)
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.message
        })
    }
}
const allUsers = async (req, res, next) => {
    try {
        const result = await userService.getAllUsersService(req.body)
        res.status(200).json({
            success: true,
            data: result,
            page: req.body.page,
            perPage: req.body.perPage
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.message
        })
    }
}
const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const result = await userService.getUserService(userId)
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.message
        })
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id
        const result = await userService.deleteUserService(userId)
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.message
        })
    }
}

export default {
    register,
    allUsers,
    getUser,
    deleteUser
}