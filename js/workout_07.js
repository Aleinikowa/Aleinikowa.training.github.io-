import { showNewBlock } from './general.js';

let guestionWorkout_07Yes = document.getElementById('guestionWorkout_07Yes'),
    guestionWorkout_07No = document.getElementById('guestionWorkout_07No'),
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerText = document.getElementById('answerText'),
    answerScreen = document.getElementsByClassName('answer-screen')[0];

    guestionWorkout_07Yes.onclick = ()=> {
    answerText.innerHTML = 'А вот и нет!';
    showNewBlock(answerScreen,guestionScreen);
}

guestionWorkout_07No.onclick = ()=> {
    answerText.innerHTML = 'Все верно, нет!';
    showNewBlock(answerScreen,guestionScreen);
}

backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));

