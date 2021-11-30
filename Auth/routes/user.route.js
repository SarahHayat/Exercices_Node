import {create, getUser} from "../controlllers/user.controller";
import express from "express";
const router = express.Router();

router.post("/create", create);
router.get("/:id", getUser);

export default router;
