import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
