//function handleClick(){
//  alert: ("i got clicked");}

//Alternatively  document.querySelector('button').addEventListener('click', function(){alert: (“I got clicked”);

var drumbuttons = document.querySelectorAll('.drum').length;
//.length counts all drumms. without it only the 1st drum would be counted  
for (var i=0; i<drumbuttons;i++) {

   document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    var buttoninnerHTML= this.innerHTML;
    switch (buttoninnerHTML) {
   
      case "w":
         var audio0 = new Audio('sounds/mixkit.wav');         audio0.play();
         break;
      case "a":
         var audio1 = new Audio('sounds/mixkit.wav');         audio1.play();
        break;
      case "s":
         var audio2 = new Audio('sounds/mixkit.wav');         audio2.play();
         break;
      case "d":
         var audio3 = new Audio('sounds/mixkit.wav');         audio3.play();
            break;
      case "j":
         var audio4 = new Audio('sounds/mixkit.wav');         audio4.play();
            break;
      case "k":
         var audio5 = new Audio('sounds/mixkit.wav');         audio5.play();
            break;
      case "l":
         var audio6 = new Audio('sounds/mixkit.wav');         audio6.play();
            break;
      default: console.log(buttoninnerHTML);
    }
    
   })

//Variable =new Audio(audio location)
// 'new Audio' contrsucts and audio HTML element - HTMLMediaElement
// the HTMLMediaElement has many fucntions, one of them is playing sounds.

   }  
   

    
   
//document.querySelector('.drum')[i].addEventListener('click', handleClick)};
//for loop,  parameter is i instead of listing all 7 buttons.


//  var audio = new Audio('sounds/mixkit.wav');         audio.play();

//document.querySelectorAll('.drum')[i].addEventListener('click', function(){
// console.log(this.style.color='white');})
