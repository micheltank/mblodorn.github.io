# Documentação

## Estrutura

### components
Pasta contendo os componentes "burros", responsáveis apenas por apresentar informações em tela. Estes componentes são caracterizados por sua baixa complexidade e alta aptidão para serem reutilizados:
* [beach](app/components/beach)
* [chart](app/components/chart)
* [cloud](app/components/cloud)
* [forecast](app/components/forecast)

### style
Pasta contendo os estilos genéricos do aplicativo.

### vendor
Pasta contendo as bibliotecas utilizadas no projeto. Observação: Não vi necessidade de importar todos os scripts e CSS do AdminLTE, então importei no projeto apenas os itens necessários.
* [angular](https://www.angularjs.org) - Framework utilizado para manipulação do DOM e lógica do aplicativo.
* [bootstrap](https://www.getbootstrap.com) - É uma dependência do AdminLTE, utilizei para o sistema de grid do aplicativo.
* [jquery](https://jquery.com/) - É uma dependência do angular.
* states - É apenas uma variável com as informações dos estados e cidades, visto que não encontrei na documentação da API uma forma de buscar as cidades através do estado.

### views
Pasta contendo os componentes mais robustos, que possuem lógica e uma complexidade maior:
* [weather](app/views/weather)

## Considerações

### Requisitos

* Previsão do tempo para os próximos dias:
A funcionalidade existe, porém o campo de seleção de cidade é um select ao invés de input por causa da experiência do usuário em mobile. Os valores dos estados e cidade vem do script state pois a API sugerida não fornece uma forma de pesquisa de cidades por estado. Separei os campos de pesquisa da previsão do tempo pois fica visualmente mais agradável.
* Temperatura máxima e minima do período:
A funcionalidade existe e adicionei uma validação que avalia se o tempo está chuvoso ou não (a informação vem da API), essa informação também é avaliada para definir se é recomendável ou não ir á praia.
* Gráfico de variação da temperatura:
A funcionalidade existe, e ao invés de utilizar uma biblioteca externa de gráficos decidi criar manualmente o gráfico, a abordagem completa está na documentação do componente chart.

 


