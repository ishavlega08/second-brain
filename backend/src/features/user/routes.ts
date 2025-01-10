import { Router } from "express";
import { logout, signin, signup } from "./controller";
import { isAuthenticated } from "../middlewares/authMiddleware";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);
userRouter.route("/logout").get(isAuthenticated, logout);

export default userRouter;