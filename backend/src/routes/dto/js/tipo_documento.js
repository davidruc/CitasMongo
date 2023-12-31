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
export class Documento {
    constructor(data) {
        Object.assign(this, data);
        this.tidodoc_nombre = "cedula de ciudadania";
        this.tipodoc_abreviatura = "cc";
    }
}
__decorate([
    Expose({ name: 'tipo_documento' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "tipo_documento" del Documento es obligatorio` }; } }),
    __metadata("design:type", String)
], Documento.prototype, "tidodoc_nombre", void 0);
__decorate([
    Expose({ name: 'abreviatura' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "tipodoc_abreviatura" del Documento es obligatorio` }; } }),
    __metadata("design:type", String)
], Documento.prototype, "tipodoc_abreviatura", void 0);
