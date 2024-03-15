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
        question:'Let f:[2:) -> R be the function defined by f(x)=x^2 - 4x + 5,then the range of f is',
        answers:[{text:'R',isAnswer:false},{text:'[4,∞)',isAnswer:false},{text:'[1,∞)',isAnswer:true},{text:'[5,∞)',isAnswer:false}]
    },
    {
        question:"The area of a triangle with vertices(-3,8),(3,0) and(0,k) is 9 sq.units.The value of k will be",
        answers:[{text:'9',isAnswer:false},{text:'3',isAnswer:true},{text:'-9',isAnswer:false},{text:'6',isAnswer:false}]

    },
    {
        question:"If (d/dx) f(x) is g(x), then the antiderivative of g(x) is",
        answers:[{text:'f(x)',isAnswer:true},{text:'g(x)',isAnswer:false},{text:'f(x)g(x)',isAnswer:false},{text:'none of the above',isAnswer:false}]
    },
    {
        question:"Which of the following numbers have only two factors,one and the number itself",
        answers:[{text:'37+1',isAnswer:false},{text:'37+37',isAnswer:false},{text:'37X1',isAnswer:true},{text:'37X37',isAnswer:false}]
    },
    {
        question:"I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?",
        answers:[{text:'71',isAnswer:false},{text:'73',isAnswer:false},{text:'75',isAnswer:false},{text:'77',isAnswer:true}]
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
