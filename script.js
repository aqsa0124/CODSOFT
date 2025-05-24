function appendValue(value) {
    document.getElementsById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementsById('display').value);

        document.getElementById('display').value = result;
    } catch{

        document.getElementById('display').value = 'Error';
    }
}