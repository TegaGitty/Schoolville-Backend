import "dotenv/config";
import express from "express";
import router from "./src/route.js";

const app = express();

app.use(express.json());

app.use("/api/books", router);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});