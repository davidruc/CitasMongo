import { Router } from "express";
import { postAcudienteController } from "../controllers/postDataControllers.js";

const postInitRoute = ()=>{
    const router = Router();
    router.post("/acudiente", postAcudienteController);
    return router;
}

export default postInitRoute;