const btn = document.querySelector(".btn");
const output = document.createElement('output');
output.classList.add('lead');
document.querySelector(".col-6").append(output);

btn.addEventListener('click', function() {
  const userRandom = Math.floor(Math.random() * (6)) + 1;
  const computerRandom = Math.floor(Math.random() * (6)) + 1;

  output.innerHTML = `
    TU : ${userRandom}<br>
    PC : ${computerRandom}
  `;

  if(userRandom > computerRandom){
    document.querySelector('h3').innerHTML = "HAI VINTO !";
  }else if(userRandom < computerRandom){
    document.querySelector('h3').innerHTML = "HAI PERSO :(";
  }else{
    document.querySelector('h3').innerHTML = "PAREGGIO :|";
  }   
});
