let kelvin = 273.15;
let fahrenheit = 32;
let calkelvin = celsius + kelvin
let calfahr =  (celsius * Number (1.8)) + 32

//(0 °C × 9/5) + 32 = 32 °F (Formula celsius a farenheit)
// 0 °C + 273.15 = 273.15 K (Formula celsius a kelvin)


function calcular (){
    let celcius = document.getElementById('grados');
    
    let calcularKelvin = celcius + kelvin;
    let calcularFahrenheit = celcius * fahrenheit;

    let etiqueta = document.getElementById('etiqueta');
    etiqueta.textContent(calcularKelvin);
    etiqueta.textContent(calcularFahrenheit);
}

calcular();

 

 