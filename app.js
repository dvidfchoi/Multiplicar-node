const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).argv;





// const fs = require('fs');
// const fs = require('express'); Estos paquetes no existen en node y hay que instalarlos 
// const fs = require('./PATH/fs'); Estos son paquetes que nosostros escribimos 


const { crearArchivo } = require('./multiplicar/multiplicar');

console.log(argv);

// let base = 6;
// let data = '';

// for (let i = 1; i < 11; i++) {
//     data += (`${base} * ${i} = ${base*i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log('The file has been saved!');
// });

let argv2 = process.argv;

console.log(argv);
console.log(argv2);
console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(e => console.log(e));


// console.log(process.argv);