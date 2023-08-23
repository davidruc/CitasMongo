import { conexion } from "../../db/atlas.js";

class Consultorio{    
    _id;
    cons_codigo;
    cons_nombre;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("consultorio"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllConsultorios(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getConsultoriosByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "cons_codigo": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postConsultorio(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateConsultorio(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "cons_codigo": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteConsultorio(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"cons_codigo": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Consultorio}