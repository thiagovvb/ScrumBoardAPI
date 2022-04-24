const Board = require('../models/boardModel')
const User = require('../models/userModel')


module.exports.postBoard = (req,res,next) => {
    const boardTitle = req.body.boardTitle
    const ownerId = req.body.ownerId

    const board = new Board({
        boardTitle: boardTitle,
        ownerId: ownerId 
    })
    board
        .save()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(error => {
            res.status(500).send("Houve um erro no salvamento no banco de dados", error)   
        })

}

module.exports.getBoard = (req,res,next) => {
    const boardId = req.query.boardId
    Board.findById(boardId)
        .then(board => {
            res.status(200)
               .send(board);
        })
        .catch(error =>{
            res.status(500).send("Houve um erro na requisição", error)
        })
}

module.exports.postCategory = (req,res,next) => {

    const boardId = req.body.boardId
    const categoryTitle = req.body.categoryTitle

    Board.findById(boardId)
         .then(board => {
            board.categories.push(
                {
                    categoryTitle: categoryTitle
                }
            )
            board.save()
            res.status(200).send(board)
         })
         .catch(error =>{
            res.status(500).send("Houve um erro na requisição", error)
        })
}