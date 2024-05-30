import Calculator from "./calculator";

document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.querySelector<HTMLInputElement>('#display')!;
    const calculator = new Calculator(displayElement);

    document.querySelectorAll<HTMLButtonElement>('.button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value')!;
            if (value >= '0' && value <= '9' || value === '.') {
                calculator.appendNumber(value);
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                calculator.chooseOperation(value);
            } else if (value === '=') {
                calculator.compute();
            } else if (value === 'C') {
                calculator.clear();
            }
        });
    });
});
