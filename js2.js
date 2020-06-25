new Vue({
    el: "#vueCalc",
    data: {
        numbers: [],
        operators: [],
        currentElement: [],
        result: null,
        computedResult: false,
        alreadyAddedOperator: false
    },
    methods: {
        addToCurrentElement(e) {
            this.checkForComputedResult();
            this.computedResult = false;
            const value = e.target.innerText;
            this.currentElement.push(value);
            this.alreadyAddedOperator = false
        },
        addOperator(e) {
            // if (this.alreadyAddedOperator == true ) return;
            this.checkForComputedResult();
            this.computedResult = false;
            this.addNumber();
            const operator = e.target.innerText;
            if (!this.numbers.length) {
                this.currentElement.push(operator)
                this.alreadyAddedOperator = true
            }
            else if (!this.alreadyAddedOperator) {
                this.operators.push(operator);
                this.addNumber();
                this.alreadyAddedOperator = true
            }
        },
        addNumber() {
            if (this.currentElement.length == 0) return;
            this.numbers.push(this.currentElement.join(""));
            this.currentElement = []
        },
        checkForComputedResult() {
            if (this.computedResult) {
                let splitResult = this.result.toString();
                this.numbers = [splitResult];
                this.operators = [];
                this.result = null
            }
        },
        compute() {
            this.addNumber();
            let previousResult = 0;
            for (let i = 0; i < this.operators.length; i++) {
                let number1 = previousResult;
                if (i == 0) {
                    number1 = parseFloat(this.numbers[i])
                }
                const number2 = parseFloat(this.numbers[i + 1]);
                const operator = this.operators[i];
                let currentResult = 0;

                switch (operator) {
                    case "+":
                        currentResult = number1 + number2;
                        break;
                    case "-":
                        currentResult = number1 - number2;
                        break;
                    case "X":
                        currentResult = number1 * number2;
                        break;
                    case "÷":
                        currentResult = number1 / number2;
                        break;
                    case "%":
                        currentResult = number1 % number2;
                        break
                }
                previousResult = currentResult;
            }
            this.result = previousResult;
            this.computedResult = true;
            this.alreadyAddedOperator = false
        },
        clearAll() {
            this.numbers = [],
                this.operators = [],
                this.currentElement = [],
                this.result = null,
                this.computedResult = false;
        },
        // clear() {

        // },
    },
    computed: {
        formula() {
            let output = ""
            for (let i = 0; i < this.numbers.length; i++) {
                output += this.numbers[i];
                if (this.operators[i]) {
                    output += this.operators[i];
                }
            }
            if (this.currentElement.length) {
                output += this.currentElement.join("");
            }
            return output
        }
    }
})