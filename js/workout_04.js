let guestionWorkout_04Yes = document.getElementById('guestionWorkout_04Yes'),
    guestionWorkout_04No = document.getElementById('guestionWorkout_04No');

guestionWorkout_04Yes.onclick = ()=> {
    localStorage.setItem('htmlBlockW_4','А вот и нет!<span>В настоящее время существует множественное множество диет.<span>');
}

guestionWorkout_04No.onclick = ()=> {
    localStorage.setItem('htmlBlockW_4', 'Вы правы!<span>В настоящее время существует множество диет.</span>');
}

