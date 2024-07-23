import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import pages from "./routes/pages";

app.set("view engine", "ejs");

// Serve static files from /dist/public
app.use(express.static(path.join(__dirname, "../../dist")));
app.use(express.static(path.join(__dirname, "../../public")));

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("home");
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log("app started on port 3000");
});
