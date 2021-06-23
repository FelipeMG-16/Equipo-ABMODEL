//Comenzamos declarando nuestra función. Como el proceso se realiza 3 veces (una para cada lista), podemos automatizar el proceso realizando un solo "forEach" pero especificado para cada lista.

function lista(tipo) { //Declaramos nuestra función
    tipo.forEach(function (tipo) { //Utilizamos "forEach" para que se haga un recorrido en cada elemento de nuestro array
        let item = document.createElement('li'); //Se crea una lista en nuestro HTML
        item.textContent = tipo;
        list.appendChild(item); //Se crea un hijo con el valor ítem en la lista
    });
}

//Cuando se de click al botón "animales" se dispara el evento y se muestra la información de la lista de animales

let button = document.querySelector('#animal');
button.addEventListener('click', event => {
    list.textContent = '';
    var animales = ['Lobo', 'Gato', 'Pez', 'Pájaro', 'León', 'Jirafa', 'Elefante', 'Oso', 'Perro', 'Gallina'];['Lobo', 'Perro', 'Gato'];
    lista(animales);

})

//Cuando se de click al botón "computadoras" se dispara el evento y se muestra la información de la lista de animales

let button2 = document.querySelector('#computadoras');
button2.addEventListener('click', event => {
    list.textContent = '';
    var computadoras = ['HP', 'Lenovo', 'Asus', 'Dell', 'Mac', 'Toshiba', 'Compaq', 'Gateway', 'Ghia', 'Panasonic', 'Sony'];
    lista(computadoras);
})

//Cuando se de click al botón "compañeros" se dispara el evento y se muestra la información de la lista de animales

let button3 = document.querySelector('#compañeros');
button3.addEventListener('click', event => {
    list.textContent = '';
    var compañeros = ['Clara', 'Marco', 'Alberto', 'Emmanuel', 'Luis', 'Felipe', 'Tania', 'Humberto', 'Yanni', 'Ana', 'Carlos'];
    lista(compañeros);
})

