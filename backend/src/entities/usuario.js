import { conexion } from "../../db/atlas.js";

class Usuario{    
    _id;
    usu_id;
    usu_nombre  ;
    usu_segdo_nombre;
    usu_primer_apellido_usuar;
    usu_segdo_apellido_usuar;
    usu_telefono;
    usu_direccion;
    usu_email;
    usu_tipodoc;
    usu_genero;
    usu_acudiente;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("usuario"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllUsuarios(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getUsuariosByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "usu_id": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postUsuario(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateUsuario(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "usu_id": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteUsuario(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"usu_id": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Usuario}