import { postAcudiente, postCita, postConsultorio, postEspecialidad, postEstadoCita, postGenero, postMedico, postTipoDoc, postUsuario } from "../services/postServices.js";

const postAcudienteController = async(req, res, next)=>{
    try {
        const data = req.body;
        const acudiente = await postAcudiente(data);
        res.status(201).send(acudiente)
    } catch (error) {
        res.status(500).send(error);
    }
}
const postCitaController = async(req, res, next)=>{
    try {
        const data = req.body;
        const cita = await postCita(data);
        res.status(201).send(cita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postConsultorioController = async(req, res, next)=>{
    try {
        const data = req.body;
        const consultorio = await postConsultorio(data);
        res.status(201).send(consultorio);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postEspecialidadController = async(req, res, next)=>{
    try {
        const data = req.body;
        const especialidad = await postEspecialidad(data);
        res.status(201).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postEstadoCitaController = async(req, res, next)=>{
    try {
        const data = req.body;
        const estadoCita = await postEstadoCita(data);
        res.status(201).send(estadoCita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postGeneroController = async(req, res, next)=>{
    try {
        const data = req.body;
        const genero = await postGenero(data);
        res.status(201).send(genero);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postMedicoController = async(req, res, next)=>{
    try {
        const data = req.body;
        const medico = await postMedico(data);
        res.status(201).send(medico);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postTipoDocController = async(req, res, next)=>{
    try {
        const data = req.body;
        const tipoDoc = await postTipoDoc(data);
        res.status(201).send(tipoDoc);
    } catch (error) {
        res.status(500).send(error);
    }
}
const postUsuarioController = async(req, res, next)=>{
    try {
        const data = req.body;
        const usuario = await postUsuario(data);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {postAcudienteController, postCitaController, postConsultorioController, postEspecialidadController, postEstadoCitaController, postGeneroController, postMedicoController, postTipoDocController, postUsuarioController};
