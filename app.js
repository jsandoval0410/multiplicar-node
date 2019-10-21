// Destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

const argv = require('./config/yargs').argv;

let comaqndo = argv._[0];

switch (comaqndo) {
  case 'listar':
      listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
      crearArchivo(argv.base, argv.limite)
      .then (archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
      .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
}

                  
// console.log(argv);

// let argv2 =  process.base;

// console.log(argv.base);
// console.log('limite', argv.limite);


// let parametro =  argv[2];
// let base = parametro.split('=')[1];

  // crearArchivo(base)
  // .then (archivo => console.log(`Archivo creado: ${archivo}`))
  // .catch(err => console.log(err));