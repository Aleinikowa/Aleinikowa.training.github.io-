
let guestionWorkout_02Yes = document.getElementById('guestionWorkout_02Yes'),
    guestionWorkout_02No = document.getElementById('guestionWorkout_02No');

guestionWorkout_02Yes.onclick = ()=> {
    localStorage.setItem('htmlBlockW_2', 'А я не готова!');
}

guestionWorkout_02No.onclick = ()=> {
    localStorage.setItem('htmlBlockW_2', 'Я тоже нет!');
}
