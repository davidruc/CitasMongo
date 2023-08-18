import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Especialidad {
    @Expose({ name: 'especialidad_Id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "especialidad_Id" de la especialidad es obligatorio`}}})
    esp_id: number;
    @Expose({ name: 'especialidad' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "especialidad" de la especialidad  es obligatorio`}}})
    esp_nombre: string;
   
    constructor(data: Partial<Especialidad>){
        Object.assign(this , data);
        this.esp_id = 1;
        this.esp_nombre = "recoger dientes"
    }
}