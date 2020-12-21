let guestionWorkout_07Yes = document.getElementById('guestionWorkout_07Yes'),
    guestionWorkout_07No = document.getElementById('guestionWorkout_07No');

guestionWorkout_07Yes.onclick = ()=> {
    localStorage.setItem('htmlBlockW_7', 'А вот и нет!');
}

guestionWorkout_07No.onclick = ()=> {
    localStorage.setItem('htmlBlockW_7', 'Все верно, нет!');
}


