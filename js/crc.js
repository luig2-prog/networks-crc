const gg = '10011';
const dd = '10011110001';
const rr = 4;

const calcularCrc = (g, d, r) => {

    let numerador = armarNumerador(d, r).split('');
    const denominador = g.split('');
    let terminado = true;
    let result = new Array();
    result.push(1);  
    let numeradorResta = numerador.join('').substring(0, denominador.length).split('');
    console.log(numeradorResta);
    while(terminado) {
        

        for(let i = 0; i < numeradorResta.length; i++) {
            numerador[i] = '';
            if(numeradorResta[i] === denominador[i]){
                numeradorResta[i] = '';
            } else {
                numeradorResta[i] = denominador[i];
            } 

        }

        numerador = numerador.join('').split('');
        numeradorResta = numeradorResta.join('').split('');

        if(numerador.length === 0){
            terminado = false;
        } else {
            numeradorResta.push(numerador[0]);
            numerador[0] = '';
            numerador = numerador.join('').split('');
            while(numeradorResta.length < denominador.length && numerador.length !== 0){
                numeradorResta.push(numerador[0]); 
                numerador[0] = '';
                numerador = numerador.join('').split('');
                result.push(0);
            }


        }
        console.log('cwece' + numeradorResta);
        result.push(1);
        
    }
    console.log(result);

}


const armarNumerador = (primero, segundo) => { 
    let concatenar = new Array();
    for(let i = 0; i < segundo; i++) {
        concatenar[i] =  '0';
    }
    return primero + concatenar.join('');
}
calcularCrc(gg, dd, rr);
const btn_calcular = document.getElementById('btn_calcular');
btn_calcular.addEventListener('click', () => {
    calcularCrc(gg, dd, rr);
});

























































// $(document).ready(() => {
//     $('#btn_calcular').bind('click', calcular);
// })