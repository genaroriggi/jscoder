function Persona(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const nombre = prompt('Ingresar nombre')
const apellido = prompt('Ingresar apellido')
const edad = prompt('Ingresar edad')
const persona1 = new Persona(nombre, apellido, edad)
console.log(persona1)

let entrada = prompt ('Cuantos buzos va a comprar? (Maximo 5) ')
if (entrada >= 1 && entrada < 6) {
    console.log(nombre + ' ' + apellido +' ingresó: '+entrada)
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

let contador = 0
do{
    console.log(contador)
    contador++
}while(contador <= +entrada)

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const calcularPrecio = valorProducto => valorProducto * +entrada
const calcularValorProducto = valor => {
    return valor + calcularPrecio(valor)
}
alert(calcularPrecio(4300))

const nombreBuzo = prompt('Ingresar nombre del buzo que busca')
const buzos = [
    {nombre: 'Reduced Oversize', precio: 15000},
    {nombre: 'Bronx', precio: 17000},
    {nombre: 'Exclusive Oversize', precio: 22000},
    {nombre: 'Barcode', precio: 22000},
    {nombre: 'NYCity', precio: 16000},
]
let resultado = buzos.find((buzoObject) => buzoObject.nombre === nombreBuzo)
console.log(resultado)

const buzos2 = [
    {nombre: 'Reduced Oversize', precio: 15000},
    {nombre: 'Bronx', precio: 22000},
    {nombre: 'Exclusive Oversize', precio: 22000},
    {nombre: 'Barcode', precio: 22000},
    {nombre: 'NYCity', precio: 16000},
]
let resultado1 = buzos2.filter( (buzo2Object) => buzo2Object.nombre.includes('Oversize'))
console.log(resultado1)