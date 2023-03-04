const services = document.querySelector(".service")
services.addEventListener('click', function(){
    alert("Voulez-vous voir nos services ?")

})

const services1 = document.querySelector(".service")
services1.addEventListener("contextmenu", function(e){
    if(prompt("Confirmer l'ouverture du menu contextuel par 'ok' ") != "ok")
    e.preventDefault()
     return false
})
const pub = document.querySelector(".publication")
pub.addEventListener('click', function(){
        alert("Voulez-vous voir nos publications ?")
})
const pub1 = document.querySelector(".publication")
pub1.addEventListener("contextmenu", function(e){
    if(prompt("Confirmer l'ouverture du menu contextuel par 'ok' ") != "ok")
    e.preventDefault()
     return false
})
const contact = document.querySelector(".contact")
contact.addEventListener('click', function(){
    alert("Voulez-vous nous Contacter ?")

})
const contact1 =document.querySelector(".contact")
contact1.addEventListener("contextmenu", function(e){
    if(prompt("Confirmer l'ouverture du menu contextuel par 'ok' ") != "ok")
    e.preventDefault()
     return false
})


let dispo = document.getElementById("u");
idspo.addEventListener('mouseover', function()
{this.style.backgroundColor ='orange'});

let liste = document.getElementById("ol")
liste.addEventListener('mouseout', function(){
    this.style.backgroundColor='white'
});
