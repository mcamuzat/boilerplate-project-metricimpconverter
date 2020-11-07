/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    // remove letter but keep the /
    var numbers = input.replace(/[^0-9.,/]+/g, '');
    if (numbers == "") {
      return 1;
    }
    // detect the /
    var numbersOfSlash = numbers.split('/');
    // no /
    if (numbersOfSlash.length == 1) {
      return numbers;
    }
    // more than 2 /
    if (numbersOfSlash.length > 2) {
      return 'invalid number'
    }

    return numbersOfSlash[0]/numbersOfSlash[1]
  };
  
  this.getUnit = function(input) {
    // regex unit 
    var unit = input.match(/[a-zA-Z]+/);
    // result to lower case
    var unit = unit[0].toLowerCase();
    if (['gal','l','mi','km','lbs','kg'].indexOf(unit) !== -1) {
      // ugly 
      if (unit === 'l' || unit === 'L') return 'L';
      return unit
    }
    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    var translate = {
        L: 'gal',
        gal : 'l',
        l   : 'gal',
        lbs:  'kg',
        kg: 'lbs',
        mi: 'km',
        km : 'mi'
    }
    
    return translate[initUnit];
  };

  this.spellOutUnit = function(unit) {
	var translate = {
		lbs: 'pounds',
		gal: 'gallons',
		mi: 'miles',
		kg: 'kilograms',
		l: 'liters',
		km: 'kilometers',
    L: 'liters'
	};
    return translate[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;
    		switch (initUnit.toLowerCase()) {
			case 'lbs':
				result = initNum * lbsToKg;
				break;
			case 'kg':
				result = initNum / lbsToKg;
				break;
			case 'mi':
				result = initNum * miToKm;
				break;
			case 'km':
				result = initNum / miToKm;
				break;
			case 'gal':
				result = initNum * galToL;
				break;
			case 'l':
				result = initNum / galToL;
				break;
		}

    return parseFloat(result.toFixed(5))
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
