import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ListagemComponent } from '../listagem/listagem.component';
import { LivroComponent } from '../livro/livro.component';
import { LivroService } from '../livro/livro.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'menu', 
    templateUrl: './menu.component.html'
})
export class MenuComponent { 

    livros: LivroComponent[] = [];
    service: LivroService;
    mensagem: string = '';

    constructor(service: LivroService) {
        
        this.service = service;
        this.service
            .lista()
            .subscribe(lista => {
                var listagem[];
                lista.forEach(atual => {
                    if(atual.url != "" && atual.nome == undefined){
                        listagem.push(atual);
                    }
                });
                this.livros = listagem;
                console.log(this.livros);
            });
       
    }
}
