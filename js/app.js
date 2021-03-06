// import 'dtype.js';
App = {
  puzzleCategory: 0,
  puzzleIndex:0,
  puzzleResult:'',
  inputEcho: '',
  correctCounter: 0,
  wrongCounter: 0,
  currentPuzzle: null,
  check: null,
  costomizedPuzzle: null,

  init: function () {
    console.log("App initialized...");
    App.currentPuzzle = puzzleList[App.puzzleCategory].puzzles[App.puzzleIndex].f;
    App.costomizedPuzzle = PuzzleService.getPuzzle('a');
    App.buildPuzzle();
    $("#answerForm").submit(function(event){
      event.preventDefault();
      index = $("input[type='radio'][name='answer']:checked").val();
      result = App.costomizedPuzzle.check(index);
      App.triggerResult(result);
      App.buildCusomizedPuzzle();
    });
  },

  buildPuzzle: function(){
    puzzle = App.currentPuzzle();
    $('#question-title').text(puzzle.title);
    App.puzzleResult = puzzle.result;
    App.check = puzzle.check;
  },

  buildCusomizedPuzzle: function() {
    $('#question-description').text(App.costomizedPuzzle.description);
    var i;
    for(i=0;i<4;i++){
      $('#label'+i).text(App.costomizedPuzzle.answers[i].option);
      $('#answer'+i).prop('checked', false);
    }
  },

  triggerResult: function(result) {
    if(result) {
      App.correctCounter += result;
      $('#correct-counter').text(App.correctCounter)
    } else {
      App.wrongCounter += result;
      $('#wrong-counter').text(App.wrongCounter)
    }
    App.inputEcho = '';
    scoreText = Score.scoreText(App.correctCounter);
    $('#score').text(scoreText);
  },

  option_selected: function(id) {
    res = id.split(".");
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
      App.buildCusomizedPuzzle();

    }
  },

  number_click: function(id) {
    if (id === 'c') {
      App.inputEcho = '';
    } else if (id === 'r') {
      App.inputEcho = App.inputEcho.slice(0, -1);
    } else if (id === '='){
      console.log(App.inputEcho);
      score = App.check(App.inputEcho);
      // console.log(score);
      if(score == 0) {
        $('#audiotag2').trigger('play');
      } else {
        App.triggerResult(score);
        $('#audiotag1').trigger('play');
      }
      App.buildPuzzle();
    } else {
      App.inputEcho += id;
    }
    $('#input-echo').text(App.inputEcho)
  },
  build_keyboard: function() {
    arr = shuffle([1,2,3,4,5,6,7,8,9,0]);
    var i;
    str = '';
    for(i = 0;i < 6; i++) {
      str += '<button type="button" class="btn btn-warning keypad" id="'+arr[i]+'" onclick="App.number_click(this.id)">'+arr[i]+'</button>';
    }
    str += '<button type="button" class="btn btn-warning keypad" id="r" onclick="App.number_click(this.id)"><i class="fas fa-backspace"></i></button>';
    $('#pad1').html(str);

    str = '';
    for(i = 6;i < 10; i++) {
      str += '<button type="button" class="btn btn-warning keypad" id="'+arr[i]+'" onclick="App.number_click(this.id)">'+arr[i]+'</button>';
    }
    str += '<button type="button" class="btn btn-warning keypad" id="/" onclick="App.number_click(this.id)">/</button>';
    str += '<button type="button" class="btn btn-warning keypad" id="." onclick="App.number_click(this.id)">.</button>';
    str += '<button type="button" class="btn btn-warning keypad" id="=" onclick="App.number_click(this.id)"><i class="fas fa-check"></i></button>';
    $('#pad2').html(str);
  },
  build_answer_form: function() {
    var i = 0;
    str = ''
    for(i = 0; i < 4; i++) {
      str += '<div class="custom-control custom-radio custom-control-inline"><input type="radio" class="custom-control-input" id="answer'+i+'" value="'+i+'" name="answer"><label class="custom-control-label" for="answer'+i+'" id="label'+i+'"></label></div>';
    }
    str += '<div><button type="submit">Confirm</button></div>';

    $('#answerForm').html(str);
  },
  build_puzzle_options: function() {
    str = '<nav class="navbar navbar-expand-lg navbar-light bg-transparent"><div class="collapse navbar-collapse"><ul class="navbar-nav mr-auto">';
    options=""
    types = puzzleList.length;
    var i;
    var j;

    for(i = 0; i < types; i++) {
      puzzle = puzzleList[i];
      options += '<li class="nav-item dropdown"><a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + puzzle.symbol + '</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">';
      items = puzzle.puzzles.length;
      for(j = 0; j < items; j++) {
        options += '<a class="dropdown-item" href="#" id="'+i+'.'+j+'" onclick="App.option_selected(this.id);">'+ puzzle.symbol +  puzzle.puzzles[j].title+'</a>';
      }
      options += '</div></li>';
    }
    str += options;

    str += '</ul></div></nav>';
    $('#puzzle-options').html(str);
  }
}

function shuffle(array){
  return array.sort((a,b) => 0.5 - Math.random());
}

$(function() {
  $(window).ready(function () {
       App.init();
       App.build_keyboard();
       App.build_answer_form();
       App.build_puzzle_options();
       $('#audiotag1').trigger('load');
       $('#audiotag2').trigger('load');
  });
});
