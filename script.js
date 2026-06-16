const inputField = document.querySelector('input');

function appendToInput(value) {
    inputField.value += value;
    }

function clearInput() {
    inputField.value = '';
    }

function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
    }

function calculate() {
    try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = 'Error';
        }
    }