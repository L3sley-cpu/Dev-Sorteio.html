function generateNumber() {

    const min = Math.ceil(document.querySelector('.input1').value);
    const max = Math.floor(document.querySelector('.input2').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('.numero').innerHTML = result;

    if (isNaN(result) || min == max) {
        document.querySelector('.numero').innerHTML = 'Erro';
    }

    else if ((result) || min < max) {
        document.querySelector('.numero').innerHTML = 'Erro';
    }
}
