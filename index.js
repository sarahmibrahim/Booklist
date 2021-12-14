<<<<<<< HEAD
console.log ("hello")
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const router = require('./router')
=======
console.log("hello");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./router");
>>>>>>> 511955fe572bc735dd068f6e72fcc2e9bf7e71a4

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`example app listening on http://localhost: {port}`);
});
