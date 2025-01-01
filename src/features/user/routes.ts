import { Router } from "express";
import { signin, signup } from "./controller";

const userRouter = Router();

userRouter.route("/signup").post(signup);
userRouter.route("/signin").post(signin);

export default userRouter;