import { conexion } from "../../db/atlas.js";

class EstadoCita{    
    _id;
    estcita_id;
    estcita_nombre;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("estado_cita"); 
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
            const result = await connection.insertOne(data);
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