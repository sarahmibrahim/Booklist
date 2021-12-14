console.log("hello");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./Router");

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`example app listening on http://localhost: ${port}`);
});
