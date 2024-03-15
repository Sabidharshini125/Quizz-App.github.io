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
        question:'Which method is used to update the state of component',
        answers:[{text:'render()',isAnswer:false},{text:'setState()method',isAnswer:true},{text:'routes()',isAnswer:false},{text:'componentDidUpdate()',isAnswer:false}]
    },
    {
        question:"What is props",
        answers:[{text:'To pass components from child to parent',isAnswer:false},{text:'To pass component from parent to grandchild',isAnswer:false},{text:'To pass component from parent to child',isAnswer:true},{text:'To pass components among themselves',isAnswer:false}]

    },
    {
        question:"Why does a component require a render() method",
        answers:[{text:'to return HTML',isAnswer:true},{text:'to set state',isAnswer:false},{text:'to call another component',isAnswer:false},{text:'to initiate a component',isAnswer:false}]
    },
    {
        question:"  Why we cannot define setState() inside render() function?",
        answers:[{text:'it will lead to infinite loop sice defining it will call render again',isAnswer:true},{text:'since it update the state manually',isAnswer:false},{text:'setState update the state',isAnswer:false},{text:'Since it updates the state manually',isAnswer:false}]
    },
    {
        question:"The ____________ method is called when the component gets updated",
        answers:[{text:'constructor() ',isAnswer:false},{text:'render()',isAnswer:true},{text:'setState()',isAnswer:false},{text:'componentDidUpdate()',isAnswer:false}]
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
