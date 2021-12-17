const express = require("express");
const router = express.Router();


router.put("/book/:id", books.update);
router.delete("/book/:id", books.delete);

router.get("/book", books.index);
router.post("/book/create", books.create);
router.get("/book/:id", books.show);
router.get("/author/:author", books.showauthor);
router.get("/Title/:Title", books.showTitle);
router.get("/status/:status", books.showstatus);
module.exports = router;
