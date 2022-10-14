const mailList = ["blabla@gmail.com", "test@outlook.com", "tonySony@yahoo.it"];

const btn = document.querySelector(".btn");
const userMail = document.querySelector("#inputMail");
const output = document.createElement('output');
document.querySelector(".col-6").append(output);
btn.addEventListener('click', function() {

  if(!(userMail.value === "")){
    let isPresent = false;
    for(let i=0; i<(mailList.length-1); i++){
      if(mailList[i] === userMail.value){
        isPresent = true;
      }
    }

    if(isPresent)
      output.innerHTML = "La tua e-mail è presente nella lista";
    else
      output.innerHTML = "La tua e-mail non c'è :( ";  

    userMail.value = "";
  
  }else
    output.innerHTML = "Devi inserire la mail !";
});

