const game = () => {
    // Get Elements.
    titleDiv = document.getElementById("title");
    computerPickedDiv = document.getElementById("computer-picked");
    resultDiv = document.getElementById("result");
    playerPickedDiv = document.getElementById("player-picked");
    playerScoreDiv = document.getElementById("player-score");
    computerScoreDiv = document.getElementById("computer-score");
    ;
    rockBtn = document.getElementById("rock");
    paperBtn = document.getElementById("paper");
    scissorBtn = document.getElementById("scissor")

    
    // Game Globals
    availableTypes = ["⛰️", "📝", "✂️"];
    computerPicked = "";
    playerPicked = "";
    computerScore = 0;
    playerScore = 0;
    
    // Set Element Data
    this.titleDiv.innerHTML = "Mountain Paper Scissor"
    this.playerScoreDiv.innerHTML = playerScore;
    this.computerScoreDiv.innerHTML = computerScore;

    // Add Click Events To Buttons
    addEventListners();

    // Entrypoint
    function startGame(param) {
        loader();
        setTimeout(() => {
            setPlayerPicked(param);
            setComputerPicked();
            andthewinneris();
        }, 1100);
    }
    
    // Add Click Event To Buttons
    function addEventListners() {
        this.rockBtn.addEventListener("click", startGame, false);
        this.paperBtn.addEventListener("click", startGame, false);
        this.scissorBtn.addEventListener("click", startGame, false);
    }

    // Generates Random Value From Available Types
    function setComputerPicked() {
        this.computerPicked = this.availableTypes[(Math.random() * this.availableTypes.length) | 0]
        this.computerPickedDiv.innerHTML = this.computerPicked;
    }

    // Processes The Player Feedback
    function setPlayerPicked(choice) {
        this.playerPicked = choice.srcElement.textContent
        this.playerPickedDiv.innerHTML = this.playerPicked
    }

    // Puts Loading Icons On Inputfields
    function loader() {
        this.resultDiv.innerHTML = "loading..."
        this.playerPickedDiv.innerHTML = "⌛"
        this.computerPickedDiv.innerHTML = "⌛"
    }

    // Updates The Score
    function updateScore(player) {
        if(player === "computer") {
            result.innerHTML = "Computer won!"
            this.computerScore++;
            this.computerScoreDiv.innerHTML = computerScore;
        } else {
            result.innerHTML = "Player won!"
            this.playerScore++;
            this.playerScoreDiv.innerHTML = playerScore;
        }
    }

    // Logic For Calculating The Winner
    function andthewinneris() {
        if(this.computerPicked === this.playerPicked) {
            result.innerHTML = "Draw"
        } else if(this.computerPicked === "⛰️" && this.playerPicked === "✂️") {
            updateScore("computer")
        } else if(this.computerPicked === "✂️" && this.playerPicked === "📝") {
            updateScore("computer")
        } else if (this.computerPicked === "📝" && this.playerPicked === "⛰️") {
            updateScore("computer")
        } else {
            updateScore("player")
        }
    }
}