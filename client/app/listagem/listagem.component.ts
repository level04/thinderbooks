import { Component } from '@angular/core';
import { LivroService } from '../livro/livro.service';
import { LivroComponent } from '../livro/livro.component';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

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
            });
       
    }

    remove(livro: LivroComponent, painel: PainelComponent) {
        
        this.service
            .remove(livro)
            .subscribe(
                () => {

                    painel.fadeOut(() => {

                        let novosLivros = this.livros.slice(0);
                        let indice = novosLivros.indexOf(livro);
                        novosLivros.splice(indice, 1);
                        this.livros = novosLivros;
                        this.mensagem = 'Livro removida com sucesso';
                    }); 
                }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover o livro';
                }
            );

    }
 }