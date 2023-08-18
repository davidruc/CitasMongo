import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Consultorio {
    @Expose({ name: 'consultorio_Id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "consultorio_Id" del consultorio es obligatorio`}}})
    cons_codigo: number;
    @Expose({ name: 'nombre_consultorio' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_consultorio" del consultorio  es obligatorio`}}})
    cons_nombre: string;
   
    constructor(data: Partial<Consultorio>){
        Object.assign(this , data);
        this.cons_codigo = 1;
        this.cons_nombre = "el dentrilopo"
    }
}