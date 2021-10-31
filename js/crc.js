
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
    for(let i = 0; i < denominador.length; i++) {

        // if(numeradorResta[i] === denominador[i]){
        //     numeradorResta[i] = '0';
        // } else {
        //     numeradorResta[i] = '1';
        // }

        numerador[i] = '';

    }
    numerador = numerador.join('').split('');
    while(sinTerminar) {

        for(let i = 0; i < denominador.length; i++) {

            if(numeradorResta[i] === denominador[i]){
                numeradorResta[i] = '0';
            } else {
                numeradorResta[i] = '1';
            }

            // numerador[i] = '';

        }


        numerador = numerador.join('').split('');
        
        let arrayClean = limpiarCerosIzquierda(numeradorResta);
        numeradorResta = arrayClean;
        if(numerador.length === 0){
            sinTerminar = false;
            break;
        } else {

            numeradorResta.push(numerador[0]);
            numerador[0] = '';
            numerador = numerador.join('').split('');
            
            while(numeradorResta.length < denominador.length){
                numeradorResta.push(numerador[0]); 
                numerador[0] = '';
                numerador = numerador.join('').split('');
                result.push(0);
            }


        }

        if(numeradorResta[numeradorResta.length - 1] !== undefined) {
            result.push(1);
        }
        
    }

    if(result.join('') === '10001111'){
        console.log('Siiiiii! Hijueputa!!!!!');
    }
    console.log(result);

}


// const gg = '10011';
// const dd = '10011110001';
// const rr = 4;
// const gg = '100001';
// const dd = '111111110011001';
// const rr = 5;
// const gg = '100001';
// const dd = '10000001110011001';
// const rr = 5;
const gg = '1001';
const dd = '10011110';
const rr = 3;


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