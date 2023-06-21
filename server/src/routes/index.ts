import { Request, Response, Application } from "express";
import authRoute from "./auth.route";

const initRoutes = (app: Application) => {
  app.use("/api/v1/auth", authRoute);
  return app.use("/", (req: Request, res: Response) => {
    res.send("server on...");
  });
};

export default initRoutes;
