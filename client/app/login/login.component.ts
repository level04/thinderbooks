import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';;
import { UsuarioService } from '../usuario/usuario.service';
import { CustomValidation } from '../helper/CustomValidator';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    user: UsuarioComponent = new UsuarioComponent();
    listaUsuarios: UsuarioComponent[] = [];
    meuForm: FormGroup;
    service: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';


    constructor(service: UsuarioService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.route = route;
        this.router = router;
        
        this.service = service;
        this.service
            .lista()
            .subscribe(lista => {
                var listagem[];
                lista.forEach(atual => {
                    if(atual.url == undefined && atual.nome != ""){
                        listagem.push(atual);
                    }
                });
                this.listaUsuarios = listagem;
            });

        this.meuForm = fb.group({
            usuario: [''],
            senha: ['']
        });
    }

    verificaAutenticacao(event){
        event.preventDefault();

        var email = this.user.email;
        var senha = this.user.senha;
        var lista = this.listaUsuarios;
        var autenticado;

        lista.forEach(function(atual){
            if(atual.email == email && atual.senha == senha){
                autenticado = true;
                console.log("true");
            }
        })
        this.router.navigateByUrl("/**");
        console.log(autenticado);
    }
    

}