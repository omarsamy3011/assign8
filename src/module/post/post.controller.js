import { Router } from "express";
import { problem10, problem11, problem12, problem13, problem14, problem15, problem16, problem17, problem18, problem19, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problems1 } from "./post.service.js";

const router = Router()

router.post('/collection/books',async(req,res)=>{
    const result = await problems1(req.body)
    res.json(result)
})
router.post('/collection/authors',async(req,res)=>{
    const result = await problem2(req.body)
    res.json(result)
})
router.post('/collection/logs/capped',async(req,res)=>{
    const result = await problem3()
    res.json(result)
})
router.post('/collection/books/index',async(req,res)=>{
    const result = await problem4()
    res.json(result)
})
router.post('/books',async(req,res)=>{
    const result = await problem5(req.body)
    res.json(result)
})
router.post('/books/batch',async(req,res)=>{
    const result = await problem6(req.body)
    res.json(result)
})
router.post('/logs',async(req,res)=>{
    const result = await problem7(req.body)
    res.json(result)
})
router.patch('/books/Future',async(req,res)=>{
    const result = await problem8(req.body)
    res.json(result)
})
router.get('/books/title',async(req,res)=>{
    const result = await problem9(req.query.title)
    res.json(result)
})
router.get('/books/year',async(req,res)=>{
    const result = await problem10(req.query.from,req.query.to)
    res.json(result)
})
router.get('/books/genre',async(req,res)=>{
    const result = await problem11(req.query.genre)
    res.json(result)
})
router.get('/books/skip-limit',async(req,res)=>{
    const result = await problem12()
    res.json(result)
})
router.get('/books/year-integer',async(req,res)=>{
    const result = await problem13()
    res.json(result)
})
router.get('/books/exclude-genres',async(req,res)=>{
    const result = await problem14()
    res.json(result)
})
router.get('/books/before-year',async(req,res)=>{
    const result = await problem15(req.query.year)
    res.json(result)
})
router.get('/books/aggregate2',async(req,res)=>{
    const result = await problem17()
    res.json(result)
})
router.get('/books/aggregate3',async(req,res)=>{
    const result = await problem18()
    res.json(result)
})
router.get('/books/aggregate4',async(req,res)=>{
    const result = await problem19()
    res.json(result)
})



export default router