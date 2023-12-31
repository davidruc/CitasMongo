import { collectionGen } from "../../db/atlas.js";
import siguienteId from "../helpers/AutoIncrementId.js";
class EstadoCita{    
    _id;
    estcita_id;
    estcita_nombre;
    constructor(){};
    async connect(){
        try {
            const result = await collectionGen("estado_cita"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllEstadoCitas(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getEstadoCitasByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "estcita_id": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postEstadoCita(data){
        try {
            const connection = await this.connect();
            const newId = await siguienteId("estado_cita")
            const result = await connection.insertOne({estcita_id: newId,...data});
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateEstadoCita(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "estcita_id": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteEstadoCita(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"estcita_id": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {EstadoCita}