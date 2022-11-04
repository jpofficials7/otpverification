import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;

// CORS Policy
app.use(cors);

//JSON
app.use(express.json());

//Load Routes
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
