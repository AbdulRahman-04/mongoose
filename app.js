import express from "express"
import config from "config"

const app = express();

let PORT  = config.get("PORT") || 5005


app.get("/home", (req, res)=>{
    try {

        res.status(200).json({message: "HELLO WORLD!"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.listen(PORT, ()=>{
    console.log(`YOUR SERVER IS RUNNING AT ${PORT}`);
    
})