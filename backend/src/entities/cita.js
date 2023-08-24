import { collectionGen } from "../../db/atlas.js";

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
            const result = await collectionGen("cita"); 
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getAllCitas(){
        try {
            const connection = await this.connect();
            const result = await connection.find({}).sort({cit_fecha: 1}).toArray();
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
    };
    async getCitasGen(gen){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                {
                    $match: {
                      "cit_estadoCita": 4
                    }
                },
                {
                    $lookup: {
                      from: "usuario",
                      localField: "cit_datosUsuario",
                      foreignField: "usu_id",
                      pipeline: [{
                        $lookup: {
                          from: "genero",
                          localField: "usu_genero",
                          foreignField: "gen_id",
                          as: "gender"
                        }
                      },
                      {
                        $project: {
                          _id: 0,
                          "nombre_paciente": "$usu_nombre",
                          "apellido_paciente": "$usu_primer_apellido_usuar",
                          "telefono": "$usu_telefono",
                          "direccion": "$usu_direccion",
                          "email": "$usu_email",
                          "genero": { $arrayElemAt: ["$gender.gen_nombre",0]},
                          "abreviatura": { $arrayElemAt: ["$gender.gen_abreviatura",0]},
                        
                        }
                      }
                    ],
                      as: "usu"
                    }
                },
                {
                    $match: {
                        "usu.abreviatura": `${gen}`
                    }
                },
                {
                    $project: {
                      _id: 0,
                      "codigo_cita": "$cit_codigo",
                      "fecha": "$cit_fecha",
                      "codigo_medico": "$cit_medico",
                      "paciente": "$usu",
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async getCitaByFecha(date){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
            {
                $match: {
                    cit_fecha : `${date}`
                }
            },{
                $project: {
                _id:0,
                "codigo_cita":"$cit_codigo",
                "fecha":"$cit_fecha",
                "matricula_medico":"$cit_medico"
                }
            }
        ]).toArray();
        return result;
        } catch (error) {
            throw error;
        }
    }
    async getCitasPlazos(month){
        try {
            const connection = await this.connect();
            const result = await connection.aggregate([
                { 
                    $match: {
                        cit_estadoCita : 3
                    }
                },
                {
                      $match: {
                        "cit_fecha":{
                            $gte: `2023-${month}-1`,
                            $lte: `2023-${month}-31`
                          }
                      }
                },
                {
                    $lookup: {
                      from: "medico",
                      localField: "cit_medico",
                      foreignField: "med_nroMatriculaProfesional",
                      pipeline: [
                        {
                            $project: {
                              _id: 0,
                              "matricula_medica": "$med_nroMatriculaProfesional",
                              "nombre_medico": "$med_nombreCompleto",
                            }
                        }
                      ],
                      as: "medico_Asignado"
                    }
                },
                {
                    $lookup: {
                      from: "usuario",
                      localField: "cit_datosUsuario",
                      foreignField: "usu_id",
                      pipeline: [
                        {
                            $project: {
                              _id: 0,
                              "id_usuario": "$usu_id",
                              "nombre": "$usu_nombre",
                              "primer_apellido": "$usu_primer_apellido_usuar",
                              "segundo_apellido": "$usu_segdo_apellido_usuar",
                              "telefono_contacto": "$usu_telefono",
                              "direccion": "$usu_direccion",
                              "email": "$usu_email",
                            }
                        }
                      ],
                      as: "paciente"
                    }
                },
                {$unwind: "$medico_Asignado"},
                {$unwind: "$paciente"},
                {
                    $project: {
                      _id: 0,
                      "codigo_cita": "$cit_codigo",
                      "fecha": "$cit_fecha",
                      "estado_cita": "$cit_estadoCita",
                      "medico": "$medico_Asignado",
                      "paciente": "$paciente"
                    }
                }
            ]).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export {Cita}