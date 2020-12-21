localStorage.clear();

let goToQuestions = document.getElementById('goToQuestions'),
    testScreen = document.getElementsByClassName('test-screen')[0],
    guestionScreen_01 = document.getElementsByClassName('question-screen1')[0],
    questionScreen_02 = document.getElementsByClassName('question-screen2')[0],
    guestionScreen_03 = document.getElementsByClassName('question-screen3')[0],
    guestionScreen_04 = document.getElementsByClassName('question-screen4')[0],
    guestionScreen_05 = document.getElementsByClassName('question-screen5')[0],
    guestionScreen_06 = document.getElementsByClassName('question-screen6')[0],
    guestionScreen_07 = document.getElementsByClassName('question-screen7')[0],
    guestionScreen_08 = document.getElementsByClassName('question-screen8')[0],
    guestionScreen_09 = document.getElementsByClassName('question-screen9')[0],
    guestionScreen_10 = document.getElementsByClassName('question-screen10')[0],
    questionScreenEnd =document.getElementsByClassName('test-screen-end')[0],
    backToTestScreen = document.getElementsByClassName('backToTestScreen')[0],
    backToTestScreen_bottom = document.getElementsByClassName('backToTestScreen')[1],
    inputRadio_01 = document.getElementsByClassName('question1'),
    inputRadio_02 = document.getElementsByClassName('question2'),
    inputRadio_03 = document.getElementsByClassName('question3'),
    inputRadio_04 = document.getElementsByClassName('question4'),
    inputRadio_05 = document.getElementsByClassName('question5'),
    inputRadio_06 = document.getElementsByClassName('question6'),
    inputRadio_07 = document.getElementsByClassName('question7'),
    inputRadio_08 = document.getElementsByClassName('question8'),
    inputRadio_09 = document.getElementsByClassName('question9'),
    inputRadio_10 = document.getElementsByClassName('question10'),
    blockBtn_01 = document.getElementsByClassName('btn_01')[0],
    blockBtn_02 = document.getElementsByClassName('btn_02')[0],
    blockBtn_03 = document.getElementsByClassName('btn_03')[0],
    blockBtn_04 = document.getElementsByClassName('btn_04')[0],
    blockBtn_05 = document.getElementsByClassName('btn_05')[0],
    blockBtn_06 = document.getElementsByClassName('btn_06')[0],
    blockBtn_07 = document.getElementsByClassName('btn_07')[0],
    blockBtn_08 = document.getElementsByClassName('btn_08')[0],
    blockBtn_09 = document.getElementsByClassName('btn_09')[0],
    blockBtn_10 = document.getElementsByClassName('btn_10')[0],
    goToQuestion_02 = document.getElementById('goToQuestion_02'),
    goToQuestion_03 = document.getElementById('goToQuestion_03'),
    goToQuestion_04 = document.getElementById('goToQuestion_04'),
    goToQuestion_05 = document.getElementById('goToQuestion_05'),
    goToQuestion_06 = document.getElementById('goToQuestion_06'),
    goToQuestion_07 = document.getElementById('goToQuestion_07'),
    goToQuestion_08 = document.getElementById('goToQuestion_08'),
    goToQuestion_09 = document.getElementById('goToQuestion_09'),
    goToQuestion_10 = document.getElementById('goToQuestion_10'),
    backToQuestion_01 = document.getElementsByClassName('backToQuestion_01')[0],
    backToQuestion_02 = document.getElementsByClassName('backToQuestion_02')[0],
    backToQuestion_03 = document.getElementsByClassName('backToQuestion_03')[0],
    backToQuestion_04 = document.getElementsByClassName('backToQuestion_04')[0],
    backToQuestion_05 = document.getElementsByClassName('backToQuestion_05')[0],
    backToQuestion_06 = document.getElementsByClassName('backToQuestion_06')[0],
    backToQuestion_07 = document.getElementsByClassName('backToQuestion_07')[0],
    backToQuestion_08 = document.getElementsByClassName('backToQuestion_08')[0],
    backToQuestion_09 = document.getElementsByClassName('backToQuestion_09')[0],
    backToQuestion_01_bottom = document.getElementsByClassName('backToQuestion_01_bottom')[0],
    backToQuestion_02_bottom = document.getElementsByClassName('backToQuestion_02_bottom')[0],
    backToQuestion_03_bottom = document.getElementsByClassName('backToQuestion_03_bottom')[0],
    backToQuestion_04_bottom = document.getElementsByClassName('backToQuestion_04_bottom')[0],
    backToQuestion_05_bottom = document.getElementsByClassName('backToQuestion_05_bottom')[0],
    backToQuestion_06_bottom = document.getElementsByClassName('backToQuestion_06_bottom')[0],
    backToQuestion_07_bottom = document.getElementsByClassName('backToQuestion_07_bottom')[0],
    backToQuestion_08_bottom = document.getElementsByClassName('backToQuestion_08_bottom')[0],
    text_08 = document.getElementById('text_08'),
    text_09 = document.getElementById('text_09'),
    goToEndScreen = document.getElementById('goToEndScreen');

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

goToQuestion_04.onclick = ()=> {
    showNewBlock(guestionScreen_04,guestionScreen_03);
    сheckRadio(inputRadio_04,blockBtn_04,goToQuestion_05);
}

goToQuestion_05.onclick = ()=> {
    showNewBlock(guestionScreen_05,guestionScreen_04);
    сheckRadio(inputRadio_05,blockBtn_05,goToQuestion_06);
}

goToQuestion_06.onclick = ()=> {
    showNewBlock(guestionScreen_06,guestionScreen_05);
    сheckRadio(inputRadio_06,blockBtn_06,goToQuestion_07);
}

goToQuestion_07.onclick = ()=> {
    showNewBlock(guestionScreen_07,guestionScreen_06);
    сheckRadio(inputRadio_07,blockBtn_07,goToQuestion_08);
}

goToQuestion_08.onclick = ()=> {
    showNewBlock(guestionScreen_08,guestionScreen_07);
    сheckRadio(inputRadio_08,blockBtn_08,goToQuestion_09);
}

goToQuestion_09.onclick = ()=> {
    showNewBlock(guestionScreen_09,guestionScreen_08);
    сheckRadio(inputRadio_09,blockBtn_09,goToQuestion_10);
}

goToQuestion_10.onclick = ()=> {
    showNewBlock(guestionScreen_10,guestionScreen_09);
    сheckRadio(inputRadio_10,blockBtn_10,goToEndScreen);
}



backToQuestion_01.addEventListener('click', ()=>showNewBlock(guestionScreen_01,questionScreen_02));
backToQuestion_01_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_01,questionScreen_02));
backToQuestion_02.addEventListener('click', ()=>showNewBlock(questionScreen_02,guestionScreen_03));
backToQuestion_02_bottom.addEventListener('click', ()=>showNewBlock(questionScreen_02,guestionScreen_03));
backToQuestion_03.addEventListener('click', ()=>showNewBlock(guestionScreen_03,guestionScreen_04));
backToQuestion_03_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_03,guestionScreen_04));
backToQuestion_04.addEventListener('click', ()=>showNewBlock(guestionScreen_04,guestionScreen_05));
backToQuestion_04_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_04,guestionScreen_05));
backToQuestion_05.addEventListener('click', ()=>showNewBlock(guestionScreen_05,guestionScreen_06));
backToQuestion_05_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_05,guestionScreen_06));
backToQuestion_06.addEventListener('click', ()=>showNewBlock(guestionScreen_06,guestionScreen_07));
backToQuestion_06_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_06,guestionScreen_07));
backToQuestion_07.addEventListener('click', ()=>showNewBlock(guestionScreen_07,guestionScreen_08));
backToQuestion_07_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_07,guestionScreen_08));
backToQuestion_08.addEventListener('click', ()=>showNewBlock(guestionScreen_08,guestionScreen_09));
backToQuestion_08_bottom.addEventListener('click', ()=>showNewBlock(guestionScreen_08,guestionScreen_09));
backToQuestion_09.addEventListener('click', ()=>showNewBlock(guestionScreen_09,guestionScreen_10));
goToEndScreen.addEventListener('click', ()=>showNewBlock(questionScreenEnd,guestionScreen_10));

function сheckRadio(listRadioBtn,blockBtn,buttonNext) {
    for (let i = 0; i < listRadioBtn.length; i++) {
        listRadioBtn[i].addEventListener('change', function() {
            
            localStorage.setItem(this.dataset.key,this.value);
            changeBack(blockBtn,buttonNext); 
        });
    }


}

function changeBack(blockBtn,buttonNext) {
    if (buttonNext.classList.contains('btn-main')) {
        blockBtn.classList.add('back-color');
        buttonNext.classList.add('main-btn-color');
    }
    blockBtn.classList.add('back-color');
    buttonNext.classList.add('btn-color');
    buttonNext.classList.add('text-color');
    buttonNext.removeAttribute('disabled');
}

text_08.addEventListener('keyup', ()=>checkText(inputRadio_08,text_08,blockBtn_08,goToQuestion_09));
text_09.addEventListener('keyup', ()=>checkText(inputRadio_09,text_09,blockBtn_09,goToQuestion_10));


function checkText(input,blockBtn,buttonNext) {
    if (input.value != '') {
        localStorage.setItem(input.dataset.key,input.value);
        changeBack(blockBtn,buttonNext);
    }
    if (input.value == '') {
        blockBtn.classList.toggle('back-color');
        buttonNext.classList.toggle('btn-color');
        buttonNext.classList.toggle('text-color');
        buttonNext.setAttribute('disabled', 'disabled');
    }
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

