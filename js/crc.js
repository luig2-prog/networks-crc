
const limpiarCerosIzquierda = arrayLimpiar => {

    for(let i = 0; i < arrayLimpiar.length; i++) {

        if(arrayLimpiar[i] === '1'){
            break;
        } else {
            arrayLimpiar[i] = '';
        }
    }

    return arrayLimpiar.join('').split('');
}

const calcularCrc = (g, d, r) => {

    let numerador = armarNumerador(d, r).split('');
    const denominador = g.split('');
    let sinTerminar = true;
    let result = new Array();
    result.push(1);  
    let numeradorResta = numerador.join('').substring(0, denominador.length).split('');
    while(sinTerminar) {

        for(let i = 0; i < denominador.length; i++) {

            if(numeradorResta[i] === denominador[i]){
                numeradorResta[i] = '0';
            } else {
                numeradorResta[i] = '1';
            }

            numerador[i] = '';

        }

        console.log(numerador);

        numerador = numerador.join('').split('');
        
        console.log(numerador);
        let arrayClean = limpiarCerosIzquierda(numeradorResta);
        numeradorResta = arrayClean;
        if(numerador.length === 0){
            sinTerminar = false;
        } else {
            console.log(numerador);
            numeradorResta.push(numerador[0]);
            numerador[0] = '';
            numerador = numerador.join('').split('');
            console.log(numerador);
            console.log('....'+numeradorResta);
            
            while(numeradorResta.length < denominador.length && numerador.length > 0){
                numeradorResta.push(numerador[0]); 
                numerador[0] = '';
                numerador = numerador.join('').split('');
                result.push(0);
            }


        }
        console.log('desdepure   -  ' + numerador);


        result.push(1);
        
    }

    if(result.join('') === '10000110100'){
        console.log('Siiiiii! Hijueputa!!!!!');
    }
    console.log(result);

}


const gg = '10011';
const dd = '10011110001';
const rr = 4;


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