import { collectionGen } from "../../db/atlas.js";
import siguienteId from "../helpers/AutoIncrementId.js";
class TipoDoc{    
    _id;
    tipodoc_id;
    tidodoc_nombre;
    tipodoc_abreviatura;
    constructor(){};
    async connect(){
        try {
            const result = await collectionGen("tipo_documento"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllTipoDocs(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getTipoDocsByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "tipodoc_id": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postTipoDoc(data){
        try {
            const connection = await this.connect();
            const newId = await siguienteId("tipo_documento")
            const result = await connection.insertOne({tipodoc_id: newId,...data});
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateTipoDoc(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "tipodoc_id": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteTipoDoc(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"tipodoc_id": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {TipoDoc}