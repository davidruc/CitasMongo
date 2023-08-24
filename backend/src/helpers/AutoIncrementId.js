import { conexion } from "../../db/atlas.js";

export default async function siguienteId(coleccion){
    let db = await conexion();
    let counter = db.collection("counters");
    const secuencesValues = await counter.findOneAndUpdate(
        { count: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    )
    return secuencesValues.value.sequence_value;
}