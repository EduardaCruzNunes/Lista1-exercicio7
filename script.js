var eleitores = 0;
var votosNulos = 0;
var votosBrancos = 0;
var votosValidos = 0;

eleitores = prompt('Digite o total de eleitores:');
votosNulos = prompt('Digite o total de votos nulos:');
votosBrancos = prompt('Digite o total de votos brancos:');
votosValidos = prompt('Digite o total de votos válidos:');

console.log(eleitores , 'total de eleitores');
console.log(votosNulos , 'total de votos nulos' ,  votosNulos * 100 / eleitores , 'percentual');
console.log(votosBrancos , 'total de votos brancos' , votosBrancos * 100 / eleitores , 'percentual');
console.log(votosValidos , 'total de votos válidos' , votosValidos * 100 / eleitores , 'percentual');