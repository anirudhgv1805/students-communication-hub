import express, { Request, Response } from "express";
import * as dotevnv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import "reflect-metadata";
import { DataSource } from "typeorm";

dotevnv.config();

if (!process.env.PORT) {
  console.log(`No port value specified...`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const dbsource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/models/**/*.ts"],
});

dbsource
  .initialize()
  .then(() => {
    console.log("User has been successfully create");
  })
  .catch((err) => {
    console.error("failed to the connect to the db: " + err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("The api is working perfectly with typescript enabled");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
