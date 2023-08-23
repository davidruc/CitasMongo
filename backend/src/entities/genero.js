import { collectionGen } from "../../db/atlas.js";

class Genero{    
    _id;
    gen_id;
    gen_nombre;
    gen_abreviatura;
    constructor(){};
    async connect(){
        try {
            const result = await collectionGen("genero"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllGeneros(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getGenerosByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "gen_id": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postGenero(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateGenero(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "gen_id": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteGenero(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"gen_id": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Genero}