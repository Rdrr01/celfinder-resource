const inputField = document.getElementById('inputField');

// Cuando el input gana foco, elimina el placeholder
inputField.addEventListener('focus', function () {
    inputField.setAttribute('placeholder', '');
});

inputField.addEventListener('blur', function () {
    if (inputField.value === '') {
        inputField.setAttribute('placeholder', 'Escribe algo...');
    }
});