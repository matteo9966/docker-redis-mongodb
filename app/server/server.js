import express from "express";

const app = express();

//config the middleware here;
app.use(express.json())

function startServer(port){
    app.listen(port,()=>{
        console.log(`Server listening on port ${port}`);
    })
}

export {startServer}