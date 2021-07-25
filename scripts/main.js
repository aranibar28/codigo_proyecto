function sumar(a, b){
    return a + b;
}

console.log(sumar(2,3));
console.log(sumar(4,4));
console.log(sumar(5,5));
console.log(sumar(6,6));


document.querySelector('h1')
.onclick = function(){
    //const nombre = window.prompt('Dime tu nombre')
    //this.innerHTML = nombre
    this.style.color = 'blue'
    this.style.fontSize = '50px'
}

document.querySelector('h1')
.onmouseout = function(){
    this.style.color = 'red'
    this.style.fontSize = '40px'
}