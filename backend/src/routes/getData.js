import { Router } from "express";
import { obtenerAllAcudientesController, obtenerAcudientesByIdController } from "../controllers/getDataControllers.js";

const getInitRoute = ()=>{
    const router = Router();
    router.get("/acudientes", obtenerAllAcudientesController);
    router.get("/acudiente", obtenerAcudientesByIdController);
    return router;
}

export default getInitRoute