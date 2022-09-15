

interface Alumno{
    matricula:number;
    nombre:string;
    email:number|string;
}
//objeto en ts
 const alumno:Alumno={
    nombre:'Juan',
    matricula:1234,
    email:'jesus@gmail.com'

 }

 //areglos
 let mascotas=['Perro','Gato','Perico','Tortuga'];

 mascotas[1]='shshs';
 mascotas.push('nuevo');

 let tem:(number | string | boolean)[]=[]
 tem.push('Nombre');
 tem.push(234);

 console.log(mascotas);
 console.table(alumno);