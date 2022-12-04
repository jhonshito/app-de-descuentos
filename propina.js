
// capture los botones de descuentos
const botonOne = document.querySelector('.descuentoOne');
const botonTwo = document.querySelector('.descuentoTwo');
const botonThree = document.querySelector('.descuentoThree');
const botonFour = document.querySelector('.descuentoFour');
const botonFive = document.querySelector('.descuentoFive');
const botonSix = document.querySelector('.descuentoSix');

// capturo los input de la cantidad de personas y el monto total
const inputPerson = document.getElementById('inputPerson');
const factura = document.getElementById('factura');


const cantidadPropina = document.querySelector('.amount');
const total = document.querySelector('.total');

const nuevoError = document.querySelector('.nuevoError');

console.log(botonOne, botonTwo, botonThree, botonFour, botonFive, botonSix, inputPerson, factura);
const valor = 10000;

// descuento del 5%
botonOne.addEventListener('click', () => {

    if(inputPerson.value == ''){
       inputPerson.classList.add('error');
       nuevoError.innerHTML = 'Can not be zero'
       return
    }

    let originValor = valor * inputPerson.value;
    factura.innerHTML = originValor;

    let fracion = 5 / 100;

    let montoPropina = originValor * fracion;
    cantidadPropina.innerHTML = `$${montoPropina}`;

    let totalFactura = originValor + montoPropina;
    total.innerHTML = `$${totalFactura}`
})

// descuento del 10%
botonTwo.addEventListener('click', () => {

    if(inputPerson.value == ''){
       inputPerson.classList.add('error');
       nuevoError.innerHTML = 'Can not be zero'
       return
    }

    let originValor = valor * inputPerson.value;
    factura.innerHTML = originValor;

    let fracion = 10 / 100;

    let montoPropina = originValor * fracion;
    cantidadPropina.innerHTML = `$${montoPropina}`;

    let totalFactura = originValor + montoPropina;
    total.innerHTML = `$${totalFactura}`
})

// descuento del 15%
botonThree.addEventListener('click', () => {

    if(inputPerson.value == ''){
       inputPerson.classList.add('error');
       nuevoError.innerHTML = 'Can not be zero'
       return
    }

    let originValor = valor * inputPerson.value;
    factura.innerHTML = originValor;

    let fracion = 15 / 100;

    let montoPropina = originValor * fracion;
    cantidadPropina.innerHTML = `$${montoPropina}`;

    let totalFactura = originValor + montoPropina;
    total.innerHTML = `$${totalFactura}`
})

// descuento del 25%
botonFour.addEventListener('click', () => {

    if(inputPerson.value == ''){
       inputPerson.classList.add('error');
       nuevoError.innerHTML = 'Can not be zero'
       return
    }

    let originValor = valor * inputPerson.value;
    factura.innerHTML = originValor;

    let fracion = 25 / 100;

    let montoPropina = originValor * fracion;
    cantidadPropina.innerHTML = `$${montoPropina}`;

    let totalFactura = originValor + montoPropina;
    total.innerHTML = `$${totalFactura}`
})

// descuento del 50%
botonFive.addEventListener('click', () => {

    if(inputPerson.value == ''){
       inputPerson.classList.add('error');
       nuevoError.innerHTML = 'Can not be zero'
       return
    }

    let originValor = valor * inputPerson.value;
    factura.innerHTML = originValor;

    let fracion = 50 / 100;

    let montoPropina = originValor * fracion;
    cantidadPropina.innerHTML = `$${montoPropina}`;

    let totalFactura = originValor + montoPropina;
    total.innerHTML = `$${totalFactura}`
})