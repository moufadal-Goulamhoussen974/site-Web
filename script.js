//Changement de la couleure du cercle en "crimson" 
//Avec un survol du cercle avec la souris

const cercle= document.querySelector('.cercle');

//Gestion de l'évènement avec addEvenListener
cercle.addEventListener('mouseenter', function() {
    cercle.style.backgroundColor='crimson';
})



//changement de la couleur du carre avec un click
const carre= document.querySelector('.carre');

carre.addEventListener('click', function() {
    carre.style.backgroundColor='navy';
})

//un coup de log
document.addEventListener("click",function(e){
    //console.log(e);
    console.log(`Position X du click = ${e.clientX} et position du click de la = ${e.clientY}`);//Pour voir les coordonnées de X et Y sur la page

})