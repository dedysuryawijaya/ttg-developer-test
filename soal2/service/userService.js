import { validate } from "../validation/validation.js";
import {
    registerValidation,
    getUserValidation,
    deleteUserValidation
} from '../validation/userValidation.js'
import { ResponseError } from "../error/responseError.js";
import bcrypt from 'bcrypt';

const registerService = async (request) => {
    const user = validate(registerValidation, request);

    user.password = await bcrypt.hash(user.password, 10);

    return {
        user
    }
}

const getAllUsersService = async () => {

    return "alldata"
}

const getUserService = async (request) => {
    const user = validate(getUserValidation, request)

    return {
        user
    }

}
const deleteUserService = async (request) => {
    const user = validate(deleteUserValidation, request)

    return {
        user
    }
}



export default {
    registerService,
    getAllUsersService,
    getUserService,
    deleteUserService
}