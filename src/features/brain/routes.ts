import { Router } from "express";
import { createSharedLink, getSharedLink } from "./controller";

const brainRouter = Router();

brainRouter.route("/share").post(createSharedLink);
brainRouter.route("/:shareLink").get(getSharedLink);

export default brainRouter;