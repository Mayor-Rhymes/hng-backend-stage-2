import { connect } from "mongoose";

export const connectDB = async (url: string) => {

    try{

        await connect(url);
        console.log("Connected successfully");


    } catch(err){

        console.log(err);

    }
    
}