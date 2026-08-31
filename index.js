const btns=document.querySelectorAll(".btn");
const green=document.querySelector(".green");
const red=document.querySelector(".red");
const yellow=document.querySelector(".yellow");
const blue=document.querySelector(".blue");
const title=document.querySelector("#level-title");
const container=document.querySelector(".container");
 const wrongAudio=new Audio("sounds/wrong.mp3");
let gameSequence=[];
let playerSequence=[];
let level=0;
let gamestarted=false;
let gameOver=false;
const colors=["green","red","yellow","blue"];


btns.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        if(gamestarted===false || gameOver===true){
            return;
        }
        btn.classList.add("pressed");
        setTimeout(()=>{
            btn.classList.remove("pressed")
        },150);
        const clickedButton=event.currentTarget;


    if(clickedButton.classList.contains("green")){
        const greenAudio=new Audio("sounds/green.mp3");
        greenAudio.play();
        playerSequence.push("green");
        comparasion(playerSequence);
        
       

    }
     if(clickedButton.classList.contains("red")){
        const redAudio=new Audio("sounds/red.mp3");
        redAudio.play();
        playerSequence.push("red");
        comparasion(playerSequence);
    }
     if(clickedButton.classList.contains("yellow")){
        const yellowAudio=new Audio("sounds/yellow.mp3");
        yellowAudio.play();
        playerSequence.push("yellow");
        comparasion(playerSequence);
        
    }
     if(clickedButton.classList.contains("blue")){
        const blueAudio=new Audio("sounds/blue.mp3");
        blueAudio.play();
        playerSequence.push("blue");
        comparasion(playerSequence);
    }

    })
});
document.addEventListener("keydown",()=>{
    if(gamestarted===false){
        level++;
        gamestarted=true;
        title.textContent=`level ${level}`;
        randomColorGenerator();
        
        
        
    }
   else if(gameOver===true){
         
          
      gameOver=false;
      randomColorGenerator();
         level=1;
        gamestarted=true;
        title.textContent=`level ${level}`;
        
    }
    else{
        return;
    }
})

function flashColor(color){
   
      
    switch(color)
    {
        case "green":
           const greenAu= new Audio("sounds/green.mp3");
         greenAu.play();
         green.classList.add("pressed");
        setTimeout(()=>{
            green.classList.remove("pressed")
        },150);
            break;
         case "red":
            const redAu=new Audio("sounds/red.mp3");
            redAu.play();
            red.classList.add("pressed");
        setTimeout(()=>{
            red.classList.remove("pressed")
        },150);
            break;
         case "yellow":
            const yellowAu=new Audio("sounds/yellow.mp3");
            yellowAu.play();
            yellow.classList.add("pressed");
        setTimeout(()=>{
            yellow.classList.remove("pressed")
        },150);
            break;
       case "blue":
           const blueAu= new Audio("sounds/blue.mp3");
           blueAu.play();
           blue.classList.add("pressed");
        setTimeout(()=>{
            blue.classList.remove("pressed")
        },150);
            break;
    }


}
 
function randomColorGenerator(){
    let randomColor=Math.floor((Math.random()*4));
    gameSequence.push(colors[randomColor]);
   
    let lastElement=gameSequence[gameSequence.length-1];
    flashColor(lastElement);
  
}



function comparasion(playerClick){
      

      if(playerClick[playerClick.length-1]===gameSequence[playerClick.length-1]){
        console.log("right choice");
      
           
      }
      else{
         wrongHandle();
         return;
      }
      if(playerClick.length===gameSequence.length){
          playerSequence=[];
          level++;
          title.textContent=`level ${level}`;
          setTimeout(()=>{
            randomColorGenerator();
            
        },1000)
      }
     
    
   
}
function wrongHandle(){
    
         wrongAudio.play();
         container.classList.add("game-over");
         setTimeout(()=>{
            container.classList.remove("game-over")
        },300);
       
        gameOver=true;
          playerSequence=[];
          gameSequence=[];
        title.textContent=`game over, press any key to restart`;
}






