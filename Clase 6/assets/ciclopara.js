let numeros = [1,2,3,2,5,2,7,]

// console.log(numeros) //imprime el vector
// console.log(numeros.length)

for (let i = 0; i < numeros.length; i++) {

    console.log(numeros[i]*2)

    if(i % 2 == 0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es un impar`)

    }
}

for (const numero of numeros) {
    console.log(numero)
};

for (const key in numeros) {
    console.log(numero[key])
};

for (const key in numeros) {

    if(key==2){
    console.log(numero[key])
    }

};

numeros.forEach(Element => {
    console.log(element)
});
