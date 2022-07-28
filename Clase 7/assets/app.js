// operador && (And).

const entrarAlBar=(edad,pago)=>{
    if (edad >= 18 && pago == true){
        console.log('Puede ingresar al bar');
    }else{
        console.log('No Puede ingresar al bar');
    }
};

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);