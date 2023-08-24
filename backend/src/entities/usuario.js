import { collectionGen } from "../../db/atlas.js";

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
            const result = await collectionGen("usuario"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllUsuarios(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).sort({usu_nombre: 1}).toArray();
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
    };
    async getCitasPaciente(id){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $match: {
                        usu_id: parseInt(id)
                    }
                },
                {
                    $lookup: {
                      from: "cita",
                      localField: "usu_id",
                      foreignField: "cit_datosUsuario",
                      pipeline:[{
                        $project: {
                          _id: 0,
                          "codigo_cita": "$cit_codigo",
                          "fecha": "$cit_fecha",
                          "id_medico": "$cit_medico",
                          "estado": "cit_estadoCita" 
                        }
                      }],
                      as: "citaData"
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id_usuario: "$usu_id",
                        nombre: "$usu_nombre",
                        apellido: "$usu_primer_apellido_usuar",
                        telefono: "$usu_telefono",
                        consultorías : "$citaData"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    };
    async getConsultoriosCitas(){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $lookup: {
                      from: "cita",
                      localField: "usu_id",
                      foreignField: "cit_datosUsuario",
                      pipeline: [
                        {
                            $lookup: {
                              from: "medico",
                              localField: "cit_medico",
                              foreignField: "med_nroMatriculaProfesional",
                              pipeline: [
                                {
                                    $lookup: {
                                      from: "consultorio",
                                      localField: "med_consultorio",
                                      foreignField: "cons_codigo",
                                      as: "consul"
                                    }
                                }
                              ],
                              as: "medico"
                            }
                        },
                        {
                            $project: {
                              _id: 0,
                              "codigo_cita": "$cit_codigo",
                              "fecha": "$cit_fecha",
                              "codigo_medico": "$cit_medico",
                              "nombre_medico":  { $arrayElemAt: ["$medico.med_nombreCompleto", 0] },
                              "consultorio": { $arrayElemAt: ["$medico.consul.cons_nombre", 0]}
                            }
                        },
                        {$unwind: "$consultorio"}
                      ],
                      as: "citas"
                    }
                },
                {
                    $match: {
                      "citas": { $ne: [] }
                    }
                },
                {
                    $project: {
                      _id: 0,
                      "id_usuario": "$usu_id",
                      "nombre": "$usu_nombre",
                      "apellido": "$usu_primer_apellido_usuar",
                      "telefono": "$usu_telefono",
                      "direccion": "$usu_direccion",
                      "email": "$usu_email",
                      "citas_programadas": "$citas"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Usuario}