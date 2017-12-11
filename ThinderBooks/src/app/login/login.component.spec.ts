import {LoginComponent} from './login.component';
import {Usuario} from '../usuario';
import {DadosService} from '../services/dados.service';

describe('Login: ', () => {
  it('Inicialização', () => {
    let usuario: DadosService;
    let app = new LoginComponent(usuario);
    expect(app).toBeTruthy();
  });
  it('Modelo de Usuário: ', function () {
    let usuario: Usuario = {
      'nome': 'Otávio',
      'sobrenome': 'Xavier Calaça',
      'email': 'otavio@gmail.com',
      'senha': '1234',
      'foto': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAtgAAAAJDA5MzE2MDg5LTYxOGUtNDMzMi1iZTJhLTQwYTcwZDM5NjJlOQ.jpg',
      'livros': [
      ]
    };
    expect(usuario.nome).toEqual('Otávio');
  });

});
