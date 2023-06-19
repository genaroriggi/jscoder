let entrada = prompt ('Cuantos buzos va a comprar? (Maximo 5) ')
if (entrada >= 1 && entrada < 6) {
    console.log('El usuario ingresó: '+entrada)
} else {
    console.log('El usuario no ha ingresado una cantidad valida')
}

let numero = +entrada

switch (numero) {
    case 1:
        alert('Usted va a comprar 1 buzo')
        break;
    case 2:
        alert('Usted va a comprar 2 buzos')
        break;
    case 3:
        alert('Usted va a comprar 3 buzos')
        break;
    case 4:
        alert('Usted va a comprar 4 buzos')
        break;
    case 5:
        alert('Usted va a comprar 5 buzos')
        break;

    default:
        alert('No ha ingresado una cantidad valida')
        entrada = prompt ('Ingresar una cantidad valida')
        break;
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const calcularPrecio = valorProducto => valorProducto * +entrada
const calcularValorProducto = valor => {
    return valor + calcularPrecio(valor)
}
    
alert(calcularPrecio(4300))