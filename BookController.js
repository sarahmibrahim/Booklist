const createError = require("http-errors")
let bookList = []
let idno = 0
exports.index = function(req,res){
    res.send(bookList)
}

exports.create = function (req, res, next){
    if(!req.body.author){
        return (next(createError(400, "author is required")))
    }
    bookList.push({
        id: idno,
        author: req.body.author,
        Title: req.body.Title,
        status: req.body.status

    });
    idno++;
    res.send({result: "true"})
}
exports.show = function (req,res,next){
    const bookItem = bookList.find ( (item) =>  item.id == req.params.id)
    if(!bookItem){

    return (next(createError(404, "no book with that id")))
}
res.send(bookItem)
}
exports.update = function (req,res,next){
    //verifying
    const bookItem = bookList.find( (item) => item.id == req.params.id )
    
    if(!req.body.author){
        return (next(createError(400,"author is required")))
    }

    if(!bookItem) {
        return (next(createError(404,"no book with that id")))
    }
//updating
    bookList = bookList.map ((item) => {
        if(item.id == req.params.id){
            item.author = req.body.author,
            item.Title = req.body.Title,
            item.status = req.body.status
        }
        
        return item;

    } )

    res.send({result: true})
}

exports.delete = function (req,res,next) {
    //verifying
    const bookItem = bookList.find( (item) => item.id == req.params.id )

    if(!bookItem) {
        return (next(createError(404,"no book with that id")))
    }

    //deleting
    bookList = bookList.filter( (item) => item.id != req.params.id)
    res.send({result:true})
}