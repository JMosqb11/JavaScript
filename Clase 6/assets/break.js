//en este ejemplo break rompe el ciclo

console.warn('Break')

for (let index = 0; index < 5; index++){

    if(index == 2){
        console.log(index)
        break
    }

    console.log(index)
};

console.warn('continue')

for (let index = 0; index < 5; index++){

    if(index == 1){
        console.log(index)
        continue
    }

    console.log(index)

};