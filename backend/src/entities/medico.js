import { collectionGen } from "../../db/atlas.js";

class Medico{    
    _id;
    med_nroMatriculaProfesional;
    med_nombreCompleto;
    med_consultorio;
    med_especialidad;
    constructor(){};
    async connect(){
        try {
            const result = await collectionGen("medico"); 
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
    async getPacientesMedicos(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $match: {
                        "med_nroMatriculaProfesional" :parseInt(id)
                    }
                },
                {
                    $lookup: {
                      from: "cita",
                      localField: "med_nroMatriculaProfesional",
                      foreignField: "cit_medico",
                      as: "dataCita"
                    }
                },
                {
                    $lookup: {
                      from: "usuario",
                      localField: "dataCita.cit_datosUsuario",
                      foreignField: "usu_id",
                      pipeline: [
                        {
                            $lookup: {
                              from: "cita",
                              localField: "usu_id",
                              foreignField: "cit_datosUsuario",
                              pipeline: [
                                {
                                    $project: {
                                      _id: 0,
                                      codigo: "$cit_codigo",
                                      fecha: "$cit_fecha",
                                    }
                                }
                              ],
                              as: "cita"
                            }
                        },
                        {$unwind: "$cita"},
                        {
                            $project: {
                              _id: 0,
                              id_usuario: "$usu_id",
                              nombre: "$usu_nombre",
                              apellido: "$usu_primer_apellido_usuar",
                              telefono: "$usu_telefono",
                              cita : "$cita"
                            }
                        }
                      ],
                      as: "usuarios"
                    }
                },
                {
                    $project: {
                        _id: 0,
                        "Matricula_Profesional": "$med_nroMatriculaProfesional",
                        "nombre_Medico": "$med_nombreCompleto",
                        "pacientes": "$usuarios"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getConsultoriosMedicos(){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $lookup: {
                      from: "consultorio",
                      localField: "med_consultorio",
                      foreignField: "cons_codigo",
                      pipeline:[
                        {
                            $project: {
                              _id: 0,
                              "codigo": "$cons_codigo",
                              "consultorio": "$cons_nombre"
                            }
                        }
                      ],
                      as: "consultorio"
                    }
                },
                {
                    $project: {
                      _id: 0,
                      "maticula": "$med_nroMatriculaProfesional",
                      "nombre": "$med_nombreCompleto",
                      "consultorio": "$consultorio"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getNumeroCitasByDia(id ,date){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $match: {
                      "med_nroMatriculaProfesional": parseInt(id)
                    }
                },
                {
                    $lookup: {
                      from: "cita",
                      localField: "med_nroMatriculaProfesional",
                      foreignField: "cit_medico",
                      pipeline: [
                        {
                            $match: {
                              "cit_fecha": `${date}`
                            }
                        }
                      ],
                      as: "citas"
                    }
                },
                {
                    $project: {
                      _id: 0,
                      "matricula_medica": "$med_nroMatriculaProfesional",
                      "nombre_medico": "$med_nombreCompleto",
                      "fecha": `${date}`,
                      "numero_citas": {$size: "$citas"}
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;            
        }
    }
}   

export {Medico}