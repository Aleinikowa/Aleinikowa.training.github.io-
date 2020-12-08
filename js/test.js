import { showNewBlock } from './general.js';

let goToQuestions = document.getElementById('goToQuestions'),
    testScreen = document.getElementsByClassName('test-screen')[0],
    guestionScreen = document.getElementsByClassName('question-screen')[0],
    backToTestScreen = document.getElementsByClassName('backToTestScreen')[0],
    backToTestScreen_bottom = document.getElementsByClassName('backToTestScreen')[1],
    inputRadio = document.getElementsByClassName('question1'),
    blockBtn = document.getElementsByClassName('btn')[0],
    goToNextQuestion = document.getElementsByClassName('goToNextQuestion')[0],
    textBtn = document.getElementById('textBtn');

goToQuestions.onclick = ()=> {
    showNewBlock(guestionScreen,testScreen);
}

backToTestScreen.addEventListener('click', ()=>showNewBlock(testScreen,guestionScreen));
backToTestScreen_bottom.addEventListener('click', ()=>showNewBlock(testScreen,guestionScreen));


for (var i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener('change', function() {
        
        localStorage.setItem(this.dataset.key,this.value);
        chageBack(); 
    });
}

function chageBack() {
    blockBtn.classList.add('back-color');
    goToNextQuestion.classList.add('btn-color');
    textBtn.classList.add('text-color');
}