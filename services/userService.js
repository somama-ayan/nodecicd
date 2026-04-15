import { connectDB } from "../db/db.js";


export const createUser = async (body) => {
    const db = await connectDB()
    const userCollection = db.collection('users')
    const result  = userCollection.insertOne(body)
}