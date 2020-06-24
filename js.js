new Vue({
    el: "#vueCalc",
    data: {
        valArr: [],
        previousVal: null,
        currentVal: null,
        operator: null,
    },
    methods: {
        getValue(e) {
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
            }
        },
        compute() {
            switch (this.operator) {
                case "+":
                    this.currentVal = parseFloat(this.previousVal) + parseFloat(this.currentVal);
                    break;
                case "-":
                    this.currentVal = parseFloat(this.previousVal) - parseFloat(this.currentVal);
                    break;
                case "X":
                    this.currentVal = parseFloat(this.previousVal) * parseFloat(this.currentVal);
                    break;
                case "/":
                    this.currentVal = parseFloat(this.previousVal) / parseFloat(this.currentVal);
                    break;
                // the values are strings, but js automatically converts them into numbers while calculating, except with the + operator
            };
            // this.currentVal = this.currentVal.toString();
            this.valArr = [this.currentVal];
            this.operator = "=";
        },
        clearAll() {
            this.valArr = [],
                this.previousVal = null,
                this.currentVal = null,
                this.operator = null
        },
        clearLastDigit() {
            this.valArr.pop();
        }
    }
})