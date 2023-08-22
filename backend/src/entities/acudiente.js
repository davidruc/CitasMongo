import { conexion } from "../../db/atlas.js";

class Acudiente{    
    _id;
    acu_codigo;
    acu_nombreCompleto;
    acu_telefono;
    acu_direccion;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("acudiente"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllacudientes(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAcudientesByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "acu_codigo": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postAcudiente(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateAcudiente(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "acu_codigo": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteAcudiente(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"acu_codigo": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Acudiente}