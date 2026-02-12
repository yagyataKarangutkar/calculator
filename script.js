const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const value = e.target.innerText;

        if (value === 'AC') {
            screenDisplay.innerText = "";
        } 
        else if (value === 'DEL') {
            screenDisplay.innerText = screenDisplay.innerText.slice(0, -1);
        } 
        else if (value === '=') {
            try {
                screenDisplay.innerText = eval(screenDisplay.innerText);
            } catch {
                screenDisplay.innerText = "Error";
            }
        }
    
        else if (value === 'x') {
            screenDisplay.innerText += '*';
        }
    
        else {
            screenDisplay.innerText += value;
        }
    });
});