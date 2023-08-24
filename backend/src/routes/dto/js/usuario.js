var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class Usuario {
    constructor(data) {
        Object.assign(this, data);
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
__decorate([
    Expose({ name: 'nombre_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'segundo_nombre_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'apellido_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'segundo_apellido_usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "telefono" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "telefono" del Usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'tipo_documento' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'genero' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'acudiente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_usuario" del Usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_acudiente", void 0);
