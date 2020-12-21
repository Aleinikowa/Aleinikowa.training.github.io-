let backtQuestionChipsScreen = document.getElementsByClassName('backt-guestionChipsScreen')[0],
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
    backToWorkoutFromRelax = document.getElementById('backToWorkoutFromRelax'),
    backToWorkoutFromEnd = document.getElementById('backToWorkoutFromEnd'),
    btn_backToWorkout_01 = document.getElementById('btn-backToWorkout_01'),
    blockEndWorkout_01 = document.getElementsByClassName('end-workout-screen')[0],
    timerId,
    sec = document.getElementById('sec'),
    min = document.getElementById('min'),
    seconds = +sec.dataset.sec,
    minutes = +min.dataset.min,
    timerIdRelax,
    seconds_R = 30,
    minutes_R = 0;

// localStorage.clear();

var i = setInterval(function() {
	if(video_workout_01.readyState > 0) {
		minutes = parseInt(video_workout_01.duration / 60, 10);
        seconds = Math.floor(video_workout_01.duration % 60);

        console.log(video_workout_01.duration )
        localStorage.setItem('min', minutes);
        localStorage.setItem('sec', seconds);
        video_workout_01.play();

		clearInterval(i);
	}
}, 200);

// minutes = parseInt(video_workout_01.duration / 60, 10);
// seconds = Math.floor(video_workout_01.duration % 60);

// console.log(video_workout_01.duration )
// localStorage.setItem('min', minutes);
// localStorage.setItem('sec', seconds);
// video_workout_01.play();

timer();

backToWorkoutFromRelax.addEventListener('click', ()=>backToWorkout_01());
btn_backToWorkout_01.addEventListener('click', ()=>backToWorkout_01());

function backToWorkout_01() {
    showNewBlock(workout_01Screen,relaxBlock);
    seconds_R = 30;
    clearTimeout(timerIdRelax);
    video_workout_01.play();
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
            video_workout_01.pause();
            setTimeout(() => showNewBlock(blockEndWorkout_01,workout_01Screen), 100);
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

btnBackQuestionChipsNo.onclick = ()=> {
    clearTimeout(timerId);
    showNewBlock(guestionChipsNo,workout_01Screen);
    timer_workout_01.innerHTML = `<span id="min" data-min="0">${localStorage.getItem('min')}</span>:<span id="sec" data-sec="0">${localStorage.getItem('sec')}</span>`;
    video_workout_01.pause();
    video_workout_01.currentTime = 0;
}

showTimerAndBtn_01.onclick = ()=> {
    timerWorkout_01.classList.toggle('fadeOut');
    btnWorkout_01.classList.toggle('fadeOut');
    timerWorkout_01.classList.toggle('fadeIn');
    btnWorkout_01.classList.toggle('fadeIn');
}

bntRelaxWorkout_01.onclick = ()=> {
    timer_relax_workout_01.innerHTML = '<span id="min_relax">00</span>:<span id="sec_relax">30</span>';
    video_workout_01.pause();
    clearTimeout(timerId);
    timerRelax();
    showNewBlock(relaxBlock,workout_01Screen);
}
function timerRelax() {

    timerThirtySeconds();

    function addValueRelax() {
        seconds_R--;
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
backToWorkoutFromEnd.addEventListener('click', ()=>backToWorkoutBegin_01());

function backToWorkoutBegin_01() {
    video_workout_01.currentTime = 0;
    timer_workout_01.innerHTML = `<span id="min" data-min="0">${localStorage.getItem('min')}</span>:<span id="sec" data-sec="0">${localStorage.getItem('sec')}</span>`;
    showNewBlock(workout_01Screen,blockEndWorkout_01);
    video_workout_01.play();
    minutes = parseInt(video_workout_01.duration / 60, 10);
    seconds = Math.floor(video_workout_01.duration % 60);
    timer();
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
