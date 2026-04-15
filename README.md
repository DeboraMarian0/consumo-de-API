# Consulta de Feriados Nacionais

Este projeto foi desenvolvido para a disciplina de **Desenvolvimento Web II**. O objetivo principal é aplicar conceitos de **consumo de APIs RESTful**, manipulação assíncrona de dados com JavaScript e estruturação de layouts responsivos.

A aplicação permite que o usuário consulte todos os feriados nacionais brasileiros de um ano específico (entre 1900 e 2199), exibindo os resultados de forma dinâmica.


---

## Tecnologias e Ferramentas

* **HTML5**: Estruturação semântica da página.
* **CSS3**: Estilização personalizada com Flexbox e variáveis.
* **Bootstrap 5**: Utilizado para componentes de interface (inputs e botões) e grid responsivo.
* **JavaScript (ES6+)**: Lógica de programação, manipulação do DOM e requisições HTTP.
* **[Brasil API](https://brasilapi.com.br/)**: API pública utilizada para obter os dados dos feriados em tempo real.

---

## Funcionalidades

* **Consumo de API REST**: Realiza requisições assíncronas utilizando o método `fetch()`.
* **Tratamento de Dados**: Converte datas no formato internacional (`AAAA-MM-DD`) para o padrão brasileiro (`DD/MM`).
* **Validação Client-side**: Impede requisições fora do intervalo de anos suportado pela API (1900 a 2199).

