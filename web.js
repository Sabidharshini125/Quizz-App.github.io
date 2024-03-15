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
        question:'Which part of the webdevelopment is responsible for handling data storage retrieval?',
        answers:[{text:'Front-end development',isAnswer:false},{text:'Back-end development',isAnswer:true},{text:'Full-Stack development',isAnswer:false},{text:'Middleware development',isAnswer:false}]
    },
    {
        question:"What is the purpose of the Script tag in HTML",
        answers:[{text:'To create hyperlinks',isAnswer:false},{text:'to incude external css tyle',isAnswer:false},{text:'to include external Javascript code',isAnswer:true},{text:'To define  the pages structure',isAnswer:false}]

    },
    {
        question:"Whic tag is used to go the next line?",
        answers:[{text:'<br>',isAnswer:true},{text:'<line>',isAnswer:false},{text:'<p>',isAnswer:false},{text:'<next>',isAnswer:false}]
    },
    {
        question:"  What is the correct syntax for creating a CSS class called highlight with a red text color?",
        answers:[{text:'.highlight{color:red;}',isAnswer:true},{text:'compile time',isAnswer:false},{text:'Depends on the code',isAnswer:false},{text:'None',isAnswer:false}]
    },
    {
        question:"  Which is the popular front-end development framework maintained by google",
        answers:[{text:'React ',isAnswer:false},{text:'Angular',isAnswer:true},{text:'Vue.js',isAnswer:false},{text:'Django',isAnswer:false}]
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
