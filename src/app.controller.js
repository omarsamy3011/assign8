import express from 'express'
import { dbconnection } from './db/connection.js'
import postRouter from './module/post/post.controller.js'

export const bootstrab = async ()=>{
    const app = express()
    app.use(express.json())
    await dbconnection()
    await app.use(postRouter)
    app.listen(3000,()=>console.log('server is running on port 3000'))
}