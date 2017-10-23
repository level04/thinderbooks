"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_component_1 = require("../usuario/usuario.component");
var usuario_service_1 = require("../usuario/usuario.service");
var livro_service_1 = require("../livro/livro.service");
var ContaUsuarioComponent = /** @class */ (function () {
    function ContaUsuarioComponent(service, userService) {
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.livros = [];
        this.mensagem = '';
    }
    ContaUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contaUsuario',
            templateUrl: './contaUsuario.component.html',
            styleUrls: ['./contaUsuario.component.css']
        }),
        __metadata("design:paramtypes", [livro_service_1.LivroService, usuario_service_1.UsuarioService])
    ], ContaUsuarioComponent);
    return ContaUsuarioComponent;
}());
exports.ContaUsuarioComponent = ContaUsuarioComponent;
//# sourceMappingURL=contaUsuario.component.js.map