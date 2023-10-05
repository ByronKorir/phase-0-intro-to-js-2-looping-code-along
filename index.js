// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
   const thankYouMessages = [];
   for (let i = 0; i < names.length; i++) {
     thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
   }
   return thankYouMessages;
 }

 function countDown(){
   let j= 10
   while(j>=0){
      console.log(j);
      j--;
   }
   
 }