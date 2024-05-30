
 class Calculator {
    displayElement: HTMLInputElement;
    currentOperand: string ="";
    previousOperand: string ="";
    operation: string | null ="";

   constructor(displayElement: HTMLInputElement) {
       this.displayElement = displayElement;
       this.clear();
   }

   clear() {
       this.currentOperand = '';
       this.previousOperand = '';
       this.operation = null;
       this.updateDisplay();
   }

   appendNumber(number: string) {
       if (number === '.' && this.currentOperand.includes('.')) return;
       this.currentOperand = this.currentOperand.toString() + number.toString();
       this.updateDisplay();
   }

   chooseOperation(operation: string) {
       if (this.currentOperand === '') return;
       if (this.previousOperand !== '') {
           this.compute();
       }
       this.operation = operation;
       this.previousOperand = this.currentOperand;
       this.currentOperand = '';
   }

   compute() {
       let computation: number;
       const prev = parseFloat(this.previousOperand);
       const current = parseFloat(this.currentOperand);
       if (isNaN(prev) || isNaN(current)) return;

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
   }

   updateDisplay() {
       this.displayElement.value = this.currentOperand;
   }
}

export default Calculator