import express from "express";
const router = express.Router();
import userControler from "../controllers/userController.js";

//public Routes

router.get("/login", userControler.userLogin);

export default router;
