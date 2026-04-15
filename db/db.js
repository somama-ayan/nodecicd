import { MongoClient } from "mongodb";


const mongoUrl = process.env.MONGO_URL
const client = new MongoClient(mongoUrl)

export const connectDB = async() => {
    try{
        await client.connect()
        console.log('Successfully Connected to mongoDB!')
        return client.db('secondappmongodb')
    }catch(err)
    {
        console.log('Error connecting to Db', err)
    }
}