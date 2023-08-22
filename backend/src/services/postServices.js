import { Acudiente } from "../entities/acudiente.js";

const postAcudiente = async(data) =>{
    const acudiente = new Acudiente();
    return await acudiente.postAcudiente(data);
}

export { postAcudiente }