let guestionWorkout_05Yes = document.getElementById('guestionWorkout_05Yes'),
guestionWorkout_05No = document.getElementById('guestionWorkout_05No');

    guestionWorkout_05Yes.onclick = ()=> {
    localStorage.setItem('htmlBlockW_5','А вот и нет!<span>В настоящее время существует множественное множество диет.<span>');
}

guestionWorkout_05No.onclick = ()=> {
    localStorage.setItem('htmlBlockW_5', 'Вы правы!<span>В настоящее время существует множество диет.</span>');
}

