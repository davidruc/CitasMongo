import { Acudiente } from "../entities/acudiente.js";
import { Cita } from "../entities/cita.js";
import { Consultorio } from "../entities/consultorio.js";
import { Especialidad } from "../entities/especialidad.js";
import { EstadoCita } from "../entities/estado_cita.js";
import { Genero } from "../entities/genero.js";
import { Medico } from "../entities/medico.js";
import { TipoDoc } from "../entities/tipo_documento.js";
import { Usuario } from "../entities/usuario.js"

const updateAcudiente = async (id, data)=>{
    const acudiente = new Acudiente();
    return await acudiente.updateAcudiente(id, data)
}
const updateCita = async (id, data)=>{
    const cita = new Cita();
    return await cita.updateCita(id, data)
}

const updateConsultorio = async (id, data)=>{
    const consultorio = new Consultorio();
    return await consultorio.updateConsultorio(id, data)
}

const updateEspecialidad = async (id, data)=>{
    const especialidad = new Especialidad();
    return await especialidad.updateEspecialidad(id, data)
}
const updateEstadoCita = async (id, data)=>{
    const estadiCita = new EstadoCita();
    return await estadiCita.updateEstadoCita(id, data)
}

const updateGenero = async (id, data)=>{
    const genero = new Genero();
    return await genero.updateGenero(id, data)
}

const updateMedico = async (id, data)=>{
    const medico = new Medico();
    return await medico.updateMedico(id, data)
}

const updateTipoDoc = async (id, data)=>{
    const tipoDoc = new TipoDoc();
    return await tipoDoc.updateTipoDoc(id, data)
}

const updateUsuario = async (id, data)=>{
    const usuario = new Usuario();
    return await usuario.updateUsuario(id, data)
}

export { updateAcudiente, updateCita, updateConsultorio, updateEspecialidad, updateEstadoCita, updateGenero, updateMedico, updateTipoDoc, updateUsuario }