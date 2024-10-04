import express from "express";
import userController from '../controller/userController.js';
import bodyParser from "body-parser";
import { errorMiddleware } from "../middleware/errorMiddleware.js";

const api = new express.Router();

api.post('/user/new',bodyParser.json({type: "*/*"}), errorMiddleware, userController.register)
api.get('/user/all', bodyParser.json({type: "*/*"}), userController.allUsers)
api.get('/user/:id', userController.getUser)
api.delete('/user/:id', userController.deleteUser)

export {
    api
}