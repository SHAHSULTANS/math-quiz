
const questionEl = document.getElementById("question");
const questionForm = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let totalquestion=0;
let storeAnswer;
let score = 0;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//console.log(randomNumber(20,30));

const generateQuestion = () => {
    totalquestion++;
    const number1 = randomNumber(1, 10);
    const number2 = randomNumber(1, 10);
    const questionType=randomNumber(1,4);
    // const question=`Q. What is ${number1} multiply by ${number2}`;
    // const answer= number1*number2;
    let question, answer;

    if(number2>number1 & questionType>2){
        let temp=number1;
        number1=number2;
        number2=temp;
    }



    switch (questionType) {
        case 1:
            question = `Q. What is ${number1} multiply by ${number2}`;
            answer = number1 * number2;
            break;
        case 2:
            question = `Q. What is ${number1} Add to ${number2}`;
            answer = number1 + number2;
            break;
        case 3:
            question = `Q. What is ${number1} Divide by ${number2}`;
            answer = number1 / number2;
            break;
        default:
            question = `Q. What is ${number1} Subtract from ${number2}`;
            answer = number1 - number2;
        
    }
    return { question, answer };

}
//console.log(generateQuestion());

const showQuestion = () => {
    const { question, answer } = generateQuestion();
    questionEl.innerText = question;
    storeAnswer = answer;
}
showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();

    const formData = new FormData(questionForm);
    const userAnswer = parseInt(formData.get("answer"));

    if (userAnswer == storeAnswer) {
        score += 1;
    }
    else {
        // score =- 1;
    }
    scoreEl.innerText = score+ ` out of ${totalquestion}`;
    console.log(userAnswer, storeAnswer);
    showQuestion();
    document.getElementById("answerInput").value = "";

    //console.log('answer',formData.get('answer'));

}