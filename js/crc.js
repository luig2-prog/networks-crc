const mensaje_validacion = document.getElementById('mensaje_validacion');
const receptor_crc = document.getElementById('receptor_crc');
const receptor_TX = document.getElementById('receptor_TX');
const receptor_crc_label = document.getElementById('receptor_label_crc');
const receptor_TX_label = document.getElementById('receptor_label_TX');
const btn_calcular = document.getElementById('btn_calcular');
const brn_validar = document.getElementById('enviar_validar');
const CRC = document.getElementById('CRC_input');
const D = document.getElementById('D_input');
const G_input = document.getElementById('G_input');
const R = document.getElementById('R_input');
const TX_input = document.getElementById('TX_input');
const CRC_label = document.getElementById('laber_crc');
const TX_label = document.getElementById('TX_label');
CRC_label.classList.add('active');
TX_label.classList.add('active');


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
            



    //     }

        if(numeradorRestaReceptor[numeradorRestaReceptor.length - 1] !== undefined) {
            // result.push(1);
        }
    }
    crc_fin = numeradorRestaReceptor.join('');
}
}


const obtenerPosicionCero = (arrNumeradorResta,inicioRestaPos) => {
    let posicion = 0;
    for(let i = inicioRestaPos; i < arrNumeradorResta.length; i++) {
        if(arrNumeradorResta[i] == '1') {
            posicion = i;
            break;
        }
    }
    return posicion;
}


const calcularCrc = (G_CALCULAR_CRC, d) => {

    let numerador = armarNumerador(d, G_CALCULAR_CRC.join('')).split('');
    console.log(numerador , G_CALCULAR_CRC)
    let sinTerminar = true;

    let numeradorResta = numerador.join('').substring(0, G_CALCULAR_CRC.length).split('');

    for(let i = 0; i < G_CALCULAR_CRC.length; i++) {
        numerador[i] = '';
    }
    numerador = numerador.join('').split('');
    let crcFinal = new Array();
    let posDominadorResta = 0;
    let inicioRestaPos = G_CALCULAR_CRC.length;
    
    while(sinTerminar) {

        console.log(numeradorResta);

        for(let i = posDominadorResta; i < G_CALCULAR_CRC.length; i++) {

            if(numeradorResta[i] === G_CALCULAR_CRC[i]){
                numeradorResta[i] = '0';
            } else {
                numeradorResta[i] = '1';
            }

        }

        if(numerador.length === 0){
            sinTerminar = false;
            break;
        } else {


            numeradorResta.push(numerador[0]);
            numerador[0] = '';
            numerador = numerador.join('').split('');
            
            while(numeradorResta.length < G_CALCULAR_CRC.length){
                numeradorResta.push(numerador[0]); 
                numerador[0] = '';
                numerador = numerador.join('').split('');
            }

        }

        if(sinTerminar) {
            
        }

        crc_fin = numeradorResta.join('');

        console.log(posDominadorResta);
        posDominadorResta = obtenerPosicionCero(numeradorResta,inicioRestaPos);
        inicioRestaPos = inicioRestaPos + G_CALCULAR_CRC.length;
    }

}




const armarNumerador = (primero, segundo) => { 
    let concatenar = new Array();
    for(let i = 0; i < segundo.length - 1; i++) {
        concatenar[i] =  '0';
    }
    return primero + concatenar.join('');
}



btn_calcular.addEventListener('click', () => {

    enviando = false;
    calcularCrc(G_input.value, D.value);

    CRC_label.classList.add('active');
    TX_label.classList.add('active');

    CRC.value = crc_fin;

    TX_input.value = D.value + crc_fin;
});



brn_validar.addEventListener('click', () => {

    verificarReceptor(TX_input.value, G_input.value);
    let verificar = crc_fin.split('');
    mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está correcto';
    for(let verifica of verificar){
        if(!(verifica == '0' || verifica == undefined)){
            mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está errado';
        }
    }
    receptor_crc_label.classList.add('active');
    receptor_TX_label.classList.add('active');

    receptor_crc.value = crc_fin;
    receptor_TX.value = TX_input.value;

});

D.value = '111111110011001';
G_input.value = '100001';
R.value = '5';


enviando = false;

calcularCrc(G_input.value.split(''), D.value);

CRC_label.classList.add('active');
TX_label.classList.add('active');

CRC.value = crc_fin;

TX_input.value = D.value + crc_fin;
console.log(crc_fin);
if(crc_fin == '11010'){
    console.log('Siii');
}


    verificarReceptor(TX_input.value, G_input.value);
    let verificar = crc_fin.split('');
    mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está correcto';
    for(let verifica of verificar){
        if(!(verifica == '0' || verifica == undefined)){
            mensaje_validacion.innerHTML = 'Mensaje recibido, el mensaje está errado';
        }
    }
    receptor_crc_label.classList.add('active');
    receptor_TX_label.classList.add('active');

    receptor_crc.value = crc_fin;
    receptor_TX.value = TX_input.value;
























































// $(document).ready(() => {
//     $('#btn_calcular').bind('click', calcular);
// })