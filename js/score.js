
SymbolSet = [
  {
    value:1,
    symbol: "💰",
  },
  {
    value:10,
    symbol: "🐷",
  },
  {
    value:20,
    symbol: '🐶',
  },
  {
    value:30,
    symbol: '🐔',
  },
  {
    value:40,
    symbol: '🐵',
  },
  {
    value:50,
    symbol: '🐐',
  },
  {
    value:60,
    symbol: '🐴',
  },
  {
    value:70,
    symbol: '🐍',
  },
  {
    value:80,
    symbol: '🐲',
  },
  {
    value:90,
    symbol: '🐰',
  },
  {
    value:100,
    symbol: '🐯',
  },
  {
    value:110,
    symbol: '🐮',
  },
  {
    value:120,
    symbol: '🐭',
  }
]

Score = {
  scoreText:function(a) {
    var res = "";
    if (a == 0) {
      return res;
    }
    map = [];
    var size = Score.findIndex(a)+1;
    // console.log(size);
    while(size --) map.push(0);
    // console.log(map);
    do {
      var index = Score.findIndex(a);
      r = a % SymbolSet[index].value;
      n = (a - r)/SymbolSet[index].value;
      map[index] = n;
      a = r;
    } while( a != 0 );
    var i;
    for (i = 0; i<map.length; i++){
      res = res + map[i] + SymbolSet[i].symbol;
    }

    return res;
  },
  
  findIndex: function(a) {
    var i;
    for(i = SymbolSet.length-1; i >= 0; i--) {
      if(SymbolSet[i].value <= a) {
        return i;
      }
    }
    return -1;
  },
}
