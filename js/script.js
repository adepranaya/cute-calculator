let result = '';
const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('click', function (e) {
        switch ((key = e.target.value)) {
            case '=':
                execute();
                break;
            case 'C':
                clear();
                break;

            default:
                result += key;
                display();
                break;
        }
    });
}

function execute() {
    result = eval(result);
    document.getElementById('result').value = result;
    display();
}

function clear() {
    result = '';
    document.getElementById('result').value = result;
    display();
}

function display() {
    document.getElementById('result').value = result;
}
