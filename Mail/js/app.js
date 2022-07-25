let mailUtente = prompt("Inserisci e-mail")
const mailConsentite = ["1@yahoo.it", "2@yahoo.it", "3@yahoo.it"]
let mailPresente = false

for( let i = 0; i < mailConsentite.length; i++) {

    if (mailUtente === mailConsentite[i]) {
        mailPresente = true; 
    }    
}

if(mailPresente) {
    console.log("mail trovata")
}
else {
    console.log ("mail non trovata")
}
