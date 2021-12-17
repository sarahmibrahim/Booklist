const createError = require("http-errors");
let bookList = [];
let idno = 0;
exports.index = function (req, res) {
  res.send(bookList);
};

exports.create = function (req, res, next) {
  if (!req.body.author) {
    return next(createError(400, "author is required"));
  }
  bookList.push({
    id: idno,
    author: req.body.author,
    Title: req.body.Title,
    status: req.body.status,
  });
  idno++;
  res.send({ result: "true" });
};
exports.show = function (req, res, next) {
  const bookItem = bookList.find((item) => item.id == req.params.id);
  if (!bookItem) {
    return next(createError(404, "no book with that id"));
  }
  res.send(bookItem);
};
exports.showauthor = function (req, res, next) {
    const bookItem = bookList.find((item) => item.author == req.params.author);
    console.log(req.params.author)

    if (!bookItem) {
      return next(createError(404, "no book with that author"));
    }
    res.send(bookItem);
  };
  exports.showTitle = function (req, res, next) {
    const bookItem = bookList.find((item) => item.Title == req.params.Title);
   
    if (!bookItem) {
      return next(createError(404, "no book with that title"));
    }
    res.send(bookItem);
  };
  exports.showstatus = function (req, res, next) {
    const bookItem = bookList.find((item) => item.status == req.params.status);
   
    if (!bookItem) {
      return next(createError(404, "no book with that status"));
    }
    res.send(bookItem);
  };
exports.update = function (req, res, next) {
  //verifying
  //console.log(req.params.id);
  //console.log(bookList);

  const bookItem = bookList.find ( (item) => item.id == req.params.id);
  /*bookList.forEach((item) => {
    console.log("itemID", item.id);
    console.log("true?", item.id == req.params.id);
  });
  //console.log(bookItem)*/
  if (!req.body.author) {
    return next(createError(400, "author is required"));
  }

  if (!bookItem) {
    return next(createError(404, "no book with that id"));
  }
  //updating
  bookList = bookList.map((item) => {
    if (item.id == req.params.id) {
      (item.author = req.body.author),
        (item.Title = req.body.Title),
        (item.status = req.body.status);
    }

    return item;
  });

  res.send({ result: true });
};

exports.delete = function (req, res, next) {
  //verifying
  const bookItem = bookList.find((item) => item.id == req.params.id);

  if (!bookItem) {
    return next(createError(404, "no book with that id"));
  }

  //deleting
  bookList = bookList.filter((item) => item.id != req.params.id);
  res.send({ result: true });
};
