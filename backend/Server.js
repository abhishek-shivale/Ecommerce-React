import app from "./app.js";
import connectDatabase from "./config/database.js";

connectDatabase()
process.on('uncaughtException',(err) => {
    console.log('uncaughtException'+ err.info)
     process.exit(1)
})

const PORT = process.env.PORT || 8080


const Server = app.listen(PORT,()=>{
    console.log(`Server is Started at https://localhost:${PORT}/api/v1/`);
})

process.on('unhandledRejection',(err) => {
    console.log('unhandledRejection'+ err)
    Server.close(()=>{
        process.exit(1)
    })
})