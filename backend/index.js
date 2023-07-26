const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const appRouter = require("./routes/index.routes.js");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT,
  app = express();

app.use(cors());
app.use(express.json());
app.use("/", appRouter);

app.listen(PORT, (req) => {
  console.log(`Server started on http://localhost:${PORT}`);
});
