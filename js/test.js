import { showNewBlock } from './general.js';

let goToQuestions = document.getElementById('goToQuestions'),
    testScreen = document.getElementsByClassName('test-screen')[0],
    guestionScreen_01 = document.getElementsByClassName('question-screen1')[0],
    questionScreen_02 = document.getElementsByClassName('question-screen2')[0],
    guestionScreen_03 = document.getElementsByClassName('question-screen3')[0],
    backToTestScreen = document.getElementsByClassName('backToTestScreen')[0],
    backToTestScreen_bottom = document.getElementsByClassName('backToTestScreen')[1],
    inputRadio_01 = document.getElementsByClassName('question1'),
    inputRadio_02 = document.getElementsByClassName('question2'),
    inputRadio_03 = document.getElementsByClassName('question3'),
    blockBtn_01 = document.getElementsByClassName('btn_01')[0],
    blockBtn_02 = document.getElementsByClassName('btn_02')[0],
    blockBtn_03 = document.getElementsByClassName('btn_03')[0],
    goToQuestion_02 = document.getElementById('goToQuestion_02'),
    goToQuestion_03 = document.getElementById('goToQuestion_03'),
    goToQuestion_04 = document.getElementById('goToQuestion_04'),
    backToQuestion_01 = document.getElementsByClassName('backToQuestion_01')[0],
    backToQuestion_02 = document.getElementsByClassName('backToQuestion_02')[0],
    backToQuestion_01_bottom = document.getElementsByClassName('backToQuestion_01_bottom')[0],
    backToQuestion_02_bottom = document.getElementsByClassName('backToQuestion_02_bottom')[0]


goToQuestions.onclick = ()=> {
    showNewBlock(guestionScreen_01,testScreen);
    сheckRadio(inputRadio_01,blockBtn_01,goToQuestion_02);
}

backToTestScreen.addEventListener('click', ()=>showNewBlock(testScreen,guestionScreen_01));
backToTestScreen_bottom.addEventListener('click', ()=>showNewBlock(testScreen,guestionScreen_01));


goToQuestion_02.onclick = ()=> {
    showNewBlock(questionScreen_02,guestionScreen_01);
    сheckRadio(inputRadio_02,blockBtn_02,goToQuestion_03);
}

goToQuestion_03.onclick = ()=> {
    showNewBlock(guestionScreen_03,questionScreen_02);
    сheckRadio(inputRadio_03,blockBtn_03,goToQuestion_04);
}

backToQuestion_01.addEventListener('click', ()=>showNewBlock(guestionScreen_01,questionScreen_02));
backToQuestion_01_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_01,questionScreen_02));
goToQuestion_03.addEventListener('click', ()=>showNewBlock(guestionScreen_03,questionScreen_02));
backToQuestion_02.addEventListener('click', ()=>showNewBlock(questionScreen_02,guestionScreen_03));
backToQuestion_02_bottom.addEventListener('click', ()=>showNewBlock(questionScreen_02,guestionScreen_03));

function сheckRadio(listRadioBtn,blockBtn,buttonNext) {
    for (var i = 0; i < listRadioBtn.length; i++) {
        listRadioBtn[i].addEventListener('change', function() {
            
            localStorage.setItem(this.dataset.key,this.value);
            changeBack(blockBtn,buttonNext); 
        });
    }
    
}

function changeBack(blockBtn,buttonNext) {
    blockBtn.classList.add('back-color');
    buttonNext.classList.add('btn-color');
    buttonNext.classList.add('text-color');
    buttonNext.removeAttribute('disabled');
}