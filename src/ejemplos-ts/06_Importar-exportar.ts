//reutilización

import{calcularIva2,Producto} from './05_desestructuracion_Funciones';

const carrito:Producto[]=[
    {
        desc:'Telefono 1',
        precio:1600,
    },
    {
        desc:'Telefono 2',
        precio:1500,
    },
    {
        desc:'Telefono 3',
        precio:2500,
    },


];
const [total,iva2]=calcularIva2(carrito);
console.log(`Total: ${total}`);
console.log(`Iva: ${iva2}`);