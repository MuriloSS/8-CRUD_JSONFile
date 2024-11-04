import { Router } from "express";
import userController from "../Controllers/userController.js";

const _userController = new userController();
const userRouter = Router();

userRouter
    .get("/", async (req, res)=> await _userController.getAllUsers(req, res))
    .get("/:id", async (req, res)=>await _userController.getUserById(req, res))


export default userRouter;