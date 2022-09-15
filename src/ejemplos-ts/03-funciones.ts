
//funciones fragmento de codigo para aser una tarea especifica

import { setSourceMapRange } from "typescript";

function suma(a,b):void{
    console.log(a+b);

}
const resultado=suma('Jesus' , 'Guadalupe' );
console.log(resultado);

function sumar2(n1:number,n2:number):number{
return n1+n2;
}
console.log(sumar2(6,5));

function multiplicar(n3:number,n4:number, base:number=9):number{
    let tem=n3*base;
return tem;
}
console.log(multiplicar(4,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascota, x:number):void{
  mascota.edad+=x;
  console.log(mascota);
}
 const nuevaMascota:Mascota={
    nombre:'Filurais',
    edad:2,
    mostrarEdad() {
        console.log(' La edad es: ',this.edad);
    },
 }
 calcular(nuevaMascota,3);