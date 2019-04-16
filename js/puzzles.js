Puzzles = {
  randomizer: function (bottom, top) { //[bottom, top]
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  },
  add1: function() { //addition in 10;
    left = Puzzles.randomizer(1,8);
    result = left + 1;
    coin = 1;
    return {
      title: ''+left+' + 1'+' =  ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    }
  },
  add2: function(){ //addition in 10;
    left = Puzzles.randomizer(1,7);
    result = left + 2;
    coin = 2;
    return {
      title: ''+left+' + 2'+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  add3: function(){ //addition in 10;
    left = Puzzles.randomizer(1,6);
    result = left + 3;
    coin = 3;
    return {
      title: ''+left+' + 3'+ ' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  addIn10: function(){ //addition in 10;
    left = Puzzles.randomizer(1,8);
    right = Puzzles.randomizer(1,9-left);
    result = left + right;
    coin = 5;
    return {
      title: ''+left+' + '+right+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  addOver10:  function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(10-left, 9);
    result = left + right;
    coin = 10;
    return {
      title: ''+left+' + '+right+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  addIn100: function(){ //addition in 10;
    left = Puzzles.randomizer(10,88);
    right = Puzzles.randomizer(10,90-left);
    result = left + right;
    coin = 20;
    return {
      title: ''+left+' + '+right+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  subtract: function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(1, left);
    result = left - right;
    coin = 5;
    return {
      title: ''+left+' - '+right+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  subtract1: function(){ //addition in 10;
    left = Puzzles.randomizer(2,9);
    right = Puzzles.randomizer(10-left, 9);
    result = left + right;
    coin = 10;
    return {
      title: ''+result+' - '+left+' = ',
      check: function(r) {
        if(parseInt(r) == right) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  subtract2: function(){ //addition in 10;
    left = Puzzles.randomizer(11,99);
    right = Puzzles.randomizer(10, left);
    result = left - right;
    coin = 15;
    return {
      title: ''+left+' - '+right+' = ',
      check: function(r) {
        if(parseInt(r) == result) {
          return coin;
        } else {
          return 0;
        }
      }
    };
  },
  multiply: function(){ //addition in 10;
      left = Puzzles.randomizer(1,9);
      right = Puzzles.randomizer(1, 9);
      result = left * right;
      coin = 10;
      return {
        title: ''+left+' X '+right+' = ',
        check: function(r) {
          if(parseInt(r) == result) {
            return coin;
          } else {
            return 0;
          }
        }
      };
    },
    multiply1: function(){ //addition in 10;
        left = Puzzles.randomizer(11,19);
        right = Puzzles.randomizer(11, 19);
        result = left * right;
        coin = 15;
        return {
          title: ''+left+' X '+right+' = ',
          check: function(r) {
            if(parseInt(r) == result) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    multiply2: function(){ //addition in 10;
        left = Puzzles.randomizer(11,99);
        right = Puzzles.randomizer(11, 99);
        result = left * right;
        coin = 20;
        return {
          title: ''+left+' X '+right+' = ',
          check: function(r) {
            if(parseInt(r) == result) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    division: function(){ //addition in 10;
      left = Puzzles.randomizer(1,9);
      right = Puzzles.randomizer(1, 9);
      result = left * right;
      coin = 10;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          check: function(r) {
            if(parseInt(r) == left) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    division1: function(){ //addition in 10;
      left = Puzzles.randomizer(11,19);
      right = Puzzles.randomizer(11, 19);
      result = left * right;
      coin = 20;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          check: function(r) {
            if(parseInt(r) == left) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    division2: function(){ //addition in 10;
      left = Puzzles.randomizer(11,99);
      right = Puzzles.randomizer(11, 99);
      result = left * right;
      coin = 25;
        return {
          title: ''+result+' \u00F7 '+right+' = ',
          check: function(r) {
            if(parseInt(r) == left) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    fractionAdd: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-numerator1);
      sum = numerator1+numerator2;
      coin = 5;
      result = sum+'/'+denominator;
        return {
          title: ''+ numerator1 +'/'+denominator + ' + ' + numerator2 +'/'+denominator+ ' = ',
          check: function(r) {
            console.log(result);
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    fractionAdd1: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-1);
      sum = numerator1+numerator2;
      result= sum+'/'+denominator;
      coin = 8;
        return {
          title: ''+ numerator1 +'/'+denominator + ' + ' + numerator2 +'/'+denominator+ ' = ',
          check: function(r) {
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
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
      result= sum+'/'+denominator;
      coin = 10;

        return {
          title: ''+ numerator1 +'/'+denominator1 + ' + ' + numerator2 +'/'+denominator2+ ' = ',
          check: function(r) {
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
        };
    },
    fractionSubtraction: function(){ //addition in 10;
      denominator = Puzzles.randomizer(2,9);
      numerator1 = Puzzles.randomizer(1, denominator-1);
      numerator2 = Puzzles.randomizer(1, denominator-numerator1);
      sum = numerator1+numerator2;
      result = numerator1+'/'+denominator;
      coin = 5;

        return {
          title: ''+ sum +'/'+denominator + ' - ' + numerator2 +'/'+denominator+ ' = ',
          check: function(r) {
            console.log(r);
            console.log(result);
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
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
      result = s + '/' + denominator2*denominator1;
      coin = 15;
        return {
          title: e,
          check: function(r) {
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
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
      result = sum+'/'+denominator;
      coin = 15;
        return {
          title: ''+ numerator1 +'/'+denominator1 + ' X ' + numerator2 +'/'+denominator2+ ' = ',
          check: function(r) {
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          }
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
      result = sum+'/'+denominator;
      coin: 25;
        return {
          title: ''+ numerator1 +'/'+denominator1 + ' \u00F7 ' + numerator2 +'/'+denominator2+ ' = ',
          check: function(r) {
            if(fractionCheck(r, result)) {
              return coin;
            } else {
              return 0;
            }
          },

        };
    }
}

puzzleList = [
  {
    category: 'Addition',
    symbol: '<i class="fas fa-plus"></i>',
    puzzles: [
        {
          title: ' 1',
          f: Puzzles.add1
        },
        {
          title: ' 2',
          f: Puzzles.add2
        },
        {
          title: ' 3',
          f: Puzzles.add3
        },
        {
          title: ' Basic',
          f: Puzzles.addIn10
        },
        {
          title: ' Carry',
          f: Puzzles.addOver10
        },
        {
          title: ' 2-Digits',
          f: Puzzles.addIn100
        }
    ]
  },
    {
      category: 'Subtraction',
      symbol: '<i class="fas fa-minus"></i>',
      puzzles: [
        {
          title: ' Basic',
          f: Puzzles.subtract
        },
        {
          title: ' Trade',
          f: Puzzles.subtract1
        },
        {
          title: ' 2-Digits',
          f: Puzzles.subtract2
        }
      ]
    },
    {
      category: 'Multiplication',
      symbol: '<i class="fas fa-times"></i>',
      puzzles:
      [
        {
          title: ' Basic',
          f: Puzzles.multiply
        },
        {
          title: ' Factors in 20',
          f: Puzzles.multiply1
        },
        {
          title: ' 2-Digits',
          f: Puzzles.multiply2
        }
      ]
    },
      {
        category: 'Division',
        symbol: '<i class="fas fa-divide"></i>',
        puzzles:
        [
          {
            title: ' Level 1',
            f: Puzzles.division
          },
          {
            title: ' Level 2',
            f: Puzzles.division1
          },
          {
            title: ' Level 3',
            f: Puzzles.division2
          },
        ]
      }, {
        category: 'Fraction',
        symbol: '<i class="fas fa-pizza-slice"></i>',
        puzzles: [
          {
            title: ' Basic <i class="fas fa-plus"></i>',
            f: Puzzles.fractionAdd
          },
          {
            title: ' Level 2 <i class="fas fa-plus"></i>',
            f: Puzzles.fractionAdd2
          },
          {
            title: ' Basic <i class="fas fa-minus"></i>',
            f: Puzzles.fractionSubtraction
          },
          {
            title: ' Advanced <i class="fas fa-minus"></i>',
            f: Puzzles.fractionSubtraction1
          },
          {
            title: ' <i class="fas fa-times"></i>',
            f: Puzzles.fractionM
          },
          {
            title: ' <i class="fas fa-divide"></i>',
            f: Puzzles.fractionD
          }
        ]
      }

];

function fractionCheck(a, b) {
  res = a.split('/');
  n1 = parseInt(res[0]);
  d1 = parseInt(res[1]);

  res1 = b.split('/');
  n2 = parseInt(res1[0]);
  d2 = res1.length == 1 ? 1: parseInt(res1[1]);

  return d1*n2 == d2*n1;
}

function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return arguments.callee(b, a % b);
}
