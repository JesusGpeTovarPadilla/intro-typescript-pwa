class Fgeneral{
    numero1:number;
    numero2:number;
    numero3:number;

    Pedirnumero(){
        let num1=prompt('Dame el valor a');
        let num2=prompt('Dame el valor b')
        let num3=prompt('Dame el valor c')

       this.Calcularpositivo(num1,num2,num3);
       this.Calcularnegativo(num1,num2,num3);
        console.log('El numero de a es: ', +num1);
    }
    Calcularpositivo(a,b,c){
      let raizB=b*b;
      console.log(raizB)
      let mult=4*a*c;
      console.log(mult)
      let resta=raizB-mult;
      console.log(resta);
      let raizA=Math.sqrt(resta);
      console.log(raizA);
      let negativo=-b+raizA;
      console.log(negativo);
      let divisor=2*a;
      let total=negativo/divisor;

      console.log(total);
    }
    Calcularnegativo(a,b,c){
        let raizB=b*b;
        let mult=4*a*c;
        let resta=raizB-mult;
        let raizA=Math.sqrt(resta);
        let negativo=-b-raizA;
        let divisor=2*a;
        let total=negativo/divisor;
  
        console.log(total);
      }
     
} 
let calcular= new Fgeneral();
calcular.Pedirnumero();
