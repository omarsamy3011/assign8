import * as connection from '../../db/connection.js'

export const problems1=async()=>{
await connection.db.dropDatabase()
const added = await connection.db.createCollection('books',{
    validator: { $jsonSchema: { bsonType: "object", required: ["title"] } 
}})
    if(added){
    return {"ok":1}}
    else {
        return { err :"not added"}
    }}
//p2
export const problem2=async(data)=>{
    try{
const added = await connection.db.collection('authors').insertOne(data)
return added}
catch(err){
    return {err}
}}
//p3
export const problem3=async()=>{
    const added = await connection.db.createCollection('logs',{
        capped:true , size :1000 
    })
    if(added){
    return {"ok":1}}
    else {
        return { err :"not added"}
    }
}
//p4
export const problem4=async()=>{
    const added = await connection.db.collection('books').createIndex({title:1})
    if(added){
        return added
    }
    else{
        return { message :'error happened'}
    }
}
//p5
export const problem5=async(data)=>{
    const added = await connection.db.collection('books').insertOne(data)
    if(added){
        return added
    }
    else{
        return { message :'not added'}
    }
}
//p6
export const problem6=async(data)=>{
    if(data.length>2){
    const added = await connection.db.collection('books').insertMany(data,{ordered:true})
    if(added){
        return added
    }
    else{
        return { message :'not added'}
    }}
    else {
        return { message : 'please insert three records or more'}
    }
}
//p7
export const problem7=async(data)=>{
    const added = await connection.db.collection('logs').insertOne(data)
    if(added){
        return added
    }
    else{
        return { message :'not added'}
    }
}
//p8
export const problem8=async(data)=>{
    const added = await connection.db.collection('books').updateOne({title:"Future"},{
        $set :{year:2022}
    })
    if(added){
        return {"acknowledged":added.acknowledged,"matchedcount":added.matchedCount,"modifiedcount":added.modifiedCount}
    }
    else{
        return { message :'not added'}
    }
}
//p9
export const problem9=async(title)=>{
    const target = await connection.db.collection('books').findOne({title:title})
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p10
export const problem10=async(from,to)=>{
    const target = await connection.db.collection('books').find({year:{$lte:Number(to) , $gte:Number(from)}}).toArray()
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p11
export const problem11=async(genre)=>{
    const target = await connection.db.collection('books').find({genres:{$in:[`${genre}`]}}).toArray()
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p12
export const problem12=async()=>{
    const target = await connection.db.collection('books').find({}).skip(2).limit(3).toArray()
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p13
export const problem13=async()=>{
    const target = await connection.db.collection('books').find({year:{$type:"int"}}).toArray()
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p14
export const problem14=async()=>{
    const target = await connection.db.collection('books').find({genres:{$nin:['Horror','science fiction']}}).toArray()
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}
//p15
export const problem15=async(y)=>{    
    const targeted = await connection.db.collection('books').find({year:{$lt:Number(y)}}).toArray()
    if(targeted.length<0){
        return {message:`no books lessthan ${y}`}
    }
    else{
    const target = await connection.db.collection('books').deleteMany({year:{$lt:Number(y)}})
    if(target){
        return target
    }
    else{
        return { message :'not found'}
    }
}}
//p16
export const problem16=async()=>{    
    const targeted = await connection.db.collection('books').aggregate([
        {$match:{year:{$gt:2000}}},
        {$sort:{year:-1}}
    ]).toArray()
        if(targeted.length>0){
        return targeted
    }
    else{
        return { message :'not found'}
    }
}
//p17
export const problem17=async()=>{    
    const targeted = await connection.db.collection('books').aggregate([
        {$match:{year:{$gt:2000}}},
        { $project:{
            title:1,
            author:1,
            year:1
        }}
    ]).toArray()
        if(targeted.length>0){
        return targeted
    }
    else{
        return { message :'not found'}
    }
}
//p18
export const problem18=async()=>{
    const targeted = await connection.db.collection('books').aggregate([
        {$unwind: "$genres"},
        {$project:{
            title:1,
            genres:1,
            _id:0
        }}
    ]).toArray()
            if(targeted.length>0){
        return targeted
    }
    else{
        return { message :'not found'}
    }
}
//p19
export const problem19=async()=>{
    const targeted = await connection.db.collection('logs').aggregate([
        {$lookup: {
            from : "books",
            localField:"book_id",
            foreignField:"_id",
            as : "info"
        }}
    ]).toArray()
            if(targeted.length>0){
        return targeted
    }
    else{
        return { message :'not found'}
    }
}