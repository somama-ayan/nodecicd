import http from 'http'
import dotenv from 'dotenv'
import { userRoute } from './routes/user.js';
dotenv.config()

const PORT = process.env.PORT || 5000
const server = http.createServer(userRoute)


server.listen(
    PORT,
    '0.0.0.0',
    () => {  console.log(`Server Listening on Port5000: ${PORT}`)}
)


