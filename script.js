
let clutter = "";
let timerVal = 60;
let hitNumber = 0;
let score = 0;
let bubbleNumber = 0;

// This function is used to make the bubble circle and the value inside it.
const makeBubble = () => {

for (let i = 1; i < 190; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*20)}</div>`;
    
}
const bubbleVal = document.querySelector(".pannel-bottom");
bubbleVal.innerHTML = clutter;
}

//This function is used to run the timer
const runTimer = () => {

    let timerInterVal = setInterval(() => {

        if (timerVal > 0) {

            timerVal--;
            const timer = document.querySelector("#timer");
            timer.textContent = timerVal;

            //Alter for the remaining time
            if (timerVal < 11){
                timer.style.color = "red";
            }

        }else {

            clearInterval(timerInterVal);
            document.querySelector(".pannel-bottom").innerHTML = `<h1>Game Over</h1>`;
            clutter = '';
            setTimeout(() => {
                document.querySelector(".pannel-bottom").innerHTML = "<span>Click anywhere on the white board to play the game again!</span>";
            },2000);
            document.querySelector(".pannel-bottom").addEventListener('click', function() {
                window.location.reload();
            })
            
        }
        
    },1000);
}

//This function is used to change the hit value
const hitVal = () => {
    hitNumber = Math.floor(Math.random() * 20);
    document.querySelector("#hitNumber").textContent = hitNumber;

}

//This function is used to increse or decrease the score value
const scoreChecker = () => {
    const pannelBottom = document.querySelector(".pannel-bottom");
    pannelBottom.addEventListener('click', function(elementVal) {
        
       bubbleNumber =  Number(elementVal.target.textContent);
       let scoreVal = document.querySelector("#scoreNumber");
       if (bubbleNumber == hitNumber){

           score += 10;
           scoreVal.textContent = score;
        

       }else if(score == 0){

        scoreVal.textContent = 0;

       }else {

        score -= 10;
        scoreVal.textContent = score;
        
        
       }
        hitVal();
        clutter = "";
        makeBubble();
    });
}

scoreChecker();
hitVal();
runTimer();
makeBubble();