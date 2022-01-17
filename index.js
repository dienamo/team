const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
var bodyParser = require("body-parser");
dotenv.config();
const port = process.env.PORT;

const app = express();

//import routes
const questionsRoute = require("./routes/questions-routes");
const resultsRoute = require("./routes/results-routes");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", questionsRoute);
app.use("/api", resultsRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    // eslint-disable-next-line no-console
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  // eslint-disable-next-line no-console
  .catch((err) => console.error("Error connecting to mongo", err));

app.listen(port, () => {
  console.log("server is now listening");
});
