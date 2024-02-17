import mongoose from "mongoose";

const connectDatabase = () => {
    const MONGOURL = process.env.MONGOURL

        mongoose.connect(MONGOURL,{
            useNewUrlParser: true
        })

        mongoose.connection.on('connected', () => {
            console.log('Database is connected');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Error occurred in database', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Database is disconnected');
        });
}

export default connectDatabase