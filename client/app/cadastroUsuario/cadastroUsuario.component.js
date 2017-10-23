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
var usuario_service_1 = require("../usuario/usuario.service");
var CustomValidator_1 = require("../helper/CustomValidator");
var CadastroUsuarioComponent = /** @class */ (function () {
    function CadastroUsuarioComponent(service, fb, route, router) {
        var _this = this;
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        console.log("sadasda");
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log("sadasda");
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (user) { return _this.usuario = user; }, function (erro) { return console.log(erro); });
            }
        });
        this.meuForm = fb.group({
            nome: ['', forms_1.Validators.required],
            sobrenome: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            dataNascimento: ['', forms_1.Validators.required],
            senha: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            confirmaSenha: ['', forms_1.Validators.required]
        }, {
            validator: CustomValidator_1.CustomValidation.MatchPassword
        });
    }
    CadastroUsuarioComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.usuario);
        this.service
            .cadastra(this.usuario)
            .subscribe(function (res) {
            _this.mensagem = res.mensagem;
            _this.usuario = new usuario_component_1.UsuarioComponent();
            if (!res.inclusao)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    CadastroUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastroUsuario',
            templateUrl: './cadastroUsuario.component.html'
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());
exports.CadastroUsuarioComponent = CadastroUsuarioComponent;
//# sourceMappingURL=cadastroUsuario.component.js.map