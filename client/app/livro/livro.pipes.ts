import { Pipe, PipeTransform } from '@angular/core';
import { LivroComponent } from './livro.component';
 
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform { 

    transform(livro: LivroComponent[], digitado: string): LivroComponent[] {

        digitado = digitado.toLowerCase();
        return livro.filter( livro => livro.titulo.toLowerCase().includes(digitado));
    }
}