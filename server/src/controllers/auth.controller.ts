import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import Users from "../models/user.model";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateActiveToken,
  generateRefreshToken,
} from "../config/generateToken";
import { validateEmail } from "../middlewares/valid";
import { IDecodedToken, IUser } from "../config/interface";

const saltRounds = 10;

const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, account, password } = req.body;
      const user = await Users.findOne({ account });
      if (user)
        return res
          .status(400)
          .json({ message: "Email number already exists." });

      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newUser = { name, account, password: passwordHash };
      const active_token = generateActiveToken({ newUser });

      if (validateEmail(account)) {
        return res.json({
          message: "Success! Please check your email.",
          active_token,
        });
      }
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
  activeAccount: async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body;
      const decoded = <IDecodedToken>(
        jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
      );
      const { newUser } = decoded;
      const user = new Users(newUser);
      await user.save();
      return res.json({
        message: "Account has been activated",
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { account, password } = req.body;
      const user = (await Users.findOne({ account: account })) as IUser;
      if (!user) {
        return res.status(404).json({ message: "This account doesn't exist." });
      }
      //if account exists => check Password
      else {
        const isMatchingPassword = await bcrypt.compare(
          password,
          user.password
        );

        if (!isMatchingPassword)
          return res.status(400).json({ message: "Password is incorrect." });

        // if matching password -> login process
        const access_token = generateAccessToken({ id: user._id });
        const refresh_token = generateRefreshToken({ id: user._id });
        res.cookie("REFRESH_TOKEN", refresh_token, {
          httpOnly: true,
          secure: false,
          path: "/api/v1/auth/refreshtoken",
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        });

        return res.json({
          message: "Login Successfully",
          access_token,
          refresh_token,
          user: { ...user._doc },
        });
      }
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
  refreshToken: async (req: Request, res: Response) => {
    try {
      const refresh_token = req.cookies.REFRESH_TOKEN;
      if (!refresh_token)
        return res.status(400).json({ message: "Please login now!" });

      const decoded = <IDecodedToken>(
        jwt.verify(refresh_token, `${process.env.REFRESH_TOKEN_SECRET}`)
      );
      if (!decoded)
        return res.status(400).json({ message: "Please login now!" });

      const user = await Users.findOne({ id: decoded._id });
      if (!user)
        return res.status(400).json({ message: "This account doesn't exist!" });
      // generate new access token
      const access_token = generateAccessToken({ id: user._id });

      return res.json({ access_token, user });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("REFRESH_TOKEN", { path: "/api/v1/auth/refreshtoken" });
      return res.json({ message: "Logged out." });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default authController;
