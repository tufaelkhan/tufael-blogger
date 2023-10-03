import {Schema, model, models} from mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'please provide the title'],
    },
        subtitle:{
            type: String,
        required: [true, 'please provide the subtitle'],
        },
        tag:{
            type: String,
        required: [true, 'please provide the tag'],
        },
        image:{
            type: String,
        required: [true, 'please provide the image'],
        },
        content:{
            type: Array,
        required: [true, 'please provide the content'],
        },
        date:{
            type: Date,
        default: Date.now,
        },
        Number:{
            type: Number,
        default: Math.floor(Math.random()*1000),
        },
        author:{
            type: String,
        required: [true, 'please provide the author name'],
        },
        authorImg:{
            type: String,
        required: [true, 'please provide the author image'],
        },
})