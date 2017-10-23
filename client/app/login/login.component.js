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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
;
var usuario_service_1 = require("../usuario/usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, fb, route, router) {
        var _this = this;
        this.user = new usuario_component_1.UsuarioComponent();
        this.listaUsuarios = [];
        this.mensagem = '';
        this.route = route;
        this.router = router;
        this.service = service;
        this.service
            .lista()
            .subscribe(function (lista) {
            var listagem = [];
            lista.forEach(function (atual) {
                if (atual.url == undefined && atual.nome != "") {
                    listagem.push(atual);
                }
            });
            _this.listaUsuarios = listagem;
        });
        this.meuForm = fb.group({
            usuario: [''],
            senha: ['']
        });
    }
    LoginComponent.prototype.verificaAutenticacao = function (event) {
        event.preventDefault();
        var email = this.user.email;
        var senha = this.user.senha;
        var lista = this.listaUsuarios;
        var autenticado;
        lista.forEach(function (atual) {
            if (atual.email == email && atual.senha == senha) {
                autenticado = true;
                console.log("true");
            }
        });
        this.router.navigateByUrl("/**");
        console.log(autenticado);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map