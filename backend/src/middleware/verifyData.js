import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Acudiente } from "../routes/dto/js/acudiente.js"; 
import { Cita } from "../routes/dto/js/cita.js";
import { Consultorio } from "../routes/dto/js/consultorio.js"; 
import { Especialidad } from "../routes/dto/js/especialidad.js";
import { EstadoCita } from "../routes/dto/js/estado_cita.js";
import { Genero } from "../routes/dto/js/genero.js";
import { Medico } from "../routes/dto/js/medico.js";
import { Documento } from "../routes/dto/js/tipo_documento.js";
import { Usuario } from "../routes/dto/js/usuario.js";

const DTOacudienteData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Acudiente, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOCitaData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Cita, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOConsultorioData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Consultorio, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOEspecialidadData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Especialidad, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOEstadoCitaData = (async (req, res, next)=>{
    try {
        let data = plainToClass(EstadoCita, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOGeneroData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Genero, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOMedicoData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Medico, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTODocumentoData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Documento, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})
const DTOUsuarioData = (async (req, res, next)=>{
    try {
        let data = plainToClass(Usuario, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export { DTOacudienteData, DTOCitaData, DTOConsultorioData, DTOEspecialidadData, DTOEstadoCitaData, DTOGeneroData, DTOMedicoData, DTODocumentoData, DTOUsuarioData }