import { showNewBlock } from './general.js';

let guestionWorkout_03Yes = document.getElementById('guestionWorkout_03Yes'),
    guestionWorkout_03No = document.getElementById('guestionWorkout_03No'),
    guestionScreen = document.getElementsByClassName('guestion-screen')[0],
    backToQuestionScreen = document.getElementById('backToQuestionScreen'),
    answerScreen = document.getElementsByClassName('answer-screen')[0];

guestionWorkout_03Yes.addEventListener('click', ()=>showNewBlock(answerScreen,guestionScreen));
guestionWorkout_03No.addEventListener('click', ()=>showNewBlock(answerScreen,guestionScreen,));
backToQuestionScreen.addEventListener('click', ()=>showNewBlock(guestionScreen,answerScreen));
