import { SignJWT, jwtVerify } from "jose"
import {conexion} from "../../db/atlas.js";
import { ObjectId } from "mongodb";
import config from "../utils/config.js";

const conexionDB = await conexion();
const crearToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({mesaage: "Datos no enviados"});
    const result = await conexionDB.collection('session').findOne(req.body);
    if (JSON.stringify(Object.keys(req.body)) !== JSON.stringify(['user_name', 'clave'])) return res.status(417).send({message: "el valor que debes suministrar para el inicio de la sesión debe ser el user_name y la clave."})
    if (!result) return res.status(401).send({mesaage: "session no encontrada"});
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(config.key));
    req.data = {status: 200, message: jwtConstructor};
    next(); 
}
const validarToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(config.key)
        );
        let res = await conexionDB.collection('session').findOne(
            {
                _id: new ObjectId(jwtData.payload.id), 
                [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        const error = {message: "no tienes acceso a este método"}
        if(!res.methods.includes(req.method)) return error; 
        let {_id, permisos, ...session} = res;
        return session;
    } catch (error) { 
        return false;
    }
}
export {
    crearToken,
    validarToken
}