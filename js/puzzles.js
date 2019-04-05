Puzzles = {
  randomizer: function (bottom, top) { //[bottom, top]
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  },
  add1: function() { //addition in 10;
    left = Puzzles.randomizer(1,8);
    result = left + 1;
    return {
      title: ''+left+' + 1'+' =  ',
      result: result
    }
  },
  add2: function(){ //addition in 10;
    left = Puzzles.randomizer(1,7);
    result = left + 2;
    return {
      title: ''+left+' + 2'+' = ',
      result: result
    };
  },
  add3: function(){ //addition in 10;
    left = Puzzles.randomizer(1,6);
    result = left + 3;
    return {
      title: ''+left+' + 3'+ ' = ',
      result: result
    };
  },
  addIn10: function(){ //addition in 10;
    left = Puzzles.randomizer(1,8);
    right = Puzzles.randomizer(1,9-left);
    result = left + right;
    return {
      title: ''+left+' + '+right+' = ',
      result: result
    };
  },
  addOver10:  function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(10-left, 9);
    result = left + right;
    return {
      title: ''+left+' + '+right+' = ',
      result: result
    };
  },
  addIn100: function(){ //addition in 10;
    left = Puzzles.randomizer(10,88);
    right = Puzzles.randomizer(10,90-left);
    result = left + right;
    return {
      title: ''+left+' + '+right+' = ',
      result: result
    };
  },
  subtract: function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(1, left);
    result = left - right;
    return {
      title: ''+left+' - '+right+' = ',
      result: result
    };
  },
  subtract1: function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(10-left, 9);
    result = left + right;
    return {
      title: ''+result+' - '+left+' = ',
      result: right
    };
  },
  subtract2: function(){ //addition in 10;
    left = Puzzles.randomizer(11,99);
    right = Puzzles.randomizer(10, left);
    result = left - right;
    return {
      title: ''+left+' - '+right+' = ',
      result: result
    };
  },
  multiply: function(){ //addition in 10;
      left = Puzzles.randomizer(1,9);
      right = Puzzles.randomizer(1, 9);
      result = left * right;
      return {
        title: ''+left+' X '+right+' = ',
        result: result
      };
    },
    multiply1: function(){ //addition in 10;
        left = Puzzles.randomizer(11,19);
        right = Puzzles.randomizer(11, 19);
        result = left * right;
        return {
          title: ''+left+' X '+right+' = ',
          result: result
        };
    },
    multiply2: function(){ //addition in 10;
        left = Puzzles.randomizer(11,99);
        right = Puzzles.randomizer(11, 99);
        result = left * right;
        return {
          title: ''+left+' X '+right+' = ',
          result: result
        };
    },
    division: function(){ //addition in 10;
      left = Puzzles.randomizer(1,9);
      right = Puzzles.randomizer(1, 9);
      result = left * right;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          result: left
        };
    },
    division1: function(){ //addition in 10;
      left = Puzzles.randomizer(11,19);
      right = Puzzles.randomizer(11, 19);
      result = left * right;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          result: left
        };
    },
    division2: function(){ //addition in 10;
      left = Puzzles.randomizer(11,99);
      right = Puzzles.randomizer(11, 99);
      result = left * right;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          result: left
        };
    },
    fractionAdd: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-numerator1);
      sum = numerator1+numerator2;
        return {
          title: ''+ numerator1 +'/'+denominator + ' + ' + numerator2 +'/'+denominator+ ' = ',
          result: sum == denominator ? 1 : ''+sum+'/'+denominator
        };
    },
    fractionAdd1: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-1);
      sum = numerator1+numerator2;
      g = gcd(sum, denominator);
        return {
          title: ''+ numerator1 +'/'+denominator + ' + ' + numerator2 +'/'+denominator+ ' = ',
          result: denominator/g == 1? ''+denominator/g :''+sum/g+'/'+denominator/g
        };
    },
    fractionAdd2: function(){ //addition in 10;
      denominator1 = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator1-1);
      g1 = gcd(denominator1,numerator1);
      denominator1 = denominator1/g1;
      numerator1 = numerator1/g1;

      denominator2 = Puzzles.randomizer(2,9);
      numerator2 = Puzzles.randomizer(1, denominator2-1);
      g2 = gcd(denominator2,numerator2);
      denominator2 = denominator2/g2;
      numerator2 = numerator2/g2;

      denominator = denominator1*denominator2;
      sum = numerator1*denominator2 + denominator1*numerator2;
      g = gcd(sum, denominator);
        return {
          title: ''+ numerator1 +'/'+denominator1 + ' + ' + numerator2 +'/'+denominator2+ ' = ',
          result: denominator/g == 1? ''+denominator/g :''+sum/g+'/'+denominator/g
        };
    },
    fractionSubtraction: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-numerator1);
      sum = numerator1+numerator2;
        return {
          title: ''+ sum +'/'+denominator + ' - ' + numerator2 +'/'+denominator+ ' = ',
          result: ''+numerator1+'/'+denominator
        };
    },
    fractionSubtraction1: function(){ //addition in 10;
      denominator1 = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator1-1);
      g1 = gcd(denominator1,numerator1);
      denominator1 = denominator1/g1;
      numerator1 = numerator1/g1;

      denominator2 = Puzzles.randomizer(2,9);
      numerator2 = Puzzles.randomizer(1, denominator2-1);
      g2 = gcd(denominator2,numerator2);
      denominator2 = denominator2/g2;
      numerator2 = numerator2/g2;
      e = '';
      s = numerator1 * denominator2 - numerator2 * denominator1;
      if (s > 0) {
        e = ''+ numerator1+'/'+ denominator1 + ' - '+ numerator2 + '/'+ denominator2+ ' = ';
      } else {
        s = -s;
        e = ''+ numerator2+'/'+ denominator2 + ' - '+ numerator1 + '/'+ denominator1+ ' = ';
      }
      g = gcd(s, denominator2*denominator1);

        return {
          title: e,
          result: ''+s/g + '/' + denominator2*denominator1/g
        };
    },
    fractionM: function(){ //addition in 10;
      denominator1 = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator1-1);
      g1 = gcd(denominator1,numerator1);
      denominator1 = denominator1/g1;
      numerator1 = numerator1/g1;

      denominator2 = Puzzles.randomizer(2,9);
      numerator2 = Puzzles.randomizer(1, denominator2-1);
      g2 = gcd(denominator2,numerator2);
      denominator2 = denominator2/g2;
      numerator2 = numerator2/g2;

      denominator = denominator1*denominator2;
      sum = numerator1*numerator2;
      g = gcd(sum, denominator);
        return {
          title: ''+ numerator1 +'/'+denominator1 + ' X ' + numerator2 +'/'+denominator2+ ' = ',
          result: denominator/g == 1? ''+denominator/g :''+sum/g+'/'+denominator/g
        };
    },
    fractionD: function(){ //addition in 10;
      denominator1 = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator1-1);
      g1 = gcd(denominator1,numerator1);
      denominator1 = denominator1/g1;
      numerator1 = numerator1/g1;

      denominator2 = Puzzles.randomizer(2,9);
      numerator2 = Puzzles.randomizer(1, denominator2-1);
      g2 = gcd(denominator2,numerator2);
      denominator2 = denominator2/g2;
      numerator2 = numerator2/g2;

      denominator = denominator1*numerator2;
      sum = numerator1*denominator2;
      g = gcd(sum, denominator);
        return {
          title: ''+ numerator1 +'/'+denominator1 + ' \u00F7 ' + numerator2 +'/'+denominator2+ ' = ',
          result: denominator/g == 1? ''+denominator/g :''+sum/g+'/'+denominator/g
        };
    }
}

puzzleList = [
  {
    category: 'Addition',
    puzzles: [
        {
          title: 'Addition with 1',
          f: Puzzles.add1
        },
        {
          title: 'Addition with 2',
          f: Puzzles.add2
        },
        {
          title: 'Addition with 3',
          f: Puzzles.add3
        },
        {
          title: 'Basic Addition',
          f: Puzzles.addIn10
        },
        {
          title: 'Addition with Carry',
          f: Puzzles.addOver10
        },
        {
          title: '2 Digits Addition',
          f: Puzzles.addIn100
        }
    ]
  },
    {
      category: 'Subtraction',
      puzzles: [
        {
          title: 'Basic Subtraction',
          f: Puzzles.subtract
        },
        {
          title: 'Subtraction with Trade',
          f: Puzzles.subtract1
        },
        {
          title: '2 Digits Subtraction',
          f: Puzzles.subtract2
        }
      ]
    },
    {
      category: 'Multiplication',
      puzzles:
      [
        {
          title: 'Basic Multiplication',
          f: Puzzles.multiply
        },
        {
          title: 'Multiplication within 20',
          f: Puzzles.multiply1
        },
        {
          title: '2 Digits Multiplication',
          f: Puzzles.multiply2
        }
      ]
    },
      {
        category: 'Division',
        puzzles:
        [
          {
            title: 'Division Level 1',
            f: Puzzles.division
          },
          {
            title: 'Division Level 2',
            f: Puzzles.division1
          },
          {
            title: 'Division Level 3',
            f: Puzzles.division2
          },
        ]
      }, {
        category: 'Fraction',
        puzzles: [
          {
            title: 'Basic Fraction Addition',
            f: Puzzles.fractionAdd
          },
          {
            title: 'Fraction Addition Level 2',
            f: Puzzles.fractionAdd2
          },
          {
            title: 'Basic Fraction Subtraction',
            f: Puzzles.fractionSubtraction
          },
          {
            title: 'Advanced Fraction Subtraction',
            f: Puzzles.fractionSubtraction1
          },
          {
            title: 'Fraction Multiplication',
            f: Puzzles.fractionM
          },
          {
            title: 'Fraction Division',
            f: Puzzles.fractionD
          }
        ]
      }

];

function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return arguments.callee(b, a % b);
}
