import { conexion } from "../../db/atlas.js";

class Medico{    
    _id;
    med_nroMatriculaProfesional;
    med_nombreCompleto;
    med_consultorio;
    med_especialidad;
    constructor(){};
    async connect(){
        try {
            const result = await conexion("medico"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllMedicos(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getMedicosByID(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { $match: { "med_nroMatriculaProfesional": parseInt(id)}}]).toArray();
                console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async postMedico(data){
        try {
            const connection = await this.connect();
            const result = await connection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateMedico(id, data){
        try {
            const connection = await this.connect();
            const result = await connection.updateOne(
                { "med_nroMatriculaProfesional": parseInt(id)},
                { $set: data }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    async deleteMedico(id){
        try {
            const connection = await this.connect();
            const result = await connection.deleteOne(
                {"med_nroMatriculaProfesional": parseInt(id)}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Medico}