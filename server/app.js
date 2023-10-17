import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import userRoutes from "./routes/userRoutes.js";
import transferRoutes from "./routes/transferRoutes.js";
import connectToMongoDB from "./config/dbConnect.js";

dotenv.config();

const certificateFile = fs.readFileSync(
  "./5840EB732CC427B2743ECAA6439D7036.txt"
);

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
  "/.well-known/pki-validation/5840EB732CC427B2743ECAA6439D7036.txt",
  (req, res) => {
    res.sendFile(certificateFile);
  }
);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
