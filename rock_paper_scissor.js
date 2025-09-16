let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
        const option = ["Rock","Paper","Scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return option[randIdx];
}
const drawGame = () =>{
        msg.innerText = "Game was draw.play again..."
        msg.style.backgroundColor = "#081b31";
}
const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }else{
        compScore++;
        compScorePara.innerText = compScore;        
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});