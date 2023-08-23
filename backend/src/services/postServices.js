import { Acudiente } from "../entities/acudiente.js";
import { Cita } from "../entities/cita.js";
import { Consultorio } from "../entities/consultorio.js";
import { Especialidad } from "../entities/especialidad.js";
import { EstadoCita } from "../entities/estado_cita.js";
import { Genero } from "../entities/genero.js";
import { Medico } from "../entities/medico.js";
import { TipoDoc } from "../entities/tipo_documento.js";
import { Usuario } from "../entities/usuario.js"

const postAcudiente = async(data) =>{
    const acudiente = new Acudiente();
    return await acudiente.postAcudiente(data);
}
const postCita = async (data)=>{
    const cita = new Cita();
    return await cita.postCita(data)
}

const postConsultorio = async (data)=>{
    const consultorio = new Consultorio();
    return await consultorio.postConsultorio(data)
}

const postEspecialidad = async (data)=>{
    const especialidad = new Especialidad();
    return await especialidad.postEspecialidad(data)
}
const postEstadoCita = async (data)=>{
    const estadiCita = new EstadoCita();
    return await estadiCita.postEstadoCita(data)
}

const postGenero = async (data)=>{
    const genero = new Genero();
    return await genero.postGenero(data)
}

const postMedico = async (data)=>{
    const medico = new Medico();
    return await medico.postMedico(data)
}

const postTipoDoc = async (data)=>{
    const tipoDoc = new TipoDoc();
    return await tipoDoc.postTipoDoc(data)
}

const postUsuario = async (data)=>{
    const usuario = new Usuario();
    return await usuario.postUsuario(data)
}
export { postAcudiente, postCita, postConsultorio, postEspecialidad, postEstadoCita, postGenero, postMedico, postTipoDoc, postUsuario }