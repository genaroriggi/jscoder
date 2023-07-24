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

const productos = [
    {
    id: 1, 
    nombre: 'Reduced Oversize',
    precio: 19000, 
    categoria: 'Buzos', 
    stock: 100, 
    imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/a9b9bfcacc990c1b3f1c21cb507f2c396f356e4331750fb2149c40bf04c529f98716.jpeg'
},
{
    id: 2, 
    nombre: 'Bronx',
    precio: 20000, 
    categoria: 'Buzos', 
    stock: 100, 
    imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/dcc7dcfb0dcf3502f864da866a246be25f04a1b036195de0d6ed42b2a095aef38716.jpg'
},
{
    id: 3, 
    nombre: 'Exclusive Oversize',
    precio: 22000, 
    categoria: 'Buzos', 
    stock: 100, 
    imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/f2b80315e36be58d31813356257ac22b45fbcbba2c950e115376ff16ffa441b68716.jpeg'
},
{
    id: 4, 
    nombre: 'Barcode',
    precio: 21000, 
    categoria: 'Buzos', 
    stock: 100, 
    imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/4d78b1c1d7915bf8898da95ef82e2191fdf04cdd72953a20ae88bc0722f391c08716.jpeg'
},
{
    id: 5, 
    nombre: 'NYCity',
    precio: 23000, 
    categoria: 'Buzos', 
    stock: 100, 
    imgUrl:'https://d22fxaf9t8d39k.cloudfront.net/3de0b2313dae992552250122f5a3cd45b9772181722cc458af4c6d719efe238e8716.jpg'
},
]

const listadoProductos = document.getElementById('listadoProductos')
const divRow = document.createElement('div')
divRow.classList.add('row', 'w-100')
for(const product of productos) {
    const divCard = document.createElement('div')
    divCard.classList.add('card', 'col-3',)
    divCard.innerHTML = `
    <div class='card-body'>
       <img src='${product.imgUrl}' class='card-img-top'>
       <h3>Nombre: ${product.nombre}</h3>
       <h3>Categoria: ${product.categoria}</h3>
       <p>Precio: ${product.precio}</p>
       <p>Stock: ${product.stock}</p>
       <div class='card-footer'>
       <button class="add-to-cart-btn btn btn-outline-dark w-100" data-name="${product.nombre}" data-price="${product.precio}">Agregar al Carrito</button>
       </div>
    </div>
    `
    divRow.appendChild(divCard)
}

listadoProductos.appendChild(divRow)

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to the cart!`);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let removedItem = cart.splice(index, 1)[0];

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${removedItem.name} removed from the cart!`);
    showCart();
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        document.getElementById('cart-items').innerHTML = 'No items in the cart.';
        document.getElementById('cart-total').innerText = 'Total: $0'; // Set total to $0 when cart is empty
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });

    let cartList = '<ul>';
    cart.forEach((item, index) => {
        cartList += `<li class='mb-2'>${item.name} - $${item.price} <button class='btn btn-outline-dark' onclick="removeItem(${index})">Clear Item</button></li>`;
    });
    cartList += '</ul>';

    document.getElementById('cart-items').innerHTML = cartList;
    document.getElementById('cart-total').innerText = `Total: $${total}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
    for (let button of addToCartButtons) {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    }
});