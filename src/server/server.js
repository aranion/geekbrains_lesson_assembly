const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

app.use("/", express.static(path.resolve(__dirname, "../public/")));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listener: ${port} port.`));
