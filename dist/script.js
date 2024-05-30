var Calculator = /** @class */ (function () {
    function Calculator(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }
    Calculator.prototype.clear = function () {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
        this.updateDisplay();
    };
    Calculator.prototype.appendNumber = function (number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay();
    };
    Calculator.prototype.chooseOperation = function (operation) {
        if (this.currentOperand === '')
            return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    };
    Calculator.prototype.compute = function () {
        var computation;
        var prev = parseFloat(this.previousOperand);
        var current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current))
            return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation.toString();
        this.operation = null;
        this.previousOperand = '';
        this.updateDisplay();
    };
    Calculator.prototype.updateDisplay = function () {
        this.displayElement.value = this.currentOperand;
    };
    return Calculator;
}());
document.addEventListener('DOMContentLoaded', function () {
    var displayElement = document.querySelector('#display');
    var calculator = new Calculator(displayElement);
    document.querySelectorAll('.button').forEach(function (button) {
        button.addEventListener('click', function () {
            var value = button.getAttribute('data-value');
            if (value >= '0' && value <= '9' || value === '.') {
                calculator.appendNumber(value);
            }
            else if (value === '+' || value === '-' || value === '*' || value === '/') {
                calculator.chooseOperation(value);
            }
            else if (value === '=') {
                calculator.compute();
            }
            else if (value === 'C') {
                calculator.clear();
            }
        });
    });
});
