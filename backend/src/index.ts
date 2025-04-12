import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";
import "reflect-metadata";
import { dbsource } from "./db/data-source";
import { errorHandler } from "./middlewares/errorHandler";
import { authRouter } from "./routes/authRoutes";

dotenv.config();

if (!process.env.PORT) {
  console.log(`No port value specified...`);
}

const PORT = parseInt(process.env.PORT as string, 10);

dbsource
  .initialize()
  .then(() => {
    console.log("Database connection is successful");
  })
  .catch((err) => {
    console.error("failed to the connect to the db: " + err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("The api is working perfectly with typescript enabled");
});

app.use("/api/auth", authRouter);

// to be specified at the last after the routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
