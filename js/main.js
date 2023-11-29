


/* What if...? versión Chainsaw Man */

function introduccion () {

    console.log("Denji es un niño que está de luto en la lápida de su padre sin ánimos de seguir luchando; no tiene techo, comida ni nadie que lo cuide. En medio de su lamento, un demonio de forma pequeña y aparaciencia tierna pareció reaccionar con hostilidad hacia él, pero rápidamente cayó al suelo, incapaz de soportar más sus heridas")
}

introduccion();


let primerPersonaje = "denji";


let decision = prompt ("¿Quieres que denji ayude a pochita? yes or no");
let decisionBuena = "yes";
let decisionMala= "no";


switch (decision) {

    case "yes":
        console.log( "Denji ayuda a Pochita y se hacen amigos");
        document.write("<div class='card'><img src='./../assets/pochita-comiendo.png' /></div>"
        );
        document.write("<div class='card'><img src='./../assets/denji-amigo-pochita.png' /></div>"
        );
        break;
    


        case "no":
            console.log( "Denji no ayuda a Pochita y ella mata a Denji");
            document.write("<div class='card'><img src='./../assets/pochita-se-enoja.jpg' /></div>"
            );
            document.write("<div class='card'><img src='./../assets/muere-denji2.png' /></div>"
            );

            break;

}



if (decision == decisionBuena) {

    console.log( "Varios años después de deambular juntos, a Denji le llega una oferta de trabajo un tanto sospechosa, pero que de todas manera acepta sin dudarlo. Lo que nunca pensó era que esa oferta era una trampa tendida por la mafia quienes buscaban cobrar la deuda que el padre de Denji había dejado en su pasado.");

    console.log("De esta manera, Denji queda atrapado en un callejón oscuro y terribles criaturas empiezan a llegar para devorarlo");
    document.write("<div class='card'><img src='./../assets/trampa.png' /></div>"
    );
    document.write("<div class='card'><img src='./../assets/denji-apuñalado.png' /></div>"
    );
    document.write("<div class='ganador'><img src='./../assets/zombies.jpg' /></div>"
    );
} 
else {(primerPersonaje != decisionBuena)

    console.log("Tras matar a Denji, Pochita se elimentó de su sangre para recuperar su energía hasta llegar a convertirse en uno de los demonios más fuertes en caminar por la Tierra. Ahora, le quedaba un único objetivo: conseguir un humano para generar un contrato y conseguir la vida eterna.");
    document.write("<div class='card2'><img src='./../assets/pochita-power.jpg' /></div>"
    );
    document.write("<div class='card2'><img src='./../assets/pochita-fuerza.jpg' /></div>"
    );
}


let decision2 = prompt("¿Quieres que Pochita salve a Denji? Yes or No");
let opcion1= "yes";
let opcion2= "no";


switch (decision2) {

    case "yes":
    console.log( "Denji estaba muriendo, pero Pochita decide hacer un contrato con él fusionando sus dos cuerpos y de esta manera salvarle la vida"
    );
    document.write("<div class='ganador2'><img src='./../assets/fusion-pichita.jpg' /></div>"
    );
    document.write("<div class='card3'><img src='./../assets/matando-zombies.jpg' /></div>"
    );
    document.write("<div class='card3'><img src='./../assets/fusion.jpg' /></div>"
    );
    break;


    case "no":
        console.log ("Los zombies matan a Denji");
        document.write("<div class='ganador3'><img src='./../assets/muere-denji.jpg' /></div>"
        );
        break;


        
}

let energiaPochita= 100;
let energiaZombies = 100;

const MIN_POWER = 10;
const MAX_POWER = 30;
let round = 0;
let num = 0;

if (decision2 == opcion1) {

    console.log("Denji se convierte en el Demonio de la Motosierra y comienza a pelear contra los zombies");
    while (energiaPochita > 0 && energiaZombies > 0) {
        //round++;
        round += 1;
        let golpePochita = Math.ceil(
          Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
        );
        let golpeZombies = Math.ceil(
          Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
        );
        

        console.log("--------------Round " + round + "-----------------------");
        if (golpePochita === golpeZombies) {
            console.log("siga siga");
        } else if (golpePochita > golpeZombies) {
            console.log("Pochita ataca con una fuerza de " + golpePochita);
            document.write(
            "<div class='card4'><img src='./../assets/pochi-win.jpg' /></div>"
            );
            energiaZombies -= golpePochita;
            if (energiaZombies < 0) {
            energiaZombies = 0;
            }
            console.log("la energia de Zombies baja a " + energiaZombies);
        } else {
            console.log("Zombies ataca con una fuerza de " + golpeZombies);
            document.write(
            "<div class='card5'><img src='./../assets/zombies-power2.png' /></div>"
            );
            
            energiaPochita -= golpeZombies;
            if (energiaPochita < 0) {
            energiaPochita = 0;
            }
            console.log("la energia de Pochita baja a " + energiaPochita);
        }
        }
        }

        console.log("--------GANADOR------------");

if (energiaZombies > 0) {
    console.log("Ganaron los Zombies");
        document.write(
    "<div class'ganador4'><img src='./../assets/zombies-wins.jpg' /></div>"
    );
} else {
    console.log("Gano Pochita");
    document.write(
    "<div class'ganador5'><img src='./../assets/pochita-ganando.jpg' /></div>"
    );
}   
    



