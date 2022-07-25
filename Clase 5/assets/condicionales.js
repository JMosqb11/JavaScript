//condicionales con else if

let age = prompt('Ingrese tú edad')

if (age >= 19) {
    //console.log("Eres mayor de edad y puedes tomarte tus polas, pero con responsabilida")
    document.write('Eres mayor de edad')
}else{
    document.write('ups! no puedes ingresar')
}

console.log(age)

//condicionales con switch

let personName="Jhonier";

switch (PersonName){
    case 'Jhonier':
         document.write('Le gusta la cuca')
        break;
    default:
        document.write('Hola putas')
        break;
}



let personGenre = prompt('Ingresa tú genero') 

personGenre == 'F'? document.write('Es una mujer y debe estar en la cocina'):
document.write('es un hombre, y esta muy bien mi campeon')