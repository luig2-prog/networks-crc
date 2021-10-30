const nDigitG = (g) => { 
    //Número de digitos que tiene G
    return g.length;
}


const calcularCrc = (d, g, r) => {

    let arrayDigitDR = d + g;
    // let subChain = (getD() + getR()).substring(0, nDigitG());
    let subChain = (d + g).substring(0, nDigitG(g));
    let arrayDigitG = g;

    let count = nDigitG(g) - 1;
    let result = "";

    while (count != nDigitDR()) {
        String chain = "";
        System.out.println("otra" + subChain);
        subArray = subChain.toCharArray();
        if (subArray.length == nDigitG()) {
            result = result + "1";
            System.out.println("Mirar si está actualizando" + subArray.length);
            for (int j = 0; j < nDigitG(); j++) {
                if (subArray[j] == arrayDigitG[j]) {
                    chain += "0";
                } else {
                    chain += "1";
                }
                System.out.println("Chain: " + chain);
            }
            

        } else {
            subArray = (subChain + arrayDigitDR[count]).toCharArray();
            System.out.println("arrayDR" + arrayDigitDR[0] + arrayDigitDR[1] + arrayDigitDR[2] + arrayDigitDR[3] + arrayDigitDR[4] + arrayDigitDR[5] + arrayDigitDR[6] + arrayDigitDR[7] + arrayDigitDR[8] + arrayDigitDR[9] + arrayDigitDR[10]);
            System.out.println("este.." + subChain + arrayDigitDR[count]);
            if (subArray.length < nDigitG()) {
                result = result + "0";
            }

            chain = subChain + arrayDigitDR[count];
        }

        System.out.println("Result: " + result);
        int index = chain.indexOf('1');
        System.out.println(index);
        if(index == -1){
            chain = "0";
        }else{
        chain = chain.substring(index);
        }
        System.out.println("hah" + chain);
        subChain = chain;
        System.out.println("subChain: " + subChain);
        subArray = subChain.toCharArray();
        count++;
        System.out.println("Contador" + count);
    }

}