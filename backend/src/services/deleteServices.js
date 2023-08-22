import { Acudiente } from "../entities/acudiente.js";

const deleteAcudiente = async(id)=>{
    const acudiente = new Acudiente();
    return await acudiente.deleteAcudiente(id)
}

export {deleteAcudiente}
