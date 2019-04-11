PuzzleService = {
  getPuzzle:function(type) {
    var p = {
      "title": "Chiken & Rabbit",
      "description": "笼子里关着兔子和鸡。共有8个头，20只脚。问笼子里有几只鸡？",
      "answers": [
        {
          'option': '8',
          'is_answer': false,
        },
        {
          'option': '6',
          'is_answer': true,
        },
        {
          'option': '9',
          'is_answer': false,
        },
        {
          'option': '5',
          'is_answer': false,
        }
      ],
      'coin': 15,
      check: function(index) {
        if (this.answers[parseInt(index)].is_answer) {
          return this.coin;
        } else {
          return 0;
        }
      }
    };
    return p;
  }
}
