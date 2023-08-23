import config from "../src/utils/config.js";
import { MongoClient } from "mongodb";

let dbConnection = null;

export async function conexion(){
    if(dbConnection){
        return dbConnection;
    };
    try {
        const uri = `mongodb+srv://${config.user}:${config.pass}@cluster0.mqhexgk.mongodb.net/${config.db}`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } 
        const cliente = await MongoClient.connect(uri, options);
        dbConnection = cliente.db();
        return dbConnection;
    } catch (error) {
        return {status:500, message: error}
    }
}
export const collectionGen = async (coleccion) => {
    const db = await conexion();
    const newCollection = db.collection(coleccion);
    return newCollection;
}
