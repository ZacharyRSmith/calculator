function Calculator() {
    var calc = [0];
    var crnt = "0";
    var ops = ["+", '-', '*', '/'];

    // ARITH FXNS, (Sorted: +, -, *, /, misc):
    var add    = function (num1, num2) { return num1 + num2; };

    var minus  = function (num1, num2) { return num1 - num2; };

    var times  = function (num1, num2) { return num1 * num2; };

    var divide = function (num1, num2) { return num1 / num2; };

    this.equals = function () {
		// A calc of length 1 should be a number with no operations.
		if (calc.length == 1) { return calc; }
		// Ignore trailing operands.
		if (isNaN(calc[calc.length-1])) { calc.pop(); }
		
		var rslt = calc.reduce(function(memo, crnt, ind) {
			// Evenly-indexed elements are numbers.
			if (ind % 2 == 0) { return memo; }
			var nextNum = calc[ind+1];
			
			switch(crnt) {
				case "+":
					return add(memo, nextNum);
				case "-":
					return minus(memo, nextNum);
				case "*":
					return times(memo, nextNum);
				case "/":
					return divide(memo, nextNum);
			}
		});
		
        return rslt;
    };

    // OTHER FXNS:
    var isOp = function(arg) { return ops.indexOf(arg) > -1; };
        
    this.appendToCrnt = function (num_str) {
        if (num_str === "0" && crnt === "0") { return; }
        
        crnt += num_str;
    };

    this.logCalc = function () {
        console.log(calc);
    };

    this.saveCrnt = function () {
        // Ignore if crnt is empty.
        if (!crnt) { return; }

        if (isOp(calc[calc.length-1])) {
            calc.push(parseFloat(crnt));
        }
        else { calc[calc.length-1] = parseFloat(crnt); }
    };
		
    this.saveOp = function (op) {
        // If last calc element is already an op, overwrite it.
        // Else, push op into calc.
        var last
        if (isOp(calc[calc.length-1])) { calc[calc.length-1] = op; }
        else { calc.push(op); }
    };

    this.setCalc = function(num) { calc = [num]; }
    this.setCrnt = function(str) { crnt = str; }
}

c = new Calculator();

$(document).ready(function () {
    c.logCalc();

    // FXNS FOR CLICKS ON NUM buttons.
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

    // FXNS FOR CLICKS ON OP buttons.
    $('button#add').click(function () {
        c.saveOp('+');
        c.setCrnt("");
        c.logCalc();
    });
    $('button#minus').click(function () {
        c.saveOp('-');
        c.setCrnt("");
        c.logCalc();
    });
    $('button#times').click(function () {
        c.saveOp('*');
        c.setCrnt("");
        c.logCalc();
    });
    $('button#divide').click(function () {
        c.saveOp('/');
        c.setCrnt("");
        c.logCalc();
    });
    $('button#equals').click(function () {
        c.setCrnt(c.equals());
        c.setCalc(c.equals());
        c.logCalc();
    });

    // FXN FOR CLICKS ON CLEAR:
    $('button#clear').click(function () {
        c.setCalc(0);
        c.setCrnt("0");
        c.logCalc();
    });
});
