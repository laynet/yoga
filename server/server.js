require("dotenv").config();
const express = require("express")
const cors = require("cors")
const db = require('./db')
const morgan = require('morgan');
const { Pool } = require("pg");
const app = express()

//middleware

app.use(cors())
app.use(express.json())


app.get("/journals", async (req, res) => {
    try {
    const response = await db.query('SELECT * FROM journals')
    const journalEntries = response.rows
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", response)
    res.status(200).json({
        status: "success",
        //best practice for API returning a list: add a property onto json response listing how many results will be returned
        count: journalEntries.length,
        data: {
            journals: journalEntries
        }
         // res.send(results[0])
    })
} catch(err) {
    console.log(err)
}
   
})


//ROUTES
//get all
app.get("/asanas", async (req, res) => {
    try{
        const results = await db.query('SELECT * FROM asanas')
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                asanas: results.rows,
            }
            
        })   
    } catch (err){
        console.log(err)
    }
    
}) 
//get one
app.get("/asanas/:id", async (req, res) => {
    try{
        const results = await db.query("SELECT * FROM asanas WHERE ID=$1", [req.params.id])
        res.status(200).json({
            status: "success",
            data: {
                asana: results.rows[0]
                
            }
        })
    } catch(err){
        console.log(err)
    }

    
})
//create
app.post("/asanas", async (req, res) => {

    try{
        const results = await db.query("INSERT INTO asanas (english_name, sanskrit_name, notes) values ($1, $2, $3) returning *", 
        [req.body.english_name, req.body.sanskrit_name, req.body.notes])
        console.log(results)
        res.status(201).json({
            status: "success",
            data: {
                asanas: results.rows[0],
                
            }
        })
    } catch(err){
        console.log(err)
    }
    
})
//update
app.put("/asanas/:id", async (req , res) => {

    try{
        const results = await db.query("UPDATE asanas SET english_name=$1, sanskrit_name=$2, notes=$3 WHERE id = $4 returning *", 
        [req.body.english_name, req.body.sanskrit_name, req.body.notes, req.params.id])
        res.status(200).json({
            status: "success",
            data: {
                asanas: results.rows[0],
                
            }
        })
        
    } catch (err){
        console.log(err)
    }
    // console.log(req.params.id)
    // console.log(req.body)
    
})
//delete
app.delete("/asanas/:id", async (req, res) => {
    try{
        const results = await db.query("DELETE FROM asanas where id = $1", [req.params.id])
        res.status(204).json({
            status: "success"
        })
      
    } catch (err){
        console.log(err)
    }
    
})







const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`server is up and listening on port ${port}` )
})