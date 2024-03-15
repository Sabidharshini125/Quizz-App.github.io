const container = document.querySelector('.container');
const welcomeBox = document.querySelector('.welcome'); 
const buttonStart = document.querySelector('.buttonStart');
const questionParagrah = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const answers = document.querySelectorAll('answer'); 
const scoreSpan = document.querySelector('#score');
const buttonNext = document.querySelector('.button_next'); 

const questions = [
    {
        question:'A person crosses a 600m long street in 5 minutes.What is his speed in km per hour?',
        answers:[{text:'3.6',isAnswer:false},{text:'7.2',isAnswer:true},{text:'8.4',isAnswer:false},{text:'10',isAnswer:false}]
    },
    {
        question:"A can do work in 15days and B in 20days.If they work on it together for 4days,then the fraction of work that is left is: ",
        answers:[{text:'1/4',isAnswer:false},{text:'1/10',isAnswer:false},{text:'7/15',isAnswer:false},{text:'8/15',isAnswer:true}]

    },
    {
        question:"A fruit seller had some apples.He sells 40% apple and  still has 420 appples.Originally he had:",
        answers:[{text:'588 apples',isAnswer:false},{text:'600 apples',isAnswer:false},{text:'672 apples',isAnswer:false},{text:'700 apples',isAnswer:true}]
    },
    {
        question:"It was Sunday on Jan 1,2006.What was the day of the week on Jan1,2010?",
        answers:[{text:'Sunday',isAnswer:false},{text:'Saturday',isAnswer:false},{text:'Friday',isAnswer:true},{text:'Wednesday',isAnswer:false}]
    },
    {
        question:"If A=x % of y and B=y %of x,then which of the following is true?",
        answers:[{text:'A is smaller than B',isAnswer:false},{text:'A is greater than B',isAnswer:false},{text:'Relationship between A and B cannot be determined',isAnswer:false},{text:'None of the above',isAnswer:true}]
    }
]
let firstQuestion = Math.floor(Math.random() * 5)
nextQuestion =firstQuestion
let score = 0
buttonStart.addEventListener('click', () => {
    welcomeBox.style.display = 'none'
    container.style.display = 'grid'
    oneQuestion(firstQuestion)
});
const oneQuestion = (index) =>{
    const question =questions[index]
    questionParagrah.textContent=question.question
    question.answers.forEach(answer =>{
        const button =document.createElement('button')
        button.classList.add('answer__button')
        button.append(answer.text)
        answersContainer.appendChild(button)
        button.dataset.isCorrect =answer.isAnswer
        button.addEventListener('click', checkAnswer)
        
    })
}
const checkAnswer =(e) =>{
    const allAnswers =document.querySelectorAll('.answer__button')
    const answerBoolean =e.target.dataset.isCorrect
    if (answerBoolean === 'true'){
        e.target.classList.add('valid')
        score ++
        scoreSpan.textContent =score
    }else
    {
        e.target.classList.add('invalid')
    }
    
    allAnswers.forEach(el=>{
    el.disabled =true
    
})
}
buttonNext.addEventListener('click',()=>{
    nextQuestion --
    if(nextQuestion < 0){
        nextQuestion = questions.length + nextQuestion
    }
    if(nextQuestion === firstQuestion){
        questionParagrah.textContent='Quiz done!'
        buttonNext.style.display ='none'
        answersContainer.style.display='none'
        return

    }
    questionParagrah.textContent=''
    answersContainer.textContent=''
    oneQuestion(nextQuestion)
})
