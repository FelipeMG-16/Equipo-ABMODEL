function validarpaquetes() {

    let pesoMuneca = 75;
    let pesoPayaso = 112;

    let munecas = document.getElementById("munecas").value; 
    let payasos = document.getElementById("payasos").value;

    let totalMuneca = pesoMuneca * munecas
    let totalPayaso = pesoPayaso * payasos

    let suma = totalMuneca + totalPayaso
    var contador = 0;

    if (munecas <=0 || payasos <=0){
        
        alert(`Por favor ingresa una cantidad correcta`)
        
    }

        if(suma > 1000){
            
            alert(`El peso total de las muñecas es de ${totalMuneca} grs y el peso total de los payasos es de ${totalPayaso} grs . El peso total de tu paquete es de ${suma} grs.`)
            
            while(suma > 0){
                
                contador++
                
                suma -= 1000
            }
            
            alert(`Requieres de ${contador} paquetes para enviar tu pedido `)
            
            
        }else{
            alert(`Solo requieres un paquete para enviar tu pedido ya que el peso total es de: ${suma} grs.`)
        }
    }
        
    
