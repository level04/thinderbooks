import {Usuario} from './usuario';

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
  expect(usuario).toBeTruthy();
});
