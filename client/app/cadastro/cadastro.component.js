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
var livro_component_1 = require("../livro/livro.component");
var forms_1 = require("@angular/forms");
var livro_service_1 = require("../livro/livro.service");
var router_1 = require("@angular/router");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        this.livro = new livro_component_1.LivroComponent();
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (livro) { return _this.livro = livro; }, function (erro) { return console.log(erro); });
            }
        });
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            isbn: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.livro);
        this.service
            .cadastra(this.livro)
            .subscribe(function (res) {
            _this.mensagem = res.mensagem;
            _this.livro = new livro_component_1.LivroComponent();
            if (!res.inclusao)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }),
        __metadata("design:paramtypes", [livro_service_1.LivroService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map