var pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];
console.log(`${pets}`); 

var removeVinny = pets.splice(5, 1);
console.log(`${pets}`); 

var removeMarty = pets.splice(3, 1);
console.log(`${pets}`); 

var addNancy = pets.unshift('Nancy');
console.log(`${pets}`); 

var addConnor = pets.push('Connor');
console.log(`${pets}`); 

var findRiley = pets.indexOf('Riley');
console.log(findRiley);

var findCindy = pets.indexOf('Cindy');
console.log(findCindy);

var withMarmaduke = pets.concat('Marmaduke');
console.log(`${withMarmaduke}`); 

// Connor