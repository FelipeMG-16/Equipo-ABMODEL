const operacion = () => { //Creamos una función llamada "operación"

    //Con "getElementById" devolvemos el valor que tiene el id como atributo con el valor especificado. Es uno
    //de los métodos más comunes en el DOM de HTML y se utliza para cuando se desea manipular u obtener
    //información a partir de un elemento en el documento, en este caso el id "dato"


    let n = (document.getElementById('dato').value); //Declaramos una variable "n", que será ingresada por el usuario
    
    //La formula que utlizaremos para calcular la suma es: n(n+1)/2

    //Realizamos nuestras operaciones apoyándonos de "number", que es un tipo de objeto primitivo que nos permitirá
    //manipular valores numéricos y asi poder realizar operaciones aritméticas. Es importante recordar que para
    //realizarlas, respetaremos las leyes de los signos, en este caso nos apoyamos con los paréntesis para hacerlo.
    
    
    let resultado = ((Number(n)) * (Number(n) + Number(1)) / Number(2))


    //Con "innerHTML", insertamos contenido a nuestro HTM, para eso nos apoyamos del id, en este caso "resultado"
    //En el HTML, existe un "H1" con el id "resultado", ahí aparecerá el resultado.

   
    document.getElementById("resultado").innerHTML = `La suma de los números desde 1 al ${n} es: ${resultado}`;

    //Aquí craemos un if con el objetivo de validar si "n" es un número positivo, de no ser así, se mostrará
    //un mensaje que solicite un número positivo.


    if (n < 0) { 
        document.getElementById("resultado").innerHTML = `El número ${n} no es un número positivo. Ingresa un número positivo por favor.`;
}

}

