//setting dots
let dots = document.getElementsByClassName('dot');
let dotsTwo = document.getElementsByClassName('dotTwo');

//working the dice
function workDice(){
    //setting random numbers
    let randomNumDiceOne = Math.ceil(Math.random()*6);
    let randomNumDiceTwo = Math.ceil(Math.random()*6);
    //setting the sub-functions so we could call them inside 
    function invisibleDots(){
        for(let i = 0; i < dots.length; i++){
            dots[i].style.visibility = "hidden";
            dotsTwo[i].style.visibility = "hidden";
        };
    }
    function setDots(){
        if(randomNumDiceOne === 1){
            dots[3].style.visibility = "visible";
        } else if(randomNumDiceOne === 2){
            dots[1].style.visibility = "visible";
            dots[5].style.visibility = "visible";
        } else if(randomNumDiceOne === 3){
            dots[0].style.visibility = "visible";
            dots[3].style.visibility = "visible";
            dots[6].style.visibility = "visible";
        } else if(randomNumDiceOne === 4){
            dots[0].style.visibility = "visible";
            dots[1].style.visibility = "visible";
            dots[5].style.visibility = "visible";
            dots[6].style.visibility = "visible";
        } else if(randomNumDiceOne === 5){
            dots[0].style.visibility = "visible";
            dots[1].style.visibility = "visible";
            dots[3].style.visibility = "visible";
            dots[5].style.visibility = "visible";
            dots[6].style.visibility = "visible";
        } else {
            dots[0].style.visibility = "visible";
            dots[1].style.visibility = "visible";
            dots[2].style.visibility = "visible";
            dots[4].style.visibility = "visible";
            dots[5].style.visibility = "visible";
            dots[6].style.visibility = "visible";
        };
        if(randomNumDiceTwo === 1){
            dotsTwo[3].style.visibility = "visible";
        } else if(randomNumDiceTwo === 2){
            dotsTwo[1].style.visibility = "visible";
            dotsTwo[5].style.visibility = "visible";
        } else if(randomNumDiceTwo === 3){
            dotsTwo[0].style.visibility = "visible";
            dotsTwo[3].style.visibility = "visible";
            dotsTwo[6].style.visibility = "visible";
        }else if(randomNumDiceTwo === 4){
            dotsTwo[0].style.visibility = "visible";
            dotsTwo[1].style.visibility = "visible";
            dotsTwo[5].style.visibility = "visible";
            dotsTwo[6].style.visibility = "visible";
        } else if(randomNumDiceTwo === 5){
            dotsTwo[0].style.visibility = "visible";
            dotsTwo[1].style.visibility = "visible";
            dotsTwo[3].style.visibility = "visible";
            dotsTwo[5].style.visibility = "visible";
            dotsTwo[6].style.visibility = "visible";
        } else {
            dotsTwo[0].style.visibility = "visible";
            dotsTwo[1].style.visibility = "visible";
            dotsTwo[2].style.visibility = "visible";
            dotsTwo[4].style.visibility = "visible";
            dotsTwo[5].style.visibility = "visible";
            dotsTwo[6].style.visibility = "visible";
        };
    }
    //calling .remove() twice on [0] so it would remove both 'i' tags
    if(document.querySelectorAll("i").length !== 0){
        document.getElementsByTagName("i")[0].remove();
        document.getElementsByTagName("i")[0].remove();
        setDots();
    } else if(document.querySelectorAll("i").length === 0){
        invisibleDots();
        setDots();
    };
    if(randomNumDiceOne > randomNumDiceTwo){
        document.getElementById('title').innerHTML = "&#128681;Player 1 wins!"
    } else if(randomNumDiceOne < randomNumDiceTwo){
        document.getElementById('title').innerHTML = "Player 2 wins!&#128681;"
    } else {
        document.getElementById('title').innerHTML = "&#9878; It's a draw! &#9878;"
    }
}
