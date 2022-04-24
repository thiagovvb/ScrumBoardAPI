const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = new Schema({
    boardTitle: {
        type: String,
        required: true
    },
    categories: [
        {
            categoryTitle: {
                type: String,
                required: true,
                unique: true
            },
            tags: [
                {
                    tag: String
                }
            ],
            tasks:[
                {
                    taskTitle:{
                        type: String,
                        required: true
                    },
                    responsibleId: {
                        type: Schema.Types.ObjectId,
                        ref:'User',
                    },
                    points: Number,
                }
            ]
        }
    ],
    ownerId: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
})

module.exports = mongoose.model('Board',  boardSchema)