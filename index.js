 // 1.¿Cómo sabemos que necesitamos un bucle aquí?
// porque hay una acción que se repite mas de una ves y es mas 
// eficiente automatizarlo 

// 2.¿Cuál es el punto de partida del bucle?
// la inicialización, que se ejecuta solamente al comenzar la primera iteración del bucle

// 3.¿Cuándo debe detenerse el bucle?
// cuando se cumpla la condición, porque tiene la expresión para 
// decidir cuándo se ha de detener el bucle

// 4.¿Cómo sabrá parar?
//  por la expresión especificada en la condición,
// en esa parte es que el bucle sabe como parar el procedimiento

// 5.¿Cuál es el incremento para cada iteración del bucle?
// la actualización, que sirve para indicar los cambios que queramos ejecutar en las
// variables cada vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.

// 6.¿Qué variables necesitamos?
//  necesitamos colocar la variable que utilizaremos 
// para llevar la cuenta de las veces que se ejecuta el bucle.
 
 
 function empezar(){
    var velocidad = document.getElementById("velocidad").value; // variable velocidad K/H
    
    if ( velocidad > 9 ){   // la velacidad tiene que ser mas de 9 K/H
        
        counter = 0
        //el loop
        for( var distancia=0;distancia<10;distancia++){ // empieza desde 0 y termina cuando este en 10
            
            if (distancia%3 == 0 && distancia != 0){ // da el caramelo cada 3 kilometros
            
            alert(distancia+" "+"kilometros"+" "+"dar caramelo") // en vez de poner console.log puse
            }                                                   // alert para que aparezca directamente 
                                                                // en la pantalla del navegador 
        }
    }else {
        alert("muy lento necesitas mas velocidad"); // sino es mas de 9 K/H aparecera este mensaje
                                                    // y no se correra el programa
    }
} 
