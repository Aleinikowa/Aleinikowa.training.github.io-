let blockBtnNo = document.getElementsByClassName('bg')[0];

blockBtnNo.onclick = (event)=> {
    let target = event.target;

    if (target.classList.contains('guestionWorkout_06') ) {
        localStorage.setItem('htmlBlockW_6','На самом деле<br>все необходимы!');
    } else {
        localStorage.setItem('htmlBlockW_6','Вы правы,<br>все необходимы!');

    }

}
