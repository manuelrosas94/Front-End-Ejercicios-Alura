console.log(`Trabajando con condiciones `);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
//console.log(ciudadesDisponibles);

const edadComprador = 15;
const estaAcompañado = true;
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompañado) {
    console.log(`El posible vender pasajes`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);
} else{
    console.log(`El comprador menor de edad esta acompañado`);
    console.log(`No es posible ofrecer viajes`);
} 

console.log(`Proceso de embarque: \n \n`);

if(tienePasaje && (edadComprador >= 18 || estaAcompañado)){
    console.log(`Comprador con pasaje. Feliz viaje`);
} else{
    console.log(`Comprador sin pasaje. No es posible hacer el embarque`);
}

/*
console.log(edadComprador >= 18 );
console.log(edadComprador > 18 );
console.log(edadComprador <= 18 );
console.log(edadComprador < 18 );
console.log(edadComprador == 18 );
*/