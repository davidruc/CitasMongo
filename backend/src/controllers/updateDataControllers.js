import { updateAcudiente, updateCita, updateConsultorio, updateEspecialidad, updateEstadoCita, updateGenero, updateMedico, updateTipoDoc, updateUsuario } from "../services/updateServices.js";

const updateAcudienteController = async(req, res, next)=>{
    try {
        const data = req.body;
        const {id} = req.query;
        const acudiente = await updateAcudiente(id, data);
        res.status(201).send(acudiente);
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateCitaController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const cita = await updateCita(id, data);
        res.status(201).send(cita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateConsultorioController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const consultorio = await updateConsultorio(id, data);
        res.status(201).send(consultorio);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateEspecialidadController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const especialidad = await updateEspecialidad(id, data);
        res.status(201).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateEstadoCitaController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const estadoCita = await updateEstadoCita(id, data);
        res.status(201).send(estadoCita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateGeneroController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const genero = await updateGenero(id, data);
        res.status(201).send(genero);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateMedicoController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const medico = await updateMedico(id, data);
        res.status(201).send(medico);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateTipoDocController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const tipoDoc = await updateTipoDoc(id, data);
        res.status(201).send(tipoDoc);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateUsuarioController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const data = req.body;
        const usuario = await updateUsuario(id, data);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {updateAcudienteController, updateCitaController, updateConsultorioController, updateEspecialidadController, updateEstadoCitaController, updateGeneroController, updateMedicoController, updateTipoDocController, updateUsuarioController};
