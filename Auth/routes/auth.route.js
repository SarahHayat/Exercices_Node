import express from "express";
import {login} from "../controlllers/auth.controller";
const router = express.Router();

// router.post("/registration", register);
router.post("/login", login);

export default router;
