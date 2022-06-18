const array = [{
  nome: 'João',
  idade: 20,
  peso: '90kg',
}, {
  nome: 'Maria',
  idade: 25,
  peso: '80kg',
},
{ nome: 'José',
  idade: 30,
  peso: '70kg' }];

const testFIlter = array.every((element) => element.idade > 20);
console.log(testFIlter);

/* filter = retorna um array de elementos que satisfazem a condição true */
/*  find = retorna o primeiro elemento que satisfaz a condição true */
/* some  = retorna true se existir algum elemento que satisfaça a condição */
/* every = retorna true se todos os elementos satisfazem a condição */
/* map = retorna uma cópia do array original */
