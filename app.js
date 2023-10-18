import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import transferRoutes from "./routes/transferRoutes.js";
import connectToMongoDB from "./config/dbConnect.js";

const PORT = 8080;

const app = express();

connectToMongoDB();

app.use(cors());
app.use(express.json());
app.use("/api/v1/bank", userRoutes);
app.use("/api/v1/bank", transferRoutes);

app.get("/", (req, res) => {
  res.json("Hello From express 😎");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
