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
export class Acudiente {
    constructor(data) {
        Object.assign(this, data);
        this.acu_nombreCompleto = "Pepito perez El raton";
        this.acu_telefono = 312094032054;
        this.acu_direccion = "cra 22";
    }
}
__decorate([
    Expose({ name: 'nombre_acudiente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_acudiente" del Acudiente es obligatorio` }; } }),
    __metadata("design:type", String)
], Acudiente.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "telefono" del Acudiente es obligatorio` }; } }),
    __metadata("design:type", Number)
], Acudiente.prototype, "acu_telefono", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "direccion" del Acudiente es obligatorio` }; } }),
    __metadata("design:type", String)
], Acudiente.prototype, "acu_direccion", void 0);
