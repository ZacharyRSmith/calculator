function Calculator() {
    this.calc = [0];
    this.calcLast = 0;
    this.crnt = "0";
    this.ops = ["+", '-', '*', '/'];

    // ARITH FXNS, (Sorted: +, -, *, /, misc):
    this.add = function (num1, num2) {
        return num1 + num2;
    };

    this.minus = function (num1, num2) {
        return num1 - num2;
    };

    this.times = function (num1, num2) {
        return num1 * num2;
    };

    this.divide = function (num1, num2) {
        return num1 / num2;
    };

    this.equals = function () {
        var res = this.evalTimesAndbutton(this.calc);
        res = this.evalAddAndMinus(res);
        res = this.evalDanglingOp(res);
        return res;
    }

    this.evalAddAndMinus = function (calc) {
        // Do not iterate to the last element, which is treated specially if op.
        for (var i = 1; i <= calc.length - 2; i += 2) {
            if (calc[i] == '+') {
                var res = this.add(calc[i - 1], calc[i + 1]);
            } else if (calc[i] == '-') {
                var res = this.minus(calc[i - 1], calc[i + 1]);
            }

            if (res != null) {
                calc.splice((i - 1), 3, res);
                i -= 2;
            }

            res = null
        }
        return calc;
    }

    this.evalTimesAndbutton = function (calc) {
        // Do not iterate to the last element, which is treated specially if op.
        for (var i = 1; i <= calc.length - 2; i += 2) {
            if (calc[i] == '*') {
                var res = this.times(calc[i - 1], calc[i + 1]);
            } else if (calc[i] == '/') {
                var res = this.divide(calc[i - 1], calc[i + 1]);
            }

            if (res != null) {
                calc.splice((i - 1), 3, res);
                i -= 2;
            }

            res = null;
        }
        return calc;
    }

    this.evalDanglingOp = function (calc) {
        // calc should be an ary of a num and maybe an op.
        // If more than 1 elt in calc, the 2nd elt should be an op.
        if (calc.length > 1) {
            switch (calc[calc.length - 1]) {
                case '+':
                    return [this.add(calc[0], calc[0])];
                case '-':
                    return [this.add(calc[0], calc[0])];
                case '*':
                    return [this.add(calc[0], calc[0])];
                case '/':
                    return [this.add(calc[0], calc[0])];
            }
        } else {
            return calc;
        }
    }

    // OTHER FXNS:
    this.appendToCrnt = function (num_str) {
        if (num_str === "0") {
            if (this.crnt !== "0") {
                this.crnt = this.crnt + "0";
            } else {
                return false;
            }
        } else {
            this.crnt = this.crnt + num_str;
        }
    };

    this.calcLastIsOp = function () {
        this.setCalcLast();
        if (this.ops.indexOf(this.calcLast) != -1) {
            return true;
        } else {
            return false;
        }
    };

    this.logCalc = function () {
        console.log(this.calc);
    };

    this.saveCrnt = function () {
        // Do not save crnt if it is empty.
        if (this.crnt === "") {
            return false;
        }

        // If calcLast is an op, push crnt into calc.
        // Else, replace calcLast with crnt.
        if (this.calcLastIsOp()) {
            this.calc.push(parseFloat(this.crnt));
        } else {
            this.setCalcLast(parseFloat(this.crnt));
        }
    };

    this.saveOp = function (op) {
        // If calcLast is already an op, reset it.
        // Else, push op-param into calc.
        if (this.calcLastIsOp()) {
            this.setCalcLast(op);
        } else {
            this.calc.push(op);
        }
    };

    this.setCalcLast = function (param) {
        // If param, then set the last element of calc to param.
        if (param !== undefined) {
            this.calc[((this.calc).length - 1)] = param;
        }

        this.calcLast = this.calc[((this.calc).length - 1)];
    };
}

c = new Calculator();

$(document).ready(function () {
    c.logCalc();

    // FXNS FOR CLICKS ON NUM buttonS.
    $('button#0').click(function () {
        c.appendToCrnt("0");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#1').click(function () {
        c.appendToCrnt("1");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#2').click(function () {
        c.appendToCrnt("2");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#3').click(function () {
        c.appendToCrnt("3");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#4').click(function () {
        c.appendToCrnt("4");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#5').click(function () {
        c.appendToCrnt("5");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#6').click(function () {
        c.appendToCrnt("6");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#7').click(function () {
        c.appendToCrnt("7");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#8').click(function () {
        c.appendToCrnt("8");
        c.saveCrnt();
        c.logCalc();
    });
    $('button#9').click(function () {
        c.appendToCrnt("9");
        c.saveCrnt();
        c.logCalc();
    });

    // FXNS FOR CLICKS ON OP buttonS.
    $('button#add').click(function () {
        c.saveOp('+');
        c.crnt = "";
        c.logCalc();
    });
    $('button#minus').click(function () {
        c.saveOp('-');
        c.crnt = "";
        c.logCalc();
    });
    $('button#times').click(function () {
        c.saveOp('*');
        c.crnt = "";
        c.logCalc();
    });
    $('button#divide').click(function () {
        c.saveOp('/');
        c.crnt = "";
        c.logCalc();
    });
    $('button#equals').click(function () {
        c.calc = c.equals();
        c.logCalc();
    });

    // FXN FOR CLICKS ON CLEAR:
    $('button#clear').click(function () {
        c.calc = [0];
        c.calcLast = 0;
        c.crnt = "0";
        c.logCalc();
    });
});
