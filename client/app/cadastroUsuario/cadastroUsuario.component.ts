import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { CustomValidation } from '../helper/CustomValidator';

@Component({
    moduleId: module.id,
    selector: 'cadastroUsuario',
    templateUrl: './cadastroUsuario.component.html'
})
export class CadastroUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    meuForm: FormGroup;
    service: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: UsuarioService, fb: FormBuilder, route: ActivatedRoute, router: Router){

        this.service = service;        
        
        this.route = route;
        this.router = router;
console.log("sadasda");
        this.route.params.subscribe(params => {

            let id = params['id'];
            console.log("sadasda");
            if(id) {

                this.service
                    .buscaPorId(id)
                    .subscribe(
                        user => this.usuario = user, 
                        erro => console.log(erro)
                    );
            }

        });

            this.meuForm = fb.group({
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            email: ['',Validators.required],
            dataNascimento: ['', Validators.required],
            senha: ['', Validators.compose(
                    [Validators.required, Validators.minLength(4)])],
            confirmaSenha: ['', Validators.required]
            },  {
                validator: CustomValidation.MatchPassword
                },
             );
    }
    
    
    cadastrar(event) {

        event.preventDefault();

        console.log(this.usuario);

        this.service
            .cadastra(this.usuario)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.usuario = new UsuarioComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
       
    }

}