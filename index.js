                             //    PLATYER 1    //  
   var randomNum1 = Math.floor (Math.random() * 6);
    var diceNum1 = randomNum1 + 1;
    if (diceNum1 === 1) {
     document.querySelector(".diceImg1").setAttribute("src","images/dice1.png");
    } else if (diceNum1 === 2) {
        document.querySelector(".diceImg1").setAttribute("src","images/dice2.png");
    } else if (diceNum1 === 3) {
        document.querySelector(".diceImg1").setAttribute("src","images/dice3.png");
    } else if (diceNum1 === 4) {
        document.querySelector(".diceImg1").setAttribute("src","images/dice4.png");
    } else if (diceNum1 === 5) {
        document.querySelector(".diceImg1").setAttribute("src","images/dice5.png");
    } else if (diceNum1 === 5) {
        document.querySelector(".diceImg1").setAttribute("src","images/dice6.png");
    } 
                    ///////////////// PLAYER 2 //////////////////
    var randomNum2 = Math.floor (Math.random() * 6);
    var diceNum2 = randomNum2 + 1;
    if (diceNum2 === 1) {
     document.querySelector(".diceImg2").setAttribute("src","images/dice1.png");
    } else if (diceNum2 === 2) {
        document.querySelector(".diceImg2").setAttribute("src","images/dice2.png");
    } else if (diceNum2 === 3) {
        document.querySelector(".diceImg2").setAttribute("src","images/dice3.png");
    } else if (diceNum2 === 4) {
        document.querySelector(".diceImg2").setAttribute("src","images/dice4.png");
    } else if (diceNum2 === 5) {
        document.querySelector(".diceImg2").setAttribute("src","images/dice5.png");
    } else if (diceNum2 === 5) {
        document.querySelector(".diceImg2").setAttribute("src","images/dice6.png");
    } 
                        /////////////  RESUTS //////////////////////
    if (diceNum1 > diceNum2) {
        document.querySelector("h1").innerHTML = "<i class='bx bxs-flag-alt'></i>PLAYER 1 WIN!";
    } else if (diceNum1 < diceNum2) {
        document.querySelector("h1").innerHTML = "<i class='bx bxs-flag-alt'></i>PLAYER 2 WIN!";
    } else {
        document.querySelector("h1").innerHTML = "DRAW";
    }