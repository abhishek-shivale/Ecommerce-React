import app from "./app";
import connectDatabase from "./config/database";

connectDatabase()
process.on('uncaughtException',(err) => {
    console.log('uncaughtException'+ err.message)
    process.exit(1)
})

const PORT = process.env.PORT || 8080


const Server = app.listen(PORT,()=>{
    console.log(`Server is Started at https://localhost:${PORT}`);
})

process.on('unhandledRejection',(err) => {
    console.log('unhandledRejection'+ err.message)
    Server.close(()=>{
        process.exit(1)
    })
})