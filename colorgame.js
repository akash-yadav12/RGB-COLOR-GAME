var numSquares=6;
var colors=[];
var pickedColor;
var why = document.getElementsByClassName("square");
var colordisplay=document.getElementById("colordisp");
var modeBtn=document.querySelectorAll(".mode");
var resetbtn=document.querySelector("#reset");
var messageDisp=document.querySelector("#message");
var h1=document.querySelector("h1");
init();
function init(){
  //mode button event listeners
  setupModeButton();
  setupSquares();
  reset();
}
  
function setupModeButton(){
  for(var i=0; i<modeBtn.length;i++){
    modeBtn[i].addEventListener("click",function(){
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent=== "Easy" ?numSquares =3 : numSquares=6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i=0; i<why.length;i++){
    why[i].addEventListener("click",function(){
      var clickedColor=this.style.backgroundColor;
      if(clickedColor=== pickedColor){
          messageDisp.textContent="Correct";
          changeColors(clickedColor);
          h1.style.backgroundColor=clickedColor;
          resetbtn.textContent="play again?";
      }  
      else{
         this.style.backgroundColor= "#232323";
         messageDisp.textContent="Try Again";
      }
    });
  }
}
 

function reset(){
  colors=generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor=pickColor();
  //change colorDisp to match picked color
  colordisplay.textContent=pickedColor;
  //change colors of square
  for( var i=0; i<why.length; i++){
    if(colors[i]){
      why[i].style.display="block";
      why[i].style.backgroundColor=colors[i];
    }
    else{
      why[i].style.display="none";
    }
    why[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor= "steelblue";
  messageDisp.textContent="";
  resetbtn.textContent="NEW COLORS";
}

resetbtn.addEventListener("click",function(){
  reset();
 
});



function changeColors(color){
    for(var i=0; i<colors.length;i++){
        why[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
 //make an array
var arr=[];
//add num random colors to array
  for(var i = 0; i < num; i++){
    arr[i]=randomColor();
  }
  //return that array
  return arr;
}


function randomColor(){

    //pick 0-255 for red
    var r=Math.floor(Math.random() *256);
    //pick 0-255 for green
    var g=Math.floor(Math.random() *256);
    //pick 0-255 for blue
    var b=Math.floor(Math.random() *256);
    
    return "rgb(" + r +", " +g+ ", " +b +")"; 
}