const express = require("express");
const eventRoutes = require("./apis/events/routes");
const connectDb = require("./database");
const morgan = require("morgan");

connectDb();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/events", eventRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
