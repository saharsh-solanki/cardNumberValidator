const express = require("express");
const Routes = require("./routes"),
  app = express();

app.use(express.json);

const appRouter = express.Router();

Routes.forEach((route) => {
  appRouter[route.method](route.path, route.handler);
});

module.exports = appRouter;
