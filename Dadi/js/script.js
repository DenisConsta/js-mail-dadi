const userRandom = Math.floor(Math.random() * (6)) + 1;
const computerRandom = Math.floor(Math.random() * (6)) + 1;

console.log("Tu : " + userRandom);
console.log("PC : " + computerRandom);

if(userRandom > computerRandom){
  console.log("Hai vinto ! ");
}else if(userRandom < computerRandom){
  console.log("Hai perso :( ");
}else{
  console.log("Pareggio :| ");
}
