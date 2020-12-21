let btnQuestionChipsNo = document.getElementById('guestionChipsNo'),
    btnQuestionChipsYes = document.getElementById('guestionChipsYes');

btnQuestionChipsYes.onclick = ()=> {
    localStorage.setItem('htmlPage4', 'А вот и нет!')
}

btnQuestionChipsNo.onclick = ()=> {
    localStorage.setItem('htmlPage4', 'Верно, нельзя!')
}