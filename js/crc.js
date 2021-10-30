const gg = '10011';
const dd = '10011110001';
const rr = 4;

const calcularCrc = (g, d, r) => {

    let numerador = armarNumerador(d, r);
    console.log(numerador);

    if(numerador === '100111100010000'){
        console.log('Sii');
    }

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