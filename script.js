function generateNumber() {

    const min = Math.ceil(document.querySelector('.input1').value);
    const max = Math.floor(document.querySelector('.input2').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('.numero').innerHTML = result;

    if (isNaN(result) || min == max) {
        document.querySelector('.numero').innerHTML = 'Digite um numero valido';
        document.querySelector('.numero').style.fontSize = '20px';
        }

    else{
        document.querySelector('.numero').innerHTML = result;
        document.querySelector('.numero').style.fontSize = '50px';
    }

    if (min > max) {
        document.querySelector('.numero').innerHTML = 'O primeiro numero deve ser menor que o segundo';
        document.querySelector('.numero').style.fontSize = '20px';
    }

    else if ((result) || min < max ) {
        document.querySelector('.numero').innerHTML = result;
        document.querySelector('.numero').style.fontSize = '50px';
    }
}
