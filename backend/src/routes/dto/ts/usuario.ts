import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Usuario {
    @Expose({ name: 'nombre_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_nombre: string;
    @Expose({ name: 'segundo_nombre_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_segdo_nombre: string;
    @Expose({ name: 'apellido_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_primer_apellido_usuar: string;
    @Expose({ name: 'segundo_apellido_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_segdo_apellido_usuar: string;
    @Expose({ name: 'telefono' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_telefono: number;
    @Expose({ name: 'direccion' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "telefono" del Usuario es obligatorio`}}})
    usu_direccion: string;
    @Expose({ name: 'email' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "telefono" del Usuario es obligatorio`}}})
    usu_email: string;
    @Expose({ name: 'tipo_documento' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_tipodoc: number;
    @Expose({ name: 'genero' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_genero: number;
    @Expose({ name: 'acudiente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_usuario" del Usuario es obligatorio`}}})
    usu_acudiente: number;
    
    constructor(data: Partial<Usuario>){
        Object.assign(this , data);
        this.usu_nombre = "Pepito perez El raton";
        this.usu_segdo_nombre = "Pepito perez El raton";
        this.usu_primer_apellido_usuar = "Pepito perez El raton";
        this.usu_segdo_apellido_usuar = "Pepito perez El raton";
        this.usu_telefono = 312094032054;
        this.usu_direccion = "cra 22";
        this.usu_email = "pepito@gmail.com";
        this.usu_tipodoc = 1;
        this.usu_genero = 1;
        this.usu_acudiente = 1;
    }
}