console.log("Bienvenida a Adivina Adivinador. mi primer juego echo con JS");
console.log("Queres jugar? si/no");
var opcionJugar = process.openStdin();

opcionJugar.addListener('',if (opcionJugar == "si") {
    console.log("ingresa un numero entre el uno y el 10");
    var numUsuario = process.openStdin();

    var numRandom = function random() {
        Math.floor(Math.random() + 10) + 1;
    };
    do {
        if (numRandom == numUsuario) {
            console.log("Felicidades Cosurra, lo adivinaste Bruja!");
        } else if (numRandom > numUsuario) {
            console.log("Te quedaste corta caraverguerr");
        } else {
            console.log("te pasaste");
        }
    } while (numRandom == numUsuario);
} else {
    console.log("ok, anda a freir churros ");
});
