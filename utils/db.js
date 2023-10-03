import mongoose from 'mongoose'
let isConnect = false

export const connectToDb = async () => {
    mongoose.set("strictQuery", true)
    if(isConnect){
        console.log('using existing DB connection');
        return ;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    isConnect = true
    console.log('use new database connection');
}