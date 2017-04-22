# CHART

## Descrição
Este componente é responsável por apresentar as variações de clima dos próximos 7 dias. Atualmente suporta a variação de clima de -5ºC até 41ºC

## Alterações
Ao invés de utilizar uma biblioteca externa como ChartJS, Flot, Morris.js ou Sparkline que estão disponíveis no AdminLTE decidi implementar somente com CSS pelos motivos abaixo:
* Não vi necessidade de adicionar mais uma dependência ao projeto para criar apenas um gráfico.
* Conforme os testes que realizei percebi que o angularJS acaba perdendo performance quando manipulamos o DOM direto pelo JQuery.
* Desenvolver um gráfico somente com CSS e HTML é uma forma interessante de testar meu conhecimento. O mesmo ainda pode ser melhorado, mas já foi um grande aprendizado.

## Complemento
Nenhum complemento.