let playeroneinput = document.querySelector(".playeroneinput");
let playerone = document.querySelector(".playerone");
let playeronebtn = document.querySelector(".playeronebtn");
let playererr = document.querySelector(".playererr");

let playertwo = document.querySelector(".playertwo");
let playertwobtn = document.querySelector(".playertwobtn");
let playertwoinput = document.querySelector(".playertwoinput");
let chance = document.querySelector(".chance");
let success = document.querySelector(".success");

let playeronenumber;
let count=5;

playeronebtn.addEventListener("click",function(){
   if(playeroneinput.value){
     playererr.innerHTML="";
     if(playeroneinput.value - 20){
       if(playeroneinput.value >=0 && playeroneinput.value <= 10){
        playeronenumber=playeroneinput.value;
        playerone.style.display="none"
        playertwo.style.display="block";
       }else{
        playererr.innerHTML="Number should be less than 10 or greater than 0";
        playererr.style.color="red";
        playererr.style.marginTop="15px";
       }
     }else{
        playererr.innerHTML="Please give a number";
        playererr.style.color="red";
        playererr.style.marginTop="15px";
     }
   }else{
     playererr.innerHTML="Please give a value";
     playererr.style.color="red";
     playererr.style.marginTop="15px";
   }
})


playertwobtn.addEventListener("click",function(){
    if(playertwoinput.value){
      playererr.innerHTML="";
      if(playertwoinput.value - 20){
        if(playertwoinput.value >=0 && playeroneinput.value <= 10){
            count--;
            if(count!=0){
                if(playeronenumber == playertwoinput.value){
                    success.innerHTML="player 2 winner";
                    playertwoinput.style.display="none";
                    playertwobtn.style.display="none";
                    chance.innerHTML="chance" + 0;
                  }else{
                    chance.innerHTML="chance" + count;
                  }
            }else{
              success.innerHTML="player 1 winner";
              playertwoinput.style.display="none";
              playertwobtn.style.display="none";
              chance.innerHTML="chance" + count;
            }
       
        }else{
         playererr.innerHTML="Number should be less than 10 or greater than 0";
         playererr.style.color="red";
         playererr.style.marginTop="15px";
        }
      }else{
         playererr.innerHTML="Please give a number";
         playererr.style.color="red";
         playererr.style.marginTop="15px";
      }
    }else{
      playererr.innerHTML="Please give a value";
      playererr.style.color="red";
      playererr.style.marginTop="15px";
    }
 })


//  let one=document.querySelector(".one")
 let width=document.querySelector(".width")
  
 width.addEventListener("click",function(){
  if(change.className=="one two"){
     change=className="one"
 }else{
  change.className="one two"
 }
 })