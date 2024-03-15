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
        question:'What happens if non static members are used in static member function',
        answers:[{text:'Executes fine',isAnswer:false},{text:'Compile time error',isAnswer:true},{text:'Run time error',isAnswer:true},{text:'Executes if that member function is not used',isAnswer:false}]
    },
    {
        question:"In multilevel inheritance ,which is the most significant feature of OOP used",
        answers:[{text:'Code efficiency',isAnswer:false},{text:'code readability',isAnswer:false},{text:'code reusability',isAnswer:true},{text:'Flexibility',isAnswer:false}]

    },
    {
        question:"Which header file is required in C++ to use OOP?",
        answers:[{text:'OOPS can be used without any header file',isAnswer:true},{text:'stdio.h',isAnswer:false},{text:'stdlib.h',isAnswer:false},{text:'iostream.h',isAnswer:false}]
    },
    {
        question:"  When is the object created with a new keyword ",
        answers:[{text:'run time',isAnswer:true},{text:'compile time',isAnswer:false},{text:'Depends on the code',isAnswer:true},{text:'None',isAnswer:false}]
    },
    {
        question:"OOPS stands for",
        answers:[{text:'Object Oriented Procedural Language ',isAnswer:false},{text:'Object Object Programming Language',isAnswer:false},{text:'Oriented Object Programming Language',isAnswer:false},{text:'Object Oriented Programming Language',isAnswer:true}]
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
