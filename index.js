
const questionEl=document.getElementById("question");
const questionForm=document.getElementById("questionForm");
const scoreEl=document.getElementById("score");

let storeAnswer;
let score=0;

const randomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
};
//console.log(randomNumber(20,30));

const generateQuestion=()=>{
    const number1=randomNumber(1,10);
    const number2=randomNumber(1,10);
    const question=`Q. What is ${number1} multiply by ${number2}`;
    const answer= number1*number2;
    return {question,answer};
     
}
//console.log(generateQuestion());

const showQuestion=()=>{
    const {question,answer}=generateQuestion();
    questionEl.innerText=question;
    storeAnswer=answer;
}
showQuestion();


const checkAnswer=(event)=>{
    event.preventDefault();

    const formData=new FormData(questionForm);
    const userAnswer=parseInt(formData.get("answer"));

    if(userAnswer==storeAnswer){
        score+=1;
    }
    else{
        score-1;
    }
    console.log(userAnswer, storeAnswer);
    document.getElementById("answerInput").value="";
    showQuestion();

    scoreEl.innerText=score;
    //console.log('answer',formData.get('answer'));

}