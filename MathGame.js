let equation = '';

function clearDisplay() {
  equation = '';
  document.getElementsByClassName('result').value = '';
}

function appendValue(value) {
  equation += value;
  document.getElementsByClassName('result').value += value;
}

function appendOperator(operator) {
  equation += operator;
  document.getElementsByClassName('result').value += operator;
}

function calculate() {
  try {
    const result = eval(equation);
    document.getElementsByClassName('result').value = result;
    equation = '';
  } catch (error) {
    document.getElementsByClassName('result').value = 'Error';
    equation = '';
  }
}

var score = 0;
var currentProblem;
var timerValue = 30;
var timerId;
var timer;
var message = document.getElementById("message");
var playAgainButton = document.getElementById("play_again");
var scoreDisplay = document.getElementById("score");
var timeDisplay = document.getElementById("timer");
var startGameButton = document.getElementById("start-game");
var answerInput = document.getElementById("answer");

function startGame() {
    var operation = document.getElementById("operation").value;
    document.getElementById("home_page").style.display = "none";
    document.getElementById("game-page").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    generateProblem(operation);
    document.getElementById('answer').addEventListener('keyup', function (event){
        if(event.keyCode === 13){
            checkAnswer();
        }
    });
}

function generateProblem(operation) {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator;

    switch (operation) {
        case "addition":
            operator = "+";
            currentProblem = num1 + num2;
            break;
        case "subtraction":
            operator = "-";
            currentProblem = num1 - num2;
            break;
        case "division":
            operator = "/";
            currentProblem = num1 / num2;
            break;
        case "multiplication":
            operator = "*";
            currentProblem = num1 * num2;
            break;
        default:
            operator = "+";
            currentProblem = num1 + num2;
    }

    document.getElementById("problem").innerText = num1 + " " + operator + " " + num2 + " =";
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function checkAnswer() {
    var userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === currentProblem) {
        score++;
    }
    document.getElementById("score").innerText = score;
    generateProblem(document.getElementById("operation").value);
}

//start the timer
function startTimer() {
    timerId = setInterval(updateTimer, 1000);
    startGameButton.style.display = "none";
    startGame();
}

function updateTimer(){
    timerValue--;
    var timerValueElement = document.getElementById('timer-value');
    timerValueElement.textContent = timerValue;

        if(timerValue === 0 ){
            endGame();
            clearInterval(timerId);
            document.getElementById('answer').setAttribute('disabled', 'true');
        }
}

function resetGame(){
    clearInterval(timerId);
    timerValue = 30;
    score = 0;
    document.getElementById('answer').removeAttribute('disabled');
    document.getElementById('score-value').textContent = score;
    document.getElementById('timer-value').textContent = timerValue;
    
}

    function endGame(){
            clearInterval(timer);
            answer.disabled = true;
            alert("Time's Up!")
            message.textContent = "Final Score ="  + score;
            playAgainButton.style.display = "block";
            startGameButton.style.display = "none";
           
    }

    function resetGame(){
            score = 0;
            timerValue = 30;
            answerInput.disabled = false;
            answerInput.value = "";
            message.textContent = "";
            timeDisplay.textContent = "Time: " + timerValue;
            playAgainButton.style.display = "none";
            startGameButton.style.display = "block";
            document.getElementById("game-page").style.display = "none";
            document.getElementById("home_page").style.display = "block";
            
    }
    
   
const answer = document.getElementById('answer');

  
  const numbers = document.getElementsByClassName('numbers');
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
      answer.value += numbers[i].textContent;
    });
  }
  
  // Add event listener to clear button
  const clearButton = document.getElementsByClassName('clear')[0];
  clearButton.addEventListener('click', function() {
    answer.value = '';
  });
  
  function clickKey(value){
    if(value==="Enter"){
      checkAnswer();
    }else{
      if(answer===undefined){
        answer = value;
      }else{
        answer +=value;
      }
    }
  }