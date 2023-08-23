import { conexion } from "../../db/atlas.js";

class Cita{    
    _id;
    cit_codigo;
    cit_fecha;
    cit_estadoCita;
    cit_medico;
    cit_datosUsuario;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("cita"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllCitas(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getCitasByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "cit_codigo": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postCita(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateCita(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "cit_codigo": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteCita(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"cit_codigo": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Cita}