const tecnica = ['diseño Multimedia','diseño Grafico','diseño Web','diseño De Interiores']

let ul = document.querySelector('ul')

let skillsContact="";

for(let i = 0; i < tecnica.length; i++){
    skillsContact = skillsContact + `<li>${tecnica[i].toUpperCase()}</li>`;
}

ul.innerHTML = skillsContact

