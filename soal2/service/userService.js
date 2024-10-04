import { validate } from "../validation/validation.js";
import {
    registerValidation,
    getUserValidation,
    deleteUserValidation,
    getAllUserValidation
} from '../validation/userValidation.js'
import { ResponseError } from "../error/responseError.js";
import { prismaClient } from "../config/database.js";
import bcrypt from 'bcrypt';

const registerService = async (request) => {
    const user = validate(registerValidation, request);

    const checEmail = await prismaClient.user.count({
        where: {
            email: user.email
        }
    });

    if (checEmail === 1) {
        throw new ResponseError(400, "Email already exists");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            id: true,
            username: true,
            email: true,
            phone: true
        }
    })
}

const getAllUsersService = async (request) => {
    
    const pagination = validate(getAllUserValidation, request)
    const skip = pagination.page === 1 ? 0 : (pagination.page - 1) * pagination.perPage;
    const result = await prismaClient.user.findMany({
        skip: skip,
        take: 5,
        orderBy: {
            id: "desc"
        },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true
        }
    })

    return result
}

const getUserService = async (request) => {
    const user = validate(getUserValidation, request)

    const result  = await prismaClient.user.findUnique({
        where: {
            id: user
        },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true
        }
    })

    if (!result) {
        throw new ResponseError(404, "User not found")
    }

    return result

}
const deleteUserService = async (request) => {
    const user = validate(deleteUserValidation, request)

    const checkId = await prismaClient.user.findUnique({
        where: {
            id: user
        }
    });

    if (!checkId) {
        throw new ResponseError(404, "User is not found")
    }

    return prismaClient.user.delete({
        where: {
            id: user
        },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true
        }
    })
}



export default {
    registerService,
    getAllUsersService,
    getUserService,
    deleteUserService
}