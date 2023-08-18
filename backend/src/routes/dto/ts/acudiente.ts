import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Acudiente {
    @Expose({ name: 'acudiente_id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "acudiente_id" del Acudiente es obligatorio`}}})
    acu_codigo: number;
    @Expose({ name: 'nombre_acudiente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_acudiente" del Acudiente es obligatorio`}}})
    acu_nombreCompleto: string;
    @Expose({ name: 'telefono' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "telefono" del Acudiente es obligatorio`}}})
    acu_telefono: number;
    @Expose({ name: 'direccion' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "direccion" del Acudiente es obligatorio`}}})
    acu_direccion: string;
    constructor(data: Partial<Acudiente>){
        Object.assign(this , data);
        this.acu_codigo = 1;
        this.acu_nombreCompleto = "Pepito perez El raton";
        this.acu_telefono = 312094032054;
        this.acu_direccion = "cra 22"
    }
}