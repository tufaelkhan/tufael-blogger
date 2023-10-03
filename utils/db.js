import mongoose from 'mongoose'
let isConnect = false

export const connectToDb = async () => {
    mongoose.set("strictQuery", true)
    const db = await mongoose.connect(process.env.MONGODB_URI,{
        dbName: process.env.DB_USER,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    isConnect = true
    console.log('use new database connection');
}