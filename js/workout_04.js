import { showNewBlock } from './general.js';

let guestionWorkout_04Yes = document.getElementById('guestionWorkout_04Yes'),
    guestionWorkout_04No = document.getElementById('guestionWorkout_04No'),
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerText = document.getElementById('answerText'),
    answerScreen = document.getElementsByClassName('answer-screen')[0],
    moreScreen = document.getElementsByClassName('more-screen')[0],
    btmMore = document.getElementById('more');

guestionWorkout_04Yes.onclick = ()=> {
    answerText.innerHTML = 'А вот и нет!<span>В настоящее время существует множественное множество диет.<span>';
    showNewBlock(answerScreen,guestionScreen);
}

guestionWorkout_04No.onclick = ()=> {
    answerText.innerHTML = 'Вы правы!<span>В настоящее время существует множество диет.</span>';
    showNewBlock(answerScreen,guestionScreen);
}

backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));
btmMore.addEventListener('click', ()=>showNewBlock(moreScreen,answerScreen));

