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
export class Especialidad {
    constructor(data) {
        Object.assign(this, data);
        this.esp_id = 1;
        this.esp_nombre = "recoger dientes";
    }
}
__decorate([
    Expose({ name: 'especialidad_Id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "especialidad_Id" de la especialidad es obligatorio` }; } }),
    __metadata("design:type", Number)
], Especialidad.prototype, "esp_id", void 0);
__decorate([
    Expose({ name: 'especialidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "especialidad" de la especialidad  es obligatorio` }; } }),
    __metadata("design:type", String)
], Especialidad.prototype, "esp_nombre", void 0);
