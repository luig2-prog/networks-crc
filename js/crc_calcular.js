let crc_fin;
let enviando = false;
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

const verificarReceptor = (TX, G_VERIFICAR) => {
    
    let numerador = TX.split('');

    const denominador = G_VERIFICAR.split('');
    let sinTerminar = true;
    let result_receptor = new Array();
    result_receptor.push(1);

    let numeradorRestaReceptor = numerador.join('').substring(0,denominador.length).split('');
    numerador.join('').substring(0, denominador.length).split('');

    for(let i = 0; i < denominador.length; i++) {
        numerador[i] = '';
    }
    numerador = numerador.join('').split('');

    
    while(sinTerminar) {

        for(let i = 0; i < denominador.length; i++) {

            if(numeradorRestaReceptor[i] === denominador[i]){
                numeradorRestaReceptor[i] = '0';
            } else {
                numeradorRestaReceptor[i] = '1';
            }

        }


        let arrayClean = limpiarCerosIzquierda(numeradorRestaReceptor);
        numeradorRestaReceptor = arrayClean;
        if(numerador.length === 0){
            sinTerminar = false;
            break;
        } else {
            if(numeradorRestaReceptor.length < denominador.length){
                numeradorRestaReceptor.push(numerador[0]);
                numerador[0] = '';
                numerador = numerador.join('').split('');

                while(numeradorRestaReceptor.length < denominador.length){
                    numeradorRestaReceptor.push(numerador[0]); 
                    numerador[0] = '';
                    numerador = numerador.join('').split('');
                    // result.push(0);
                }

            }

    }

    crc_fin = numeradorRestaReceptor.join('');
}
}


const calcularCrc = (g, d, r) => {
    let numerador = armarNumerador(d, r).split('');
    const denominador = g.split('');
    let sinTerminar = true;
    let result = new Array();
    result.push(1);

    let numeradorResta = numerador.join('').substring(0, denominador.length).split('');

    for(let i = 0; i < denominador.length; i++) {
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

        crc_fin = numeradorResta.join('');

    }
 
}




const armarNumerador = (primero, segundo) => { 
    let concatenar = new Array();
    for(let i = 0; i < segundo; i++) {
        concatenar[i] =  '0';
    }
    return primero + concatenar.join('');
}

const btn_calcular = document.getElementById('btn_calcular');
const brn_validar = document.getElementById('enviar_validar');
const CRC = document.getElementById('CRC_input');
const D = document.getElementById('D_input');
const G = document.getElementById('G_input');
const R = document.getElementById('R_input');
const TX_input = document.getElementById('TX_input');
const CRC_label = document.getElementById('laber_crc');
const TX_label = document.getElementById('TX_label');

btn_calcular.addEventListener('click', () => {

    enviando = false;
    calcularCrc(G.value, D.value, G.value.split('').length);


    CRC.value = crc_fin;

    TX_input.value = D.value + crc_fin;
});

const mensaje_validacion = document.getElementById('mensaje_validacion');
const receptor_crc = document.getElementById('receptor_crc');
const receptor_TX = document.getElementById('receptor_TX');
const receptor_crc_label = document.getElementById('receptor_label_crc');
const receptor_TX_label = document.getElementById('receptor_label_TX');

brn_validar.addEventListener('click', () => {

    verificarReceptor(TX_input.value, G.value);
    let verificar = crc_fin.split('');
    mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está correcto';
    for(let verifica of verificar){
        if(!(verifica == '0' || verifica == undefined)){
            mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está errado';
        }
    }


    receptor_crc.value = crc_fin;
    // receptor_TX.value = TX_input.value;

});






























































// $(document).ready(() => {
//     $('#btn_calcular').bind('click', calcular);
// })