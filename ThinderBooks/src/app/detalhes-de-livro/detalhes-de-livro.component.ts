import {Component, Input, OnInit, Sanitizer} from '@angular/core';
import {Livro} from '../livro';
import {DadosService} from '../services/dados.service';
import { toast } from 'angular2-materialize';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes-de-livro',
  templateUrl: './detalhes-de-livro.component.html',
  styleUrls: ['./detalhes-de-livro.component.css']
})
export class DetalhesDeLivroComponent implements OnInit {

  @Input('livro') livro: Livro;
  private resumo: string;
  private isVerMais: boolean;
  private canVerMais: boolean;
  private verMaisText: string;
  private semCapa: boolean;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.semCapa = false;
    this.isVerMais = false;
    this.verMaisText = this.isVerMais ? 'menos' : 'mais';
    this.canVerMais = this.livro.resumo.length > 20;
    this.resumo = this.canVerMais ? this.livro.resumo.substr(0, 20) + '...' : this.livro.resumo;
    this.setCapa();
  }

  toastEmConstrucao() {
    toast('👷 EM CONSTRUÇÃO 🔧 esse método ainda não foi implementado', 5000);
  }

  toastSemCapa() {
    this.semCapa ? toast('🚫 imagem indisponível', 1000) : undefined;
  }

  private sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  setCapa() {
    let capaDefault = './../../../assets/images/default.png';
    let len = this.livro.capa.length;
    let format = this.livro.capa.substr(len - 3, len);
    let acceptedFormats = [ 'png', 'jpg', 'svg' ];
    this.livro.capa = acceptedFormats.find(
      (element) => { return element == format }
    ) != undefined ? this.livro.capa : capaDefault;

    this.semCapa = this.livro.capa == capaDefault;
  }

  verMais() {
    this.isVerMais = !this.isVerMais; 
    this.verMaisText = this.isVerMais ? 'menos' : 'mais';
    this.resumo = this.isVerMais ? this.livro.resumo : this.livro.resumo.substr(0, 20) + '...';
  }

}
