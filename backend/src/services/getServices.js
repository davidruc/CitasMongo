import { Acudiente } from "../entities/acudiente.js";

const obtenerAllAcudientes = async ()=>{
    const acudientes = new Acudiente();
    return await acudientes.getAllacudientes();
}
const obtenerAcudientesById = async (id)=>{
    const acudiente = new Acudiente();
    return await acudiente.getAcudientesByID(id)
}
export { obtenerAllAcudientes, obtenerAcudientesById }