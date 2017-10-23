"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var cadastroUsuario_component_1 = require("./cadastroUsuario/cadastroUsuario.component");
var menu_component_1 = require("./menu/menu.component");
var login_component_1 = require("./login/login.component");
var contaUsuario_component_1 = require("./contaUsuario/contaUsuario.component");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: 'contaUsuario', component: contaUsuario_component_1.ContaUsuarioComponent },
    { path: 'cadastroUsuario', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: 'cadastroUsuario/:id', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: '**', component: menu_component_1.MenuComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map