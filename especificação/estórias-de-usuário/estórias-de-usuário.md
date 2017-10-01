![](https://avatars0.githubusercontent.com/u/31450944?v=4&s=200)  
# ThinderBooks - Level 4  
## Estórias de Usuário  
### Modelo:  
- US098: **SENDO** _gerente de estoque_ **DESEJO** _consultar um produto_ **PARA** _verificar sua disponibilidade no estoque._  
### Definição:
- US001: **SENDO** usuário **DESEJO** cadastrar um livro meu **PARA** disponibilizá-lo para troca.  
- US002: **SENDO** usuário **DESEJO** demonstrar interesse em um livro de outro usuário **PARA** trocar com um livro meu.  
- US003: **SENDO** usuário **DESEJO** visualizar a biblioteca do usuário que demonstrou interesse em um livro meu **PARA** verificar se há algum livro de meu interesse e concluir a troca.  
- US004: **SENDO** usuário **DESEJO** me cadastrar **PARA** participar da rede social.  
- US005: **SENDO** usuário **DESEJO** decidir entre aceitar ou não uma solicitação de troca de outro usuário **PARA** trocar apenas se for de meu interesse.  
- US006: **SENDO** usuário **DESEJO** escolher quantos livros de minha coleção trocar e por quantos/quais de outro usuário tenho interesse **PARA** poder fazer múltiplas trocas.  
- US007: **SENDO** usuário **DESEJO** mudar o status de um livro de "disponível" para "indisponível" **PARA** quando não quiser trocar um livro de minha coleção.  
- US008: **SENDO** usuário **DESEJO** ter acesso rápido às configurações do aplicativo **PARA** agilizar alterações.  
- US009: **SENDO** usuário **DESEJO** visualizar minha coleção atual (incluindo os livros que recebi de outros usuários) **PARA** ter maior controle da minha biblioteca.  
- US010: **SENDO** usuário **DESEJO** modificar meus dados cadastrais **PARA** mantê-los atualizados.
- US011: **SENDO** usuário **DESEJO** avaliar as trocas realizadas **PARA** ser avisado caso algum usuário tenha histórico ruim (trocas não concluídas).  
- US012: **SENDO** usuário **DESEJO** seguir outros usuários **PARA** ter acesso rápido às suas bibliotecas.  
- US013: **SENDO** usuário **DESEJO** personalizar categorias de livros de meu interesse **PARA** visualizar os livros que desejo no meu feed inicial.  
- US014: **SENDO** usuário _deficiente visual_ **DESEJO** usar um software compatível com as especificações dos leitores de tela **PARA** ter uma boa experiência de uso.  
- US015: **SENDO** usuário **DESEJO** recuperar minha senha por e-mail **PARA** quando esquecê-la.  

### Prioridades  
``` Legenda: 4 - indispensável, 3 - alta prioridade, 2 - prioridade média, 1 - baixa prioridade ```  

COD.      | 4 | 3 | 2 | 1
--------: | :---: | :---: | :---: | :---:
**US001** | ✓ | | | 
**US002** | ✓ | | | 
**US003** | ✓ | | | 
**US004** | ✓ | | | 
**US005** | ✓ | | | 
**US006** | ✓ | | | 
**US007** | | ✓ | | 
**US008** | | ✓ | | 
**US009** | | | ✓ | 
**US010** | | | | ✓
**US011** | | | | ✓
**US012** | | | | ✓
**US013** | | | | ✓
**US014** | | | | ✓
**US015** | | | | ✓

### Rastreabilidade (monodirecional)  
``` Como se lê: US001 depende de US008, US009 e US012 ```   

COD.  | US001 | US002 | US003 | US004 | US005 | US006 | US007 | US008 | US009 | US010 | US012 | US013 | US014 | US015 |
----: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: 
US001 |       |       |       |       |       |       |       | ✓     | ✓     |       | ✓     |       |       |       
US002 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US003 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US004 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US005 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US006 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US007 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US008 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US009 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US010 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US011 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US012 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US013 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US014 |       |       |       |       |       |       |       |       |       |       |       |       |       |       
US015 |       |       |       |       |       |       |       |       |       |       |       |       |       |       

### Atividades
- **ATV001**: criar classes de livros
- **ATV002**: cadastrar usuário
- **ATV003**: implementar CRUD cadastro de livros
- **ATV004**: criar frontend do cadastro
- **ATV005**: criar lista de livros disponiveis
- **ATV006**: demonstrar interesse em um livro
- **ATV007**: criar biblioteca individual de cada usuário
- **ATV008**: notificar usuário sobre a possível troca
- **ATV009**: permitir o acesso do usuário à bilbioteca do outro usuário que 
demonstrou interesse em seu livro
- **ATV010**: visualizar o que se ofereceu e pelo que se quer
- **ATV011**: aceitar a solicitação, confirmar e notificar as partes
- **ATV012**: rejeitar a solicitação, cancelar e notificar as partes
- **ATV013**: reenviar contraproposta
- **ATV014**: ter uma janela específica de trocas (ver especificação no trello)
- **ATV015**: revisão da troca antes da confirmação
- **ATV016**: incluir a troca em uma lista de ofertas pessoais do usuário 
solicitante (CRUD)
- **ATV017**: incluir a troca em uma lista de propostas pessoais do usuário 
solicitado (ver especificação no trello)
- **ATV018**: mudar status do livro (disponivel/indisponivel)
- **ATV019**: padrão de menus sem submenus
- **ATV020**: usar "switches" para ativação e desativação nas configurações
- **ATV021**: seja fácil encontrar as configurações
- **ATV022**: visualizar e filtrar a coleção de livros
- **ATV023**: alterar dados cadastrais (incluindo a senha)
- **ATV024**: seja possível avaliar um outro usuário no final de cada troca
- **ATV025**: consultar a avaliação do usuário antes da troca
- **ATV026**: poder seguir um usuário
- **ATV027**: visualizar os usuários seguidos no perfil
- **ATV028**: visualizar os usuários seguidores no perfil
- **ATV029**: personalizar o feed com base em categorias
- **ATV030**: adicionar e remover categorias personalizadas do feed
- **ATV031**: testar a usabilidade do software para deficientes visuais
- **ATV032**: possuir uma sessão de livros em braile
- **ATV033**: descrever imagens utilizadas no aplicativo (exceto capas de livros)
- **ATV034**: recuperação de senha

### Esforço Estipulado (do maior para o menor)
- **Indispensável**:  
<pre><code>
- Relevantes:
01. ATV005 ................................ 20
02. ATV010 ................................ 20
03. ATV014 ................................ 20
04. ATV016 ................................ 20
05. ATV017 ................................ 20
06. ATV022 ................................ 20
07. ATV013 .............................. 16,5
08. ATV007 ............................. 13,67
09. ATV006 ................................ 13
10. ATV011 ................................ 13
11. ATV012 ................................ 13
12. ATV001 ................................ 12
13. ATV003 .............................. 10,5
14. ATV008 .............................. 8,67
15. ATV002 ................................. 8
16. ATV015 ................................. 8
17. ATV018 ................................. 8
18. ATV004 ................................. 5
19. ATV019 ................................. 5
20. ATV020 ................................. 3
21. ATV009 ............................... 2,5
22. ATV021 ................................. 1
- Baixa Relevância:
23. ATV034 ................................ 14
24. ATV029 ................................ 13
25. ATV030 ................................ 13
26. ATV024 .............................. 10,5
27. ATV023 ................................. 9
28. ATV026 ............................... 6,5
29. ATV025 ............................... 5,5
30. ATV027 ................................. 4
31. ATV028 ................................. 4
32. ATV032 ................................. 2
33. ATV033 ................................. 2
34. ATV031 ............................... ???
</code></pre>

### Correspondência
- **US001**
  - ATV001
  - ATV002
  - ATV003
  - ATV004
- **US002**
- **US003**
- **US004**
- **US005**
- **US006**
- **US007**
- **US008**
- **US009**
- **US010**
- **US011**
- **US012**
- **US013**
- **US014**
- **US015**
