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
    timer_workout_01  =document.getElementById('timer_workout_01'),
    workout_01Screen =  document.getElementsByClassName('workout_01-screen')[0],
    btnBackQuestionChipsNo = document.getElementsByClassName('back-guestionChipsNo')[0],
    showTimerAndBtn_01 = document.getElementsByClassName('showTimerAndBtn')[0],
    timerWorkout_01 = document.getElementById('timerWorkout_01'),
    btnWorkout_01 = document.getElementById('btnWorkout_01'),
    bntRelaxWorkout_01 = document.getElementById('bnt-relax_workout_01'),
    video_workout_01 = document.getElementById('video_workout_01'),
    relaxBlock = document.getElementsByClassName('relax-screen')[0],
    timer_relax_workout_01 = document.getElementById('timer_relax_workout_01'),
    btnBackWorkout_01 = document.getElementsByClassName('back-workout_01')[0],
    btnBackWorkout_01_2 = document.getElementsByClassName('back-workout_01')[1],
    btnBackWorkout_01_3 = document.getElementsByClassName('back-workout_01')[2],
    btnBackWorkout_01_4 = document.getElementsByClassName('back-workout_01')[3],
    btn_backToWorkout_01 = document.getElementById('btn-backToWorkout_01'),
    blockEndWorkout_01 = document.getElementsByClassName('end-workout-screen')[0];
    btnEndWorkout_01 = document.getElementById('endWorkout_01'),
    finalScreen = document.getElementsByClassName('final-screen')[0];

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

//Workout_01
let timerId,
    sec = document.getElementById('sec'),
    min = document.getElementById('min'),
    seconds = +sec.dataset.sec,
    minutes = +min.dataset.min,
    timerIdRelax,
    seconds_R = 30,
    minutes_R = 0;

btnGoToWorkout_01.addEventListener('click', ()=>showNewBlock(workout_01Screen,guestionChipsNo));

btnBackWorkout_01.addEventListener('click', ()=>backToWorkout_01());
btn_backToWorkout_01.addEventListener('click', ()=>backToWorkout_01());

function backToWorkout_01() {
    showNewBlock(workout_01Screen,relaxBlock);
    seconds_R = 30;
    clearTimeout(timerIdRelax);
    video_workout_01.play();
    timer();
}

btnGoToWorkout_01.onclick = ()=> {
    video_workout_01.play();

    minutes = parseInt(video_workout_01.duration / 60, 10);
    seconds = Math.floor(video_workout_01.duration % 60);
    
    timer();
}

function addValue() {
    seconds--;
        if (seconds == 0) {
            seconds = 60;
            minutes--;
        }
        if (minutes == 0 && seconds == 1) {
            clearTimeout(timerId);
            showNewBlock(blockEndWorkout_01,workout_01Screen);
            return;
        }
    timer_workout_01.innerHTML = creatTime();
    timer();
}

function timer() {
    timerId = setTimeout(addValue, 1000);
}

function creatTime() {
    let html = '<span id="min" data-min="' + minutes + '">' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + '</span>:<span id="sec" data-sec="' + seconds + '">' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00');
    return html;
 }

btnBackQuestionChipsNo.addEventListener('click', ()=>showNewBlock(guestionChipsNo,workout_01Screen));
btnBackQuestionChipsNo.onclick = ()=> {
    video_workout_01.pause();
}

showTimerAndBtn_01.onclick = ()=> {
    timerWorkout_01.classList.toggle('none');
    btnWorkout_01.classList.toggle('none');
}

bntRelaxWorkout_01.onclick = ()=> {
    showNewBlock(relaxBlock,workout_01Screen);
    video_workout_01.pause();
    clearTimeout(timerId);
    timerRelax();
}
function timerRelax() {

    timerThirtySeconds();

    function addValueRelax() {
        seconds_R--;
        console.log(seconds_R)
            if (seconds_R == 1) {
                seconds_R = 30;
                clearTimeout(timerIdRelax);
                showNewBlock(workout_01Screen,relaxBlock);
                video_workout_01.play();
                timer();
                return;
            }
        
        timer_relax_workout_01.innerHTML = creatTime();
        timerThirtySeconds();
    }

    function timerThirtySeconds() {
        timerIdRelax = setTimeout(addValueRelax, 1000);
    }

    function creatTime() {
        let html = '<span id="min_relax" data-min="' + minutes_R + '">' + (minutes_R ? (minutes_R > 9 ? minutes_R : '0' + minutes_R) : '00') + '</span>:<span id="sec_relax" data-sec="' + seconds_R + '">' + (seconds_R ? (seconds_R > 9 ? seconds_R : '0' + seconds_R) : '00');
        return html;
    }

}

btnBackWorkout_01_2.addEventListener('click', ()=>backToWorkoutBegin_01(finalScreen,blockEndWorkout_01));
btnBackWorkout_01_3.addEventListener('click', ()=>backToWorkoutBegin_01(finalScreen,blockEndWorkout_01));
btnBackWorkout_01_4.addEventListener('click', ()=>backToWorkoutBegin_01(finalScreen,blockEndWorkout_01));

function backToWorkoutBegin_01() {
    showNewBlock(workout_01Screen,blockEndWorkout_01);
    video_workout_01.play();
    minutes = parseInt(video_workout_01.duration / 60, 10);
    seconds = Math.floor(video_workout_01.duration % 60);
    timer();
}

btnEndWorkout_01.addEventListener('click', ()=>showNewBlock(finalScreen,blockEndWorkout_01));



//swiper
let swiper = new Swiper('.swiper-container', {
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