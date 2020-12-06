let btnStart = document.getElementById('start'),
    startScreen = document.getElementsByClassName('start-screen')[0],
    loginScreen = document.getElementsByClassName('login-screen')[0],
    btnBegin = document.getElementById('begin'),
    trainingsScreen = document.getElementsByClassName('trainings-screen')[0],
    functionalScreen = document.getElementsByClassName('functional-screen')[0],
    btnBlockFunctionalTraing = document.getElementById('btnBlockFunctionalTraing'),
    backtToTainings = document.getElementsByClassName('backt-rainings')[0],
    topBtnLeft = document.getElementsByClassName('top-btn__left')[0],
    btnGoToQuestionChips = document.getElementsByClassName('goToQuestionChips')[0],
    guestionChipsScreen = document.getElementsByClassName('guestionChips-screen')[0],
    btnBacktFunctionalScreen = document.getElementsByClassName('backt-functionalScreen')[0],
    guestionChipsNo = document.getElementsByClassName('guestionChips-no')[0],
    btnQuestionChipsNo = document.getElementById('guestionChipsNo'),
    btnQuestionChipsYes = document.getElementById('guestionChipsYes'),
    textAnswerChops = document.getElementById('answerChips'),
    backtQuestionChipsScreen = document.getElementsByClassName('backt-guestionChipsScreen')[0],
    btnGoToWorkout_01 = document.getElementById('goToWorkout_01'),
    workout_01Screen =  document.getElementsByClassName('workout_01-screen')[0],
    btnBackQuestionChipsNo = document.getElementsByClassName('back-guestionChipsNo')[0],
    showTimerAndBtn_01 = document.getElementsByClassName('showTimerAndBtn')[0],
    timerWorkout_01 = document.getElementById('timerWorkout_01'),
    btnWorkout_01 = document.getElementById('btnWorkout_01'),
    bntRelaxWorkout_01 = document.getElementById('bnt-relax_workout_01'),
    relaxBlock = document.getElementsByClassName('relax-screen')[0],
    btnBackWorkout_01 = document.getElementsByClassName('back-workout_01')[0],
    btnBackWorkout_01_2 = document.getElementsByClassName('back-workout_01')[1],
    blockEndWorkout_01 = document.getElementsByClassName('end-workout-screen')[0];


btnStart.onclick = ()=> {
    startScreen.classList.add('none');
    loginScreen.classList.remove('fadeOut');

    setTimeout(() => startScreen.classList.add('fadeOut'), 200);
    setTimeout(() => loginScreen.classList.add('fadeIn'), 200);

    loginScreen.classList.add('show');
}

btnBegin.onclick = ()=> {
    loginScreen.classList.add('none');
    trainingsScreen.classList.remove('fadeOut');

    setTimeout(() => loginScreen.classList.add('fadeOut'), 200);
    setTimeout(() => loginScreen.classList.remove('fadeIn'), 200);
    setTimeout(() => trainingsScreen.classList.add('fadeIn'), 200);

    trainingsScreen.classList.add('show');
}

btnQuestionChipsYes.onclick = ()=> {
    textAnswerChops.innerHTML = 'А вот и нет!';

    showNewBlock(guestionChipsNo,guestionChipsScreen);
}

btnQuestionChipsNo.onclick = ()=> {
    textAnswerChops.innerHTML = 'Верно, нельзя!';

    showNewBlock(guestionChipsNo,guestionChipsScreen);
}

function showNewBlock(blockSHow, blockNone) {

    blockNone.classList.add('none');
    blockSHow.classList.remove('fadeOut');
    blockSHow.classList.add('show');

    setTimeout(() => blockSHow.classList.add('fadeIn'), 200);
    setTimeout(() => blockSHow.classList.remove('none'), 100);
    setTimeout(() => blockNone.classList.add('fadeOut'), 200);
    setTimeout(() => blockNone.classList.remove('fadeIn'), 200);
}

backtToTainings.addEventListener('click', ()=>showNewBlock(trainingsScreen,functionalScreen));
topBtnLeft.addEventListener('click', ()=>showNewBlock(trainingsScreen,functionalScreen));
btnBlockFunctionalTraing.addEventListener('click', ()=>showNewBlock(functionalScreen,trainingsScreen));
btnGoToQuestionChips.addEventListener('click', ()=>showNewBlock(guestionChipsScreen,functionalScreen));
btnBacktFunctionalScreen.addEventListener('click', ()=>showNewBlock(functionalScreen,guestionChipsScreen));
backtQuestionChipsScreen.addEventListener('click', ()=>showNewBlock(guestionChipsScreen,guestionChipsNo));
btnGoToWorkout_01.addEventListener('click', ()=>showNewBlock(workout_01Screen,guestionChipsNo));

btnGoToWorkout_01.addEventListener('click', () =>showEndlock(blockEndWorkout_01,workout_01Screen));

btnBackQuestionChipsNo.addEventListener('click', ()=>showNewBlock(guestionChipsNo,workout_01Screen));

showTimerAndBtn_01.onclick = ()=> {
    timerWorkout_01.classList.toggle('none');
    btnWorkout_01.classList.toggle('none');
}

function showEndlock(blockSHow,blockNone) {

    setTimeout(() => blockSHow.classList.add('show'), 5000);
    setTimeout(() => blockSHow.classList.remove('none'), 4900);
    setTimeout(() => blockNone.classList.add('none'), 5000);

    setTimeout(() => blockSHow.classList.add('fadeIn'), 5000);
    setTimeout(() => blockSHow.classList.remove('none'), 4900);
    setTimeout(() => blockNone.classList.add('fadeOut'), 5000);
    setTimeout(() => blockNone.classList.remove('fadeIn'), 5000);
}

bntRelaxWorkout_01.addEventListener('click', ()=>showNewBlock(relaxBlock,workout_01Screen));
btnBackWorkout_01.addEventListener('click', ()=>showNewBlock(workout_01Screen,relaxBlock));
btnBackWorkout_01_2.addEventListener('click', ()=>showNewBlock(workout_01Screen,blockEndWorkout_01));

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    width: 900,
    loop: false,
    freeMode: false,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlidesBounds: true,
    slidesPerGroup : 1,
    watchSlidesProgress: true,      
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
  },
  centeredSlides: false,
});

swiper.params.speed = 100
swiper.reInit(true)