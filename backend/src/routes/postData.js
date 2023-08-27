import { Router } from "express";
import * as controller from "../controllers/postDataControllers.js";
import * as DTO from "../middleware/verifyData.js"; 
import passportHelper from "../helpers/passportHelper.js";
import routesVersioning  from 'express-routes-versioning';
const postInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.post("/acudiente", DTO.DTOacudienteData, version({ 
        "^1.0.0": controller.postAcudienteController,
         "~2.0.0": controller.postAcudienteController,
        "3.0.0": controller.NotAccessAllowed
        }));
    router.post("/cita", DTO.DTOCitaData, version({ 
        "^1.0.0": controller.postCitaController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/consultorio", DTO.DTOConsultorioData, version({ 
        "^1.0.0": controller.postConsultorioController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/especialidad", DTO.DTOEspecialidadData, version({ 
        "^1.0.0": controller.postEspecialidadController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/estadoCita", DTO.DTOEstadoCitaData, version({ 
        "^1.0.0": controller.postEstadoCitaController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/genero", DTO.DTOGeneroData, version({ 
        "^1.0.0": controller.postGeneroController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/medico", DTO.DTOMedicoData, version({ 
        "^1.0.0": controller.postMedicoController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/tipoDocumento", DTO.DTODocumentoData, version({ 
        "^1.0.0": controller.postTipoDocController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/usuario", DTO.DTOUsuarioData, version({ 
        "^1.0.0": controller.postUsuarioController,
        "2.0.0": controller.NotAccessAllowed
        }));
    router.post("/ingresoUsu", DTO.DTOUsuarioData, version({ 
        "^1.0.0": controller.postAndVerifyAcudienteController,
        "~2.0.0": controller.postAndVerifyAcudienteController,
        "3.0.0": controller.NotAccessAllowed
        }))
    return router;
}

export default postInitRoute;