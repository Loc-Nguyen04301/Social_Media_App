import express from "express";
import authController from "../controllers/auth.controller";
import { validRegister } from "../middlewares/valid";

const router = express.Router();

router.post("/register", validRegister, authController.register);
router.post("/active", authController.activeAccount);
router.post("/login", authController.login);
router.get("/refreshtoken", authController.refreshToken);
router.get("/logout", authController.logout);
export default router;
