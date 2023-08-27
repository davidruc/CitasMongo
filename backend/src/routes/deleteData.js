import { Router } from "express";
import * as controller from "../controllers/deleteDataControllers.js";
import passportHelper from "../helpers/passportHelper.js";
import routesVersioning  from 'express-routes-versioning';
const deleteInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.delete("/acudiente", version({ 
            "^1.0.0": controller.deleteAcudienteController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/cita", version({ 
            "^1.0.0": controller.deleteCitaController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/consultorio", version({ 
            "^1.0.0": controller.deleteConsultorioController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/especialidad", version({ 
            "^1.0.0": controller.deleteEspecialidadController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/estadoCita", version({ 
            "^1.0.0": controller.deleteEstadoCitaController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/genero", version({ 
            "^1.0.0": controller.deleteGeneroController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/medico", version({ 
            "^1.0.0": controller.deleteMedicoController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/tipoDocumento", version({ 
            "^1.0.0": controller.deleteTipoDocController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.delete("/usuario", version({ 
            "^1.0.0": controller.deleteUsuarioController,
            "2.0.0": controller.NotAccessAllowed
        }));
    return router;
}

export default deleteInitRoute;