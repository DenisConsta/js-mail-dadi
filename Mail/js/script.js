
const mailList = ["blabla@gmail.com", "test@outlook.com", "tonySony@yahoo.it"];

const userMail = prompt("Inserisci la tua e-mail : ");

let isPresent = false;

for(let i=0; i<(userMail.length-1); i++){
  if(mailList[i] === userMail)
    isPresent = true;
}

if(isPresent)
  console.log("La tua e-mail è presente nella lista");
else
  console.log("La tua e-mail non c'è :( ");  
