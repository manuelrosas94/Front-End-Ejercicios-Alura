console.log(`Trabajando con condiciones `);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
ciudadesDisponibles.push("Santiago");

const edadComprador = 15;
const estaAcompañado = true;
const tienePasaje = true;
const ciudadDestino = "Quito";
let posicion = 0;
let destinoDisponible = false;
let puedeComprar = false;
console.log(ciudadesDisponibles);

puedeComprar = (edadComprador >=18 || estaAcompañado);

// while (posicion < ciudadesDisponibles.length) {
//     if (ciudadesDisponibles[posicion] == ciudadDestino) {
//         destinoDisponible = true;
//         break;
//     } 
//     posicion++;
// }

//lazo for
for(posicion = 0; posicion < ciudadesDisponibles.length; posicion++){
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    } 
}

if(puedeComprar && destinoDisponible){
    console.log(`Es posible vender el pasaje. La persona puede comprar y el destino esta disponible`);
} else if(puedeComprar){
    console.log(`No es posible vender el pasaje. La persona puede comprar pero el destino no esta disponible`);
}else{
    console.log(`No es posible vender el pasaje`);
}



