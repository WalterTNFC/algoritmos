<div>
<img align="center" alt="Header" src="https://media.istockphoto.com/id/1173371471/pt/vetorial/algorithms-word-concepts-banner.jpg?s=1024x1024&w=is&k=20&c=UVgkGnHv0j_pYiGjufb44SbfoSQqMc5iqPtuH164haI="/>
</div>

-----

<h1 align="center">CodeSignal Challenges Repository</h1>
<p>Este repositório tem como objetivo armazenar as resoluções dos desafios do CodeSignal, tanto para fins pessoais quanto para disponibilização e contribuição com a comunidade de desenvolvedores.</p>
<p>Aqui você encontrará soluções para os desafios propostos no CodeSignal, escritas nas linguagens de programação que eu tenho mais familiaridade. Sinta-se livre para contribuir com suas próprias soluções ou sugestões de melhoria para as minhas.</p>
<p>Espero que este repositório possa ser útil para aqueles que procuram soluções para os desafios do CodeSignal, bem como para aqueles que buscam inspiração ou novas ideias para solucionar esses desafios.</p>
<h2>Como Contribuir</h2>
<p>Se você deseja contribuir com este repositório, siga os seguintes passos:</p>
<ol>
  <li>Fork este repositório</li>
  <li>Crie uma nova branch com a sua solução</li>
  <li>Commit suas mudanças</li>
  <li>Envie um Pull Request</li>
</ol>
<p>Todas as contribuições serão analisadas e, se aprovadas, serão incorporadas a este repositório.</p>

-----

</div>
<div align="justify">
<h2>Solução para o desafio isPalindrome</h2>
    <p>Fiz três possibilidades de resolução para o desafio isPalindrome, que consiste em verificar se uma palavra é um palíndromo ou não.</p>
    <p>A primeira possibilidade é uma abordagem iterativa, onde se compara elemento por elemento da string, começando pela primeira posição e última, e então até que o tamanho da palavra toda seja percorrido, aumentando a primeira posição de forma crescente e a última de maneira decrescente. Dessa forma, é possível verificar se a palavra é ou não um palíndromo.</p>
    <p>A segunda possibilidade é mais otimizada, pois apenas percorre metade do caminho da string, sem precisar de um contador. Isso é possível devido à propriedade de que, se uma palavra é um palíndromo, então seu primeiro e último caractere, bem como o segundo e penúltimo caractere, e assim por diante, são iguais.</p>
    <p>A terceira e última possibilidade é a mais simples e faz uso das funções `split()`, `join()` e `reverse()` do JavaScript. A função `split()` separa a string em um array de caracteres, o `join()` junta o array de caracteres em uma string, e o `reverse()` inverte a ordem dos caracteres no array. Ao fazer isso, é possível comparar a string original com sua versão invertida para determinar se a palavra é ou não um palíndromo.</p>
</div>

-----
