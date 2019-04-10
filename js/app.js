// import 'dtype.js';
App = {
  puzzleCategory: 0,
  puzzleIndex:0,
  puzzleResult:'',
  inputEcho: '',
  correctCounter: 0,
  wrongCounter: 0,
  currentPuzzle: null,
  check: defaultCheck,
  costomizedPuzzle: null,

  init: function () {
    console.log("App initialized...");
    App.currentPuzzle = puzzleList[App.puzzleCategory].puzzles[App.puzzleIndex].f;
    App.costomizedPuzzle = PuzzleService.getPuzzle('a');
    App.buildPuzzle();
    $("#answerForm").submit(function(event){
      event.preventDefault();
      index = $("input[type='radio'][name='answer']:checked").val();
      console.log(index);
      result = App.costomizedPuzzle.check(index);
      console.log(result);
    });
  },

  buildPuzzle: function(){
    puzzle = App.currentPuzzle();
    $('#question-title').text(puzzle.title);
    App.puzzleResult = puzzle.result;
    App.check = puzzle.check ? puzzle.check : defaultCheck;
  },

  buildCusomizedPuzzle: function() {


  },

  triggerResult: function(result) {
    if(result) {
      App.correctCounter += 1;
      $('#correct-counter').text(App.correctCounter)
    } else {
      App.wrongCounter += 1;
      $('#wrong-counter').text(App.wrongCounter)
    }
    App.inputEcho = '';
    scoreText = Score.scoreText(App.correctCounter);
    $('#score').text(scoreText);
    App.buildPuzzle();
  },

  option_selected: function(id) {
    res = id.split(".");
    console.log(res);
    if (res[0] != 'customized') {
      $('#customized-puzzle').hide();
      $('#predefined-puzzle').show();
      App.puzzleCategory = parseInt(res[0]);
      App.puzzleIndex = parseInt(res[1]);
      App.currentPuzzle = puzzleList[App.puzzleCategory].puzzles[App.puzzleIndex].f;
      App.buildPuzzle();
    } else {
      $('#customized-puzzle').show();
      $('#predefined-puzzle').hide();
      $('#question-description').text(App.costomizedPuzzle.description);
      var i;
      for(i=0;i<4;i++){
        $('#label'+i).text(App.costomizedPuzzle.answers[i].option);
      }
    }
  },

  number_click: function(id) {
    if (id === 'c') {
      App.inputEcho = '';
    } else if (id === 'r') {
      App.inputEcho = App.inputEcho.slice(0, -1);
    } else if (id === '='){
      flag = App.check(''+App.puzzleResult,App.inputEcho);
      App.triggerResult(flag);
    } else {
      App.inputEcho += id;
    }
    $('#input-echo').text(App.inputEcho)
  }
}

function defaultCheck(a,b){return a === b;}

$(function() {
  $(window).ready(function () {
       App.init();
       // console.log('🐷'.length);
       // console.log(Score.scoreText(100));
  });
});
