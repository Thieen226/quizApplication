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
    question: "Who was the highest-paid athlete in 2022?",
    answers: [
        {"A. Lebron James" : false},
        {"B. Lionel Messi" : true},
        {"C. Cristiano Ronaldo" : false},
        {"D. Usain Bolt" : false}
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
//access to the question and its answers in the answersKey array 
let questionInfo = answersKey[currentQuestion];
function loadQuestion(){
    let options = document.querySelectorAll("button");
    //change the text of the question to the question inside the object
    triviaQuestion.innerText = questionInfo.question;
    //go through answers in the question 
    for(let i = 0; i < questionInfo.answers.length; i++){
        //change the answer options to the answers in the answersKey array
        options[i].innerText = Object.keys(questionInfo.answers[i])[0];
        //
        options[i].onclick = function(){
            if(Object.values(questionInfo.answers[i])[0] === true){
                options[i].style.backgroundColor = "#32cd32";
                let nextBtn = document.createElement("Button");
                nextBtn.innerText = "Next";
                document.body.appendChild(nextBtn);
                nextBtn.classList.add('nextBtn');
            }
            else{
                options[i].style.backgroundColor = "#f44336";
            }
            nextBtn.onclick = function(){
                currentQuestion++;
            }
        }

    }
}
loadQuestion();
