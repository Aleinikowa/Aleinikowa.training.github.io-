import { showNewBlock } from './general.js';

let blockBtnNo = document.getElementsByClassName('bg')[0],
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerText = document.getElementById('answerText'),
    answerScreen = document.getElementsByClassName('answer-screen')[0];

guestionWorkout_06Yes.onclick = ()=> {
    answerText.innerHTML = 'Вы правы,<br>все необходимы!';
    showNewBlock(answerScreen,guestionScreen);
}

blockBtnNo.onclick = (event)=> {
    let target = event.target;

    if (target.classList.contains('guestionWorkout_06') ) {
        answerText.innerHTML = 'На самом деле<br>все необходимы!';
        showNewBlock(answerScreen,guestionScreen);
    }
}

backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));

