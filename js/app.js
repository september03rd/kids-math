// import 'dtype.js';
App = {
  puzzleCategory: 0,
  puzzleIndex:0,
  puzzleResult:'',
  inputEcho: '',
  correctCounter: 0,
  wrongCounter: 0,
  currentPuzzle: null,
  init: function () {
    console.log("App initialized...");
    App.currentPuzzle = puzzleList[App.puzzleCategory].puzzles[App.puzzleIndex].f;
    App.buildPuzzle();
  },
  buildPuzzle: function(){
    puzzle = App.currentPuzzle();
    $('#question-title').text(puzzle.title);
    App.puzzleResult = puzzle.result;
  },
  triggerResult: function(result) {
    console.log(App.puzzleResult);
    if(result) {
      App.correctCounter += 1;
      $('#correct-counter').text(App.correctCounter)
    } else {
      App.wrongCounter += 1;
      $('#wrong-counter').text(App.wrongCounter)
    }
    App.inputEcho = '';
    App.buildPuzzle();
  },
  option_selected: function(id) {
    // console.log(id);
    res = id.split(".");
    App.puzzleCategory = parseInt(res[0]);
    App.puzzleIndex = parseInt(res[1]);
    App.currentPuzzle = puzzleList[App.puzzleCategory].puzzles[App.puzzleIndex].f;
    App.buildPuzzle();
  },
  number_click: function(id) {
    console.log(id);
    if (id === 'c') {
      App.inputEcho = '';
    } else if (id === 'r') {
      App.inputEcho = App.inputEcho.slice(0, -1);
    } else if (id === '='){
      console.log('---');
      console.log(App.puzzleResult);
      console.log(App.inputEcho)
      console.log('===');
      flag = ''+App.puzzleResult === App.inputEcho;
      App.triggerResult(flag);
    } else {
      App.inputEcho += id;
    }
    $('#input-echo').text(App.inputEcho)
  }
}


$(function() {
  $(window).ready(function () {
       App.init();
       // console.log(puzzleList[4].puzzles[3].f());
  });
});
