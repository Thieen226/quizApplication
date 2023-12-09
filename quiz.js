var answersKey = [{
    question: "In what country did the first Starbucks open outside of North America?",
    answers: [
        {"A. The U.K." : false},
        {"B. China" : false},
        {"C. Japan" : true},
        {"D. Poland" : false}
    ]
},
{
    question: "Who was the highest-paid athlete in 2022?",
    answers: [
        {"A. Lebron James" : false},
        {"B. Lionel Messi" : true},
        {"C. Cristiano Ronaldo" : false},
        {"D. Usain Bolt" : false}
    ]
},
{
    question: "What is Starbucks' logo?",
    answers: [
        {"A. Siren" : true},
        {"B. Mermaid" : false},
        {"C. Fish" : false},
        {"D. A Woman" : false}
    ]
},
{
    question: "According to Greek mythology, who was the first woman on earth?",
    answers: [
        {"A. Helen" : false},
        {"B. Athena" : false},
        {"C. Pandora" : true},
        {"D. Medusa" : false}
    ]
},
{
    question: "What is the chemical symbol for gold?",
    answers: [
        {"A. Gd" : false},
        {"B. Au" : true},
        {"C. Pb" : false},
        {"D. Cd" : false}
    ]
},
{
    question: "What geometric shape is generally used for stop signs?",
    answers: [
        {"A. Octangon" : true},
        {"B. Circle" : false},
        {"C. Square" : false},
        {"D. Rectangle" : false}
    ]
},
{
    question: "How long was the first Thanksgiving?",
    answers: [
        {"A. 4 days" : false},
        {"B. 2 days" : false},
        {"C. 1 day" : false},
        {"D. 3 days" : true}
    ]
},
{
    question: "Which blood type is a universal donor?",
    answers: [
        {"A. O-" : true},
        {"B. O+" : false},
        {"C. AB+" : false},
        {"D. AB-" : false}
    ]
},
{
    question: "How many meters are in a kilometer?",
    answers: [
        {"A. 100" : false},
        {"B. 10000" : false},
        {"C. 1000" : true},
        {"D. 1" : false}
    ]
},
{
    question: "Which was the first country to use paper money?",
    answers: [
        {"A. Japan" : false},
        {"B. Egypt" : false},
        {"C. The U.S." : false},
        {"D. China" : true}
    ]
},
] 

const triviaQuestion = document.getElementById("triviaQuestion");
let currentQuestion = 0;
let score = 0; //this keeps track of correct score
let wrongAnswerIsClicked = false; //false if the user is not clicking the wrong answer
let correctAnswerIsClicked = false; //false if the user is not clicking the right answer
function loadQuestion(currentQuestion){
    //access to the question and its answers in the answersKey array 
    let questionInfo = answersKey[currentQuestion];
    let options = document.querySelectorAll("button");

    //change the text of the question to the question inside the object
    triviaQuestion.innerText = questionInfo.question;

    //go through answers in the question 
    for(let i = 0; i < questionInfo.answers.length; i++){

        //change the answer options to the answers in the answersKey array
        options[i].innerText = Object.keys(questionInfo.answers[i])[0];

        //when the user click the answer options, does this
        options[i].onclick = function(){

            //check if the user click the wrong answer
            if(Object.values(questionInfo.answers[i])[0] === false){
                //then change the value of wrongAnswerIsClicked to true since the user clicks the wrong answer
                wrongAnswerIsClicked = true; 

                //change the background of the incorrect answer to red
                options[i].style.backgroundColor = "#fb6c6c";
            }
            //check if the user click the right answer
            else if(Object.values(questionInfo.answers[i])[0] === true){
                //change the value of correctAnswerIsClicked to true since the user clicks the right answer
                correctAnswerIsClicked = true;

                //change the background of the correct answer to green
                options[i].style.backgroundColor = "#50f698";

                //if the user clicks the right answer before clicking the wrong one then add 10 points
                if(correctAnswerIsClicked === true && wrongAnswerIsClicked === false){
                    let points = document.getElementById("points");
                    score += 10;
                    points.innerText = "Points: " + score;
                }
                //if the user clicks the wrong answer before the right one then add nothing
                if(correctAnswerIsClicked === true && wrongAnswerIsClicked === true){
                    score += 0;
                    points.innerText = "Points: " + score;
                }
                //check if any next button is created on the website, if not add it
                if(!document.querySelector(".nextBtn")){
                    let nextBtn = document.createElement("Button");
                    nextBtn.innerText = "Next";
                    document.body.appendChild(nextBtn);
                    nextBtn.classList.add('nextBtn');

                        //this function will move to next question when nextBtn is clicked
                        nextBtn.onclick = function(){
                        //when the nextBtn is clicked, reset the value of both correctAnswerIsClicked and wrongAnswerIsClicked
                        correctAnswerIsClicked = false;
                        wrongAnswerIsClicked = false;

                        //add 1 to the currentQuestion to move to the next question
                        loadQuestion(++currentQuestion);
                        document.body.removeChild(nextBtn);

                        //when move to the next question, all the answer options will change to its original color
                        options.forEach((element) => {
                        element.style.backgroundColor = "#F5F1CB";
                        })
                    }
                }
            }
        } 
    }
}
loadQuestion(currentQuestion);

