const modal = document.getElementById('modal');
const btnRegistr = document.querySelector('.registration-btn');
const span = document.getElementsByClassName('close')[0];
const saveBtn = document.querySelector('.btn-registr');

btnRegistr.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

saveBtn.onclick = function() {
    modal.style.display = 'none';
    alert('Реєстрація успішна!');
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
