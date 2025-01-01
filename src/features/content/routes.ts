import { Router } from "express";
import { createContent, deleteContent, getContent, updateContent } from "./controller";

const contentRouter = Router();

contentRouter.route("/create").post(createContent);
contentRouter.route("/get").get(getContent);
contentRouter.route("/update").put(updateContent);
contentRouter.route("/delete").delete(deleteContent);

export default contentRouter;