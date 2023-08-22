import { Acudiente } from "../entities/acudiente.js";

const updateAcudiente = async (id, data)=>{
    const acudiente = new Acudiente();
    return await acudiente.updateAcudiente(id, data)
}

export {updateAcudiente}