// // let btn = document.querySelector("button")
// // let ul = document.querySelector("ul")
// // let inp = document.querySelector("input");

// // btn.addEventListener ("click", function (){
// //     let btn2 = document.createElement("button");
// //     btn2.innerText= "delete"
// //     let item = document.createElement("li");
// //     item.innerText = inp.value;
// //     ul.appendChild(item);
// //     item.appendChild(btn2);
// // })

// // // let btn2 = document.querySelectorAll(".delete");

// // // for (dltbtns of btn2){
// // //     dltbtns.addEventListener("click",function(){
// // //         let par = this.parentElement;
// // //         par.remove()
// // //     })
// // // }

// // ul.addEventListener("click",function(event){
// //     if(event.target.nodeName == "BUTTON"){
// //         let liItem = event.target.parentElement;
// //         liItem.remove() ;
// //     }
// // })
//                                     // Simonn say game code
// // let userseq=[];
// // let gameseq=[];

// // let started=false;
// // let level =0;

// // let btns = ["yellow", "red","purple","green"];

// // document.addEventListener("keypress" , function(){
// //     if(!started){
// //         console.log("started game");
// //         started=true;
// //         levelup();
// //     } 
// // });

// // let h5 = document.querySelector("h5");

// // function gameflash(btn){
// //     btn.classList.add("flash");
// //     setTimeout(function(){
// //         btn.classList.remove("flash");
// //     },250)
// // }

// // function userflash(btn){
// //     btn.classList.add("userflash");
// //     setTimeout(function(){
// //         btn.classList.remove("userflash");
// //     },250)
// // }

// // function levelup(){
// //     userseq=[];
// //     level++;
// //     h5.innerText = `Level ${level}`;

// //     let randomidx = Math.floor(Math.random()*4);
// //     let randomColor = btns[randomidx];
// //     let randombtn = document.querySelector(`.${randomColor}`);
// //     gameseq.push(randomColor);
// //     // console.log(randomidx);
// //     console.log(gameseq);
// //     // console.log(randombtn);

// //     gameflash(randombtn);
// // }

// // function checkAns(idx){
// //     if(userseq[idx] === gameseq[idx]){
// //         if(userseq.length === gameseq.length) setTimeout(levelup, 1000);
// //     }
// //     else{
// //         h5.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to restart.`

// //         document.querySelector("body").style.backgroundColor="red";
// //         setTimeout(function(){
// //             document.querySelector("body").style.backgroundColor="white";
// //         },150)
// //         reset(); 
// //     }
// // }
// // function btnpress(){
// //     // console.log(this);
// //     let btn = this;
// //     userflash(btn);

// //     let userColor=btn.getAttribute("id");
// //     console.log(userColor);
// //     userseq.push(userColor);

// //     checkAns(userseq.length - 1)
// // }

// // let allbtns = document.querySelector(".btn");
// // for(let btn of allbtns){
// //     btn.addEventListener("click",btnpress);
// // }

// // function reset(){
// //     started=false;
// //     gameseq = [];
// //     userseq= [];
// //     level =0;
// // }
//                                     // with Animation




// let userseq = [];
// let gameseq = [];

// let started = false;
// let level = 0;
// let canRestart = true;

// let btns = ["yellow", "red", "purple", "green"];

// document.addEventListener("keypress", function () {
//     if (!started && canRestart) {
//         started = true;
//         h5.classList.remove("fade-out");
//         levelup();
//     }
// });

// let h5 = document.querySelector("h5");

// function gameflash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userflash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// // function playSound(color) {
// //     let audio = new Audio(`sounds/${color}.mp3`);
// //     audio.play().catch(err => console.warn("Sound not loaded:", color));
// // }

// function levelup() {
//     userseq = [];
//     level++;
//     h5.innerText = `Level ${level}`;

//     let randomidx = Math.floor(Math.random() * 4);
//     let randomColor = btns[randomidx];
//     let randombtn = document.querySelector(`#${randomColor}`);
//     gameseq.push(randomColor);
//     console.log(gameseq);
//     gameflash(randombtn);
//     // playSound(randomColor);
// }

// function checkAns(idx) {
//     if (userseq[idx] === gameseq[idx]) {
//         if (userseq.length === gameseq.length) {
//             setTimeout(levelup, 1000);
//         }
//     } else {
//         // playSound("wrong"); // Sound for game over
//         h5.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to restart.`;
//         h5.classList.remove("fade-out");

//         let body = document.querySelector("body");
//         body.classList.add("game-over");

//         setTimeout(() => {
//             h5.classList.add("fade-out");
//         }, 2000);

//         setTimeout(() => {
//             body.classList.remove("game-over");
//         }, 500);

//         reset();
//     }
// }

// function btnpress() {
//     let btn = this;
//     userflash(btn);

//     let userColor = btn.getAttribute("id");
//     userseq.push(userColor);
//     // playSound(userColor);  // Re-enable sound
//     checkAns(userseq.length - 1);
// }

// let allbtns = document.querySelectorAll(".color-box");
// allbtns.forEach(btn => {
//     btn.addEventListener("click", btnpress);
// });

// function reset() {
//     started = false;
//     gameseq = [];
//     userseq = [];
//     level = 0;
//     canRestart = false;

//     setTimeout(() => {
//         canRestart = true;
//     }, 3000);  // Delay restart for 1 second
// }










document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        yellow: document.getElementById('yellow'),
        red: document.getElementById('red'),
        purple: document.getElementById('purple'),
        green: document.getElementById('green')
    };
    
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('high-score');
    
    let sequence = [];
    let playerSequence = [];
    let score = 0;
    let highScore = 0;
    let gameStarted = false;
    
    // Initialize game
    function init() {
        // Add click event listeners to all buttons
        Object.values(buttons).forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
        
        // Load high score from local storage
        const savedHighScore = localStorage.getItem('simonHighScore');
        if (savedHighScore) {
            highScore = parseInt(savedHighScore);
            highScoreElement.textContent = highScore;
        }
    }
    
    // Start a new game
    function startGame() {
        if (!gameStarted) {
            gameStarted = true;
            sequence = [];
            playerSequence = [];
            score = 0;
            scoreElement.textContent = score;
            nextRound();
        }
    }
    
    // Add a new step to the sequence and show it to the player
    function nextRound() {
        playerSequence = [];
        const nextColor = getRandomColor();
        sequence.push(nextColor);
        
        // Disable buttons while showing the sequence
        disableButtons();
        
        // Show the sequence with delays between each color
        let i = 0;
        const interval = setInterval(() => {
            if (i >= sequence.length) {
                clearInterval(interval);
                enableButtons();
                return;
            }
            
            const color = sequence[i];
            animateButton(color);
            i++;
        }, 800);
    }
    
    // Get a random color from the available buttons
    function getRandomColor() {
        const colors = Object.keys(buttons);
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Handle player button clicks
    function handleButtonClick(e) {
        if (!gameStarted) {
            startGame();
            return;
        }
        
        const color = e.target.id;
        playerSequence.push(color);
        animateButton(color);
        
        // Check if the player's sequence matches so far
        for (let i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] !== sequence[i]) {
                gameOver();
                return;
            }
        }
        
        // If the player completed the sequence
        if (playerSequence.length === sequence.length) {
            score++;
            scoreElement.textContent = score;
            
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
                localStorage.setItem('simonHighScore', highScore);
            }
            
            // Wait a bit before starting the next round
            disableButtons();
            setTimeout(() => {
                nextRound();
            }, 1000);
        }
    }
    
    // Animate a button (flash and sound)
    function animateButton(color) {
        const button = buttons[color];
        button.classList.add('active');
        
        // Play sound (you would need to add sound files for this to work)
        // playSound(color);
        
        setTimeout(() => {
            button.classList.remove('active');
        }, 300);
    }
    
    // Disable all buttons
    function disableButtons() {
        Object.values(buttons).forEach(button => {
            button.style.pointerEvents = 'none';
        });
    }
    
    // Enable all buttons
    function enableButtons() {
        Object.values(buttons).forEach(button => {
            button.style.pointerEvents = 'auto';
        });
    }
    
    // Game over logic
    function gameOver() {
        alert(`Game Over! Your score: ${score}`);
        gameStarted = false;
        sequence = [];
        playerSequence = [];
        score = 0;
        scoreElement.textContent = score;
    }
    
    // Initialize the game when the page loads
    init();
});