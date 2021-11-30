import { create } from "../controlllers/user.controller";
import express from "express";
const router = express.Router();

router.post("/api/create", create);

export default router;
