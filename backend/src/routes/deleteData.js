import { Router } from "express";
import {deleteAcudienteController, deleteCitaController, deleteConsultorioController, deleteEspecialidadController, deleteEstadoCitaController, deleteGeneroController, deleteMedicoController, deleteTipoDocController, deleteUsuarioController} from "../controllers/deleteDataControllers.js";

const deleteInitRoute = ()=>{
    const router = Router();
    router.delete("/acudiente", deleteAcudienteController);
    router.delete("/cita", deleteCitaController);
    router.delete("/consultorio", deleteConsultorioController);
    router.delete("/especialidad", deleteEspecialidadController);
    router.delete("/estadoCita", deleteEstadoCitaController);
    router.delete("/genero", deleteGeneroController);
    router.delete("/medico", deleteMedicoController);
    router.delete("/tipoDocumento", deleteTipoDocController);
    router.delete("/usuario", deleteUsuarioController);
    return router;
}

export default deleteInitRoute;