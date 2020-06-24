new Vue({
    el: "#vueCalc",
    data: {
        valArr: [],
        previousVal: null,
        currentVal: null,
        operator: null,
        result: null,
        resultOutput: null,
        computeCheck: false
    },
    methods: {
        getValue(e) {
            if (this.computeCheck == true) {
                this.currentVal = this.result;
            }
            if (Number.isInteger(parseFloat(e.target.innerText)) || //check if its a number or a ,
                e.target.innerText === ".") {
                this.valArr.push(e.target.innerText);
                this.currentVal = this.valArr.join("");
            }
            else {
                this.previousVal = this.currentVal;
                this.valArr = [];
                this.currentVal = null;
                this.operator = e.target.innerText;
            };
            this.computeCheck = false
        },
        compute() {
            switch (this.operator) {
                case "+":
                    this.result = parseFloat(this.previousVal) + parseFloat(this.currentVal);
                    break;
                case "-":
                    this.result = parseFloat(this.previousVal) - parseFloat(this.currentVal);
                    break;
                case "X":
                    this.result = parseFloat(this.previousVal) * parseFloat(this.currentVal);
                    break;
                case "÷":
                    this.result = parseFloat(this.previousVal) / parseFloat(this.currentVal);
                    break;
                case "%":
                    this.result = parseFloat(this.previousVal) % parseFloat(this.currentVal);
                    break
                // the values are strings, but js automatically converts them into numbers while calculating, except with the + operator
            };
            this.valArr = [this.result];
            this.resultOutput = "= " + this.result;
            this.computeCheck = true
        },
        clearAll() {
            this.valArr = [],
                this.previousVal = null,
                this.currentVal = null,
                this.operator = null,
                this.result = null,
                this.resultOutput = null
        },
        clearLastDigit() {
            this.valArr.pop();
        }
    }
})