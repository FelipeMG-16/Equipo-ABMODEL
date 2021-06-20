function calcularIMC() { //Declaramos nuestra función

    var alturacm = (document.getElementById('altura').value); //Obtenemos el dato de altura del HTML con el id "altura"
    var alturamts = alturacm / 100; //Convertimos nuestra altura a un valor decimal, por lo que dividimos entre 100
    var peso = (document.getElementById('peso').value); //Obtenemos el dato del peso del HTML con el id "peso"

    var imc = (peso / (alturamts * alturamts)); //Realizamos nuestra operación, usando la fórmula IMC = peso / altura ^ 2
    var imcfixed = imc.toFixed(2); //Para redondear a dos decimales usamos "to.Fixed (2)", donde el 2 especifica la cantidad de decimales a mostrar


    document.getElementById("resultado").innerHTML = `Tu Índice de Masa Corporal (IMC) es: ${imcfixed}`; //Imprimirmos resultado en nuestro HTML


}
