
interface alumnoUtl{
    nombre:string;
    edad:number;
    mostrarDirection:()=>void;
    direccion:{
        calle:string;
        pais:string;
        estado:string;
    };
}
const AlumnoUtl:alumnoUtl={
    nombre:'Jesus',
    edad:23,
    direccion:{
        calle:'15 de agosto',
        pais:'MX',
        estado:'GTO'
        
    },
    mostrarDirection(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}

const Direccion=AlumnoUtl.mostrarDirection();
console.log(Direccion);