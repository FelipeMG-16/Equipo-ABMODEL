function calcularIMC() { //Declaramos nuestra función

    var alturacm = (document.getElementById('altura').value); //Obtenemos el dato de altura del HTML con el id "altura"
    var alturamts = alturacm / 100; //Convertimos nuestra altura a un valor decimal, por lo que dividimos entre 100
    var peso = (document.getElementById('peso').value); //Obtenemos el dato del peso del HTML con el id "peso"

    var imc = (peso / (alturamts * alturamts)); //Realizamos nuestra operación, usando la fórmula IMC = peso / altura ^ 2
    var imcfixed = imc.toFixed(2); //Para redondear a dos decimales usamos "to.Fixed (2)", donde el 2 especifica la cantidad de decimales a mostrar


    document.getElementById("resultado").innerHTML = `Tu Índice de Masa Corporal (IMC) es: ${imcfixed}`; //Imprimimos resultado en nuestro HTML

    document.getElementById("informacion").innerHTML = `${informacion}`; //Imprimimos resultado en nuestro HTML



    //Aquí realizamos el proceso para cada uno de los mensajes a mostrar, dependiendo del IMC calculado


    //Error
    if (imcfixed <= 12) {

        informacion = `Error. Ingresa los datos correctamente.`;

    }

    //Bajo Peso
    else if (imcfixed > 12 && imcfixed < 18.5) {

        informacion = `Su IMC es: ${imcfixed} lo que indica que su peso está en la categoría de "Bajo Peso" para adultos de su misma estatura. Para su estatura, su peso ideal variaría entre 63.3 y 85.2 kilogramos.`;
    }

    //Normal
    else if (imcfixed >= 18.5 && imcfixed < 25) {

        informacion = `Su IMC es: ${imcfixed} lo que indica que su peso está en la categoría de "Normal" para adultos de su misma estatura. Para su estatura, su peso ideal variaría entre 63.3 y 85.2 kilogramos.`;

    }
    //Sobrepeso
    else if (imcfixed >= 25 && imcfixed < 30) {


        informacion = `Su IMC es: ${imcfixed} lo que indica que su peso está en la categoría de "Sobrepeso" para adultos de su misma estatura. Para su estatura, su peso ideal variaría entre 63.3 y 85.2 kilogramos.`;
    }

    //Obesidad
    else if (imcfixed >= 30) {

        informacion = `Su IMC es: ${imcfixed} lo que indica que su peso está en la categoría de "Obesidad" para adultos de su misma estatura. Para su estatura, su peso ideal variaría entre 63.3 y 85.2 kilogramos.`;
    }

    //Error
    else {

        informacion = `Error. Ingresa los datos correctamente.`;

    }
}




