let $PlayerSelection = 0;
let $PlayerScore = 0;
let $PlayerMessage = 0;
let $ComputerSelection = 0;
let $ComputerScore = 0;
let $ComputerMessage = 0;
let $NewRound = 0;
let $NextRoundTimer;
let $ClickOn = 0;
let $Timer;
let $AnimationTimer;
let $Animation = 0;
let $ConfirmTimer;

// For Player //
// 1 = Rock
// 2 = Paper
// 3 = Scissors

// For Computer //
// 0 = Rock
// 1 = Paper
// 2 = Scissors

// Instructions Board //
function BackButton(){
    document.getElementById("ip1").style.display = "block";
    document.getElementById("ip2").style.display = "none";
    document.getElementById("back-button").style.visibility = "hidden";
    document.getElementById("done-button").style.visibility = "hidden";
    document.getElementById("next-button").style.visibility = "visible";
}
function NextButton(){
    document.getElementById("ip1").style.display = "none";
    document.getElementById("ip2").style.display = "block";
    document.getElementById("next-button").style.visibility = "hidden";
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("done-button").style.visibility = "visible";
}
function DoneButton(){
    document.getElementById("instructions-board").style.display = "none";
}
// Messages //
// When The Player Loses //
function MessageLose(x,y){
    console.log(`You Lose! ${x} beats ${y}`);
    document.getElementById("game-message").style.visibility = "visible";
    document.getElementById("game-message").style.color = "red";
    document.getElementById("game-message").innerHTML = `You Lose! ${x} beats ${y}.`;
}
// When The Player Wins //
function MessageWin(x,y){
    console.log(`You Won! ${x} beats ${y}`);
    document.getElementById("game-message").style.visibility = "visible";
    document.getElementById("game-message").style.color = "rgb(35, 211, 0)";
    document.getElementById("game-message").innerHTML = `You Won! ${x} beats ${y}.`;
}
// When The Player Tied //
function MessageTied(){
    console.log(`No One Won!`);
    document.getElementById("game-message").style.visibility = "visible";
    document.getElementById("game-message").style.color = "white";
    document.getElementById("game-message").innerHTML = `You Tied!`;
}
// Score //
function UpdateScoreBoard(){
    document.getElementById("player-score").innerHTML = `You: ${$PlayerScore}`;
    document.getElementById("computer-score").innerHTML = `Computer: ${$ComputerScore}`;
}
// Tool Animation //
function AnimationTool(){
    document.getElementById("rock-player-image").style.display = "block";
    document.getElementById("rock-player-image").style.animation = "tool-move 0.5s infinite";
    document.getElementById("rock-computer-image").style.display = "block";
    document.getElementById("rock-computer-image").style.animation = "tool-move 0.5s infinite";
}
function AnimationToolEnd(){
    document.getElementById("rock-player-image").style.animation = "tool-move 0s";
    document.getElementById("rock-computer-image").style.animation = "tool-move 0s";
}
function PlayerSelectionConfirm(){
    $Animation++;
    if($Animation === 2){
    clearInterval($ConfirmTimer);
    }
}
// Player Buttons //
function PlayerSelectionRock(){
    if($ClickOn === 0){
    reset();
    AnimationTool();
    $ClickOn = 1;
    $AnimationTimer = setInterval(function(){PlayerSelectionRock()}, 300);
    $ConfirmTimer = setInterval(function(){PlayerSelectionConfirm()}, 300);
    }
    if($Animation === 2){
    $PlayerSelection = 1;
    $Animation = 0;
    clearInterval($AnimationTimer);
    CompetitorsSelection();
    }
}
function PlayerSelectionPaper(){
    if($ClickOn === 0){
    reset();
    AnimationTool();
    $ClickOn = 1;
    $AnimationTimer = setInterval(function(){PlayerSelectionPaper()}, 300);
    $ConfirmTimer = setInterval(function(){PlayerSelectionConfirm()}, 300);
    }
    if($Animation === 2){
    $PlayerSelection = 2;
    $Animation = 0;
    clearInterval($AnimationTimer);
    CompetitorsSelection();
    }
}
function PlayerSelectionScissors(){
    if($ClickOn === 0){
    reset();
    AnimationTool();
    $ClickOn = 1;
    $AnimationTimer = setInterval(function(){PlayerSelectionScissors()}, 300);
    $ConfirmTimer = setInterval(function(){PlayerSelectionConfirm()}, 300);
    }
    if($Animation === 2){
    $PlayerSelection = 3;
    $Animation = 0;
    clearInterval($AnimationTimer);
    CompetitorsSelection();
    }
}
// Player Message //
function PlayerMessage(){
    $PlayerMessage = Math.floor((Math.random() * 3));
    switch($PlayerMessage){
        case 0:
            document.getElementById("player-message").style.visibility = "visible";
            document.getElementById("player-message").innerHTML = `You Need Update? &#129300;`;
            break;
        case 1:
            document.getElementById("player-message").style.visibility = "visible";
            document.getElementById("player-message").innerHTML = `Haha! &#128514;`;
            break;
        case 2:
            document.getElementById("player-message").style.visibility = "visible";
            document.getElementById("player-message").innerHTML = `Easy Peasy! &#128526;`;
            break;
    }
}
// Computer Message //
function ComputerMessage(){
    $ComputerMessage = Math.floor((Math.random() * 3));
    switch($ComputerMessage){
        case 0:
            document.getElementById("computer-message").style.visibility = "visible";
            document.getElementById("computer-message").innerHTML = `Noob! &#128528;`;
            break;
        case 1:
            document.getElementById("computer-message").style.visibility = "visible";
            document.getElementById("computer-message").innerHTML = `Come On! &#128527;`;
            break;
        case 2:
            document.getElementById("computer-message").style.visibility = "visible";
            document.getElementById("computer-message").innerHTML = `Maybe Next Time! &#128521;`;
            break;
    }
}
// Reset Function //
function reset(){
    $ComputerSelection = 0;
    $PlayerSelection = 0;
    // Player Tools //
    document.getElementById("rock-player-image").style.display = "none";
    document.getElementById("rock-player-won-image").style.display = "none";
    document.getElementById("rock-player-lose-image").style.display = "none";
    document.getElementById("paper-player-won-image").style.display = "none";
    document.getElementById("paper-player-lose-image").style.display = "none";
    document.getElementById("scissors-player-won-image").style.display = "none";
    document.getElementById("scissors-player-lose-image").style.display = "none";
    // Player Message //
    document.getElementById("player-message").style.visibility = "hidden";
    // Computer Tools //
    document.getElementById("rock-computer-image").style.display = "none";
    document.getElementById("rock-computer-won-image").style.display = "none";
    document.getElementById("rock-computer-lose-image").style.display = "none";
    document.getElementById("paper-computer-won-image").style.display = "none";
    document.getElementById("paper-computer-lose-image").style.display = "none";
    document.getElementById("scissors-computer-won-image").style.display = "none";
    document.getElementById("scissors-computer-lose-image").style.display = "none";
    // Computer Message //
    document.getElementById("computer-message").style.visibility = "hidden";
}
// Hide All Tools //
function HideAll(){
    // Player Tools //
    document.getElementById("rock-player-image").style.display = "none";
    document.getElementById("rock-player-won-image").style.display = "none";
    document.getElementById("rock-player-lose-image").style.display = "none";
    document.getElementById("paper-player-won-image").style.display = "none";
    document.getElementById("paper-player-lose-image").style.display = "none";
    document.getElementById("scissors-player-won-image").style.display = "none";
    document.getElementById("scissors-player-lose-image").style.display = "none";
    // Computer Tools //
    document.getElementById("rock-computer-image").style.display = "none";
    document.getElementById("rock-computer-won-image").style.display = "none";
    document.getElementById("rock-computer-lose-image").style.display = "none";
    document.getElementById("paper-computer-won-image").style.display = "none";
    document.getElementById("paper-computer-lose-image").style.display = "none";
    document.getElementById("scissors-computer-won-image").style.display = "none";
    document.getElementById("scissors-computer-lose-image").style.display = "none";
}
function NextRound(){
    clearInterval($NextRoundTimer);
    AnimationToolEnd();
    $Animation = 0;
    $ClickOn = 0;
    // Game Message //
    document.getElementById("game-message").style.visibility = "hidden";
    // Player Tools //
    document.getElementById("rock-player-image").style.display = "block";
    document.getElementById("rock-player-won-image").style.display = "none";
    document.getElementById("rock-player-lose-image").style.display = "none";
    document.getElementById("paper-player-won-image").style.display = "none";
    document.getElementById("paper-player-lose-image").style.display = "none";
    document.getElementById("scissors-player-won-image").style.display = "none";
    document.getElementById("scissors-player-lose-image").style.display = "none";
    // Player Message //
    document.getElementById("player-message").style.visibility = "hidden";
    // Computer Tools //
    document.getElementById("rock-computer-image").style.display = "block";
    document.getElementById("rock-computer-won-image").style.display = "none";
    document.getElementById("rock-computer-lose-image").style.display = "none";
    document.getElementById("paper-computer-won-image").style.display = "none";
    document.getElementById("paper-computer-lose-image").style.display = "none";
    document.getElementById("scissors-computer-won-image").style.display = "none";
    document.getElementById("scissors-computer-lose-image").style.display = "none";
    // Computer Message //
    document.getElementById("computer-message").style.visibility = "hidden";
}
// Competitors Selection //
function CompetitorsSelection(){
    if($PlayerScore < 7 && $ComputerScore < 7 && $NewRound === 0){
    $ComputerSelection = Math.floor((Math.random() * 3));
    // Player Tied //
    if($PlayerSelection === 1 && $ComputerSelection === 0){
        reset();
        MessageTied();  
        AnimationToolEnd();
        document.getElementById("rock-player-image").style.display = "block";
        document.getElementById("rock-computer-image").style.display = "block";
    } 
    if($PlayerSelection === 2 && $ComputerSelection === 1){
        reset();
        MessageTied();
        AnimationToolEnd();
        document.getElementById("rock-player-image").style.display = "block";
        document.getElementById("rock-computer-image").style.display = "block";
    } 
    if($PlayerSelection === 3 && $ComputerSelection === 2){
        reset();
        MessageTied();
        AnimationToolEnd();
        document.getElementById("rock-player-image").style.display = "block";
        document.getElementById("rock-computer-image").style.display = "block";
    }
    // Player Won //
    if($PlayerSelection === 1 && $ComputerSelection === 2){
        $PlayerScore++;
        reset();
        UpdateScoreBoard();
        PlayerMessage();
        MessageWin("Rock", "Scissors"); 
        document.getElementById("rock-player-won-image").style.display = "block";
        document.getElementById("scissors-computer-lose-image").style.display = "block";
    } else if($PlayerSelection === 2 && $ComputerSelection === 0){
        $PlayerScore++;
        reset();
        UpdateScoreBoard();
        PlayerMessage();
        MessageWin("Paper", "Rock");
        document.getElementById("paper-player-won-image").style.display = "block";
        document.getElementById("rock-computer-lose-image").style.display = "block";
    } else if($PlayerSelection === 3 && $ComputerSelection === 1){
        $PlayerScore++;
        reset();
        UpdateScoreBoard();
        PlayerMessage();
        MessageWin("Scissors", "Paper");
        document.getElementById("scissors-player-won-image").style.display = "block";
        document.getElementById("paper-computer-lose-image").style.display = "block";
    }
    // Computer Won //
    if($PlayerSelection === 3 && $ComputerSelection === 0){
        $ComputerScore++;
        reset();
        ComputerMessage();
        UpdateScoreBoard();
        MessageLose("Rock", "Scissors"); 
        document.getElementById("rock-computer-won-image").style.display = "block";
        document.getElementById("scissors-player-lose-image").style.display = "block";
    } else if($PlayerSelection === 1 && $ComputerSelection === 1){
        $ComputerScore++;
        reset();
        ComputerMessage();
        UpdateScoreBoard();
        MessageLose("Paper", "Rock");
        document.getElementById("paper-computer-won-image").style.display = "block";
        document.getElementById("rock-player-lose-image").style.display = "block";
    } else if($PlayerSelection === 2 && $ComputerSelection === 2){
        $ComputerScore++;
        reset();
        ComputerMessage();
        UpdateScoreBoard();
        MessageLose("Scissors", "Paper");
        document.getElementById("scissors-computer-won-image").style.display = "block";
        document.getElementById("paper-player-lose-image").style.display = "block";
        }
        // Click Timer //
        TheWinner();
        if($PlayerScore < 7){
        $NextRoundTimer = setInterval(function(){NextRound()}, 2000);
        }
    }
}
// The Winner //
function TheWinner(){
    if($PlayerScore === 7){
        HideAll();
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "The Winner Is You!";
        document.getElementById("winner").style.color = "rgb(35, 211, 0)";
        document.getElementById("firework").style.display = "block";
        $NewRound++;
        $Timer = setInterval(function(){NewRound()}, 2000);
    }
    if($ComputerScore === 7){
        HideAll();
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "The Winner Is The Computer!";
        document.getElementById("winner").style.color = "red";
        $NewRound++;
        $Timer = setInterval(function(){NewRound()}, 2000);
    }
}
// For New Round //
function NewRound(){
    $ClickOn = 0;
    $NewRound = 0;
    $PlayerScore = 0;
    $ComputerScore = 0;
    $ComputerSelection = 0;
    $PlayerSelection = 0;
    // Fire Work //
    document.getElementById("firework").style.display = "none";
    // Game Message //
    document.getElementById("game-message").style.visibility = "hidden";
    // Winner Message //
    document.getElementById("winner").style.display = "none";
    // Player Tools //
    document.getElementById("rock-player-image").style.display = "Block";
    document.getElementById("rock-player-won-image").style.display = "none";
    document.getElementById("rock-player-lose-image").style.display = "none";
    document.getElementById("paper-player-won-image").style.display = "none";
    document.getElementById("paper-player-lose-image").style.display = "none";
    document.getElementById("scissors-player-won-image").style.display = "none";
    document.getElementById("scissors-player-lose-image").style.display = "none";
    document.getElementById("rock-player-image").style.animation = "tool-move 0s";
    // Player Message //
    document.getElementById("player-message").style.visibility = "hidden";
    // Player Score //
    document.getElementById("player-score").innerHTML = `You: 0`;
    // Computer Tools //
    document.getElementById("rock-computer-image").style.display = "Block";
    document.getElementById("rock-computer-won-image").style.display = "none";
    document.getElementById("rock-computer-lose-image").style.display = "none";
    document.getElementById("paper-computer-won-image").style.display = "none";
    document.getElementById("paper-computer-lose-image").style.display = "none";
    document.getElementById("scissors-computer-won-image").style.display = "none";
    document.getElementById("scissors-computer-lose-image").style.display = "none";
    document.getElementById("rock-computer-image").style.animation = "tool-move 0s";
    // Computer Message //
    document.getElementById("computer-message").style.visibility = "hidden";
    // Computer Score //
    document.getElementById("computer-score").innerHTML = `Computer: 0`;
    clearInterval($Timer);
}
