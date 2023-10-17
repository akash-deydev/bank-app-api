import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
import transferRoutes from "./routes/transferRoutes.js";
import connectToMongoDB from "./config/dbConnect.js";

dotenv.config();

const certificateFile = fs.readFileSync(
  "./B7399AA2CF709F07271A319D8612F6ED.txt"
);

console.log();

const PORT = process.env.PORT || 9000;

const app = express();

connectToMongoDB();

app.use(cors());
app.use(express.json());
app.use("/api/v1/bank", userRoutes);
app.use("/api/v1/bank", transferRoutes);

app.get("/", (req, res) => {
  res.json("Hello From express 😎");
});

app.get(
  "/.well-known/pki-validation/B7399AA2CF709F07271A319D8612F6ED.txt",
  (req, res) => {
    res.sendFile(path.resolve("./B7399AA2CF709F07271A319D8612F6ED.txt"));
  }
);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
