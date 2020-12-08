import { showNewBlock } from './general.js';

let guestionWorkout_05Yes = document.getElementById('guestionWorkout_05Yes'),
    guestionWorkout_05No = document.getElementById('guestionWorkout_05No'),
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerText = document.getElementById('answerText'),
    answerScreen = document.getElementsByClassName('answer-screen')[0];

guestionWorkout_05Yes.onclick = ()=> {
    answerText.innerHTML = 'А вот и нет!';
    showNewBlock(answerScreen,guestionScreen);
}

guestionWorkout_05No.onclick = ()=> {
    answerText.innerHTML = 'Абсолютно верно!';
    showNewBlock(answerScreen,guestionScreen);
}

backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));

