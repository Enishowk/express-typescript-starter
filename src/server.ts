import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { Server } from "http";

// declare all routers
import defaultRouter from "./routes/defaultRouter";
import userRouter from "./routes/userRouter";

const DEFAULT_PORT = 3000;

const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// init your routes
app.use("/", defaultRouter);
app.use("/users", userRouter);

// NOT FOUND
app.use((_req: Request, res: Response) => {
  return res.status(404).json({ error: "Not Found" });
});

// SERVER ERROR
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  return res.status(500).send({ error: "Something failed!" });
});

const server = app.listen(DEFAULT_PORT, () => {
  console.log(`Listening on port ${DEFAULT_PORT}`);
});

process.on("SIGINT", () => shutdownGracefully(server));
process.on("SIGTERM", () => shutdownGracefully(server));

const shutdownGracefully = (server: Server) => {
  console.info("\nClosing server gracefully...");
  server.close(async () => {
    console.info("Server closed.");
    process.exit();
  });
};
