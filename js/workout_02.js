import { showNewBlock } from './general.js';

let guestionWorkout_02Yes = document.getElementById('guestionWorkout_02Yes'),
    guestionWorkout_02No = document.getElementById('guestionWorkout_02No'),
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerText = document.getElementById('answerText'),
    answerScreen = document.getElementsByClassName('answer-screen')[0],
    moreScreen = document.getElementsByClassName('more-screen')[0],
    btmMore = document.getElementById('more'),
    backToanswerScreen = document.getElementById('backToanswerScreen');

guestionWorkout_02Yes.onclick = ()=> {
    answerText.innerHTML = 'А я не готова!';
    showNewBlock(answerScreen,guestionScreen);
}

guestionWorkout_02No.onclick = ()=> {
    answerText.innerHTML = 'Я тоже нет!';
    showNewBlock(answerScreen,guestionScreen);
}

backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));
btmMore.addEventListener('click', ()=>showNewBlock(moreScreen,answerScreen));
backToanswerScreen.addEventListener('click', ()=>showNewBlock(answerScreen,moreScreen));
