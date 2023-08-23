import { collectionGen } from "../../db/atlas.js";

class Especialidad{    
    _id;
    esp_id;
    esp_nombre;
    constructor(){};
    async connect(){
        try {
            const result = await collectionGen("especialidad"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllEspecialidades(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getEspecialidadesByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([{ $match: { "acu_codigo": parseInt(id)}}]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getEspecialidadByName(esp){
        try {
            const connection = await this.connect();
            console.log(esp);
            const result = await connection.aggregate([{$match: {esp_nombre: esp}}]).toArray() ;
            return result
        } catch (error) {
            throw error;
        } 
    }
    async postEspecialidad(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateEspecialidad(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "esp_id": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteEspecialidad(id){
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

export {Especialidad}