                               // -- Compteur de caracteres mails -- //
                                                      
// On selectionne l'element textarea et l'élement p#compteur 
var textarea = document.querySelector('#message');
var compteur = document.getElementById('compteur');

function count() {
    // la fonction count calcule la longueur de la chaîne de caractère contenue dans le textarea
    var count = 255-textarea.value.length;
    // et affche cette valeur dans la balise p#compteur grâce à innerHTML
    compteur.innerHTML= count;
    
   // si le count descend sous 0 on ajoute du red au compteur et a la bordure du textarea
   if(count<0) {
        compteur.style.color = "red";
        textarea.style.borderColor ="red";
   } 
   else if(count>=0) {
     	compteur.style.color = "black";
        textarea.style.borderColor ="#ced4da";

   }
   else{}
}

// on pose un écouteur d'évènement keyup sur le textarea.
// On déclenche la fonction count quand l'évènement se produit et au chargement de la page
textarea.addEventListener('keyup', count);
count();

                               // -- Verif JS -- //
// Verification que les 3 champs d'envoi de mail sont complétées et ne soient pas trop longs
function init() { 
    var formulaire = document.querySelector('.form');
    var button = document.querySelector('#submitBtn');
    var texte = "";
    //Verification qu'un service soit bien selectionne
    var service = document.querySelector(".service");
    if (service.value == "rien") {
        texte += "Veuillez selectionner le service à contacter. \n";
    } 
    // Verification qu'un sujet de mail est bien été entré et ne dépasse pas 100 cara
    var sujet = document.querySelector('#sujet');
    if (sujet.value.length < 1) {
        texte += "Veuillez entrer le sujet de votre message. \n";
    } else if (sujet.value.length > 100) {
        texte += "Le sujet du message ne doit pas dépasser 100 caractères. \n";
    }
    // Verification du texte du message
    var message = document.querySelector('#message');
    if (message.value.length < 1)  {
        texte += "Veuillez entrer le texte de votre message.";
    } else if (message.value.length > 255) {
        texte += "Le texte de votre message ne doit pas dépasser 255 caractères.";
    }
    
    if (texte == "") {
        formulaire.submit();
    } else {
        alert (texte);       
    }
 
} 

//TODO conserver les donnees bien remplies en cas d'erreur dans le formulaire pour que l'utilisateur n'est pas à tout rentrer