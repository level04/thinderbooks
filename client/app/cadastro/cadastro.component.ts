import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LivroService } from '../livro/livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent { 

    livro: LivroComponent = new LivroComponent();
    meuForm: FormGroup;
    service: LivroService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: LivroService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;        
        
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {

            let id = params['id'];
            
            if(id) {

                this.service
                    .buscaPorId(id)
                    .subscribe(
                        livro => this.livro = livro, 
                        erro => console.log(erro)
                    );
            }

        });

        
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            isbn: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.livro);

        this.service
            .cadastra(this.livro)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.livro = new LivroComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
    }

}