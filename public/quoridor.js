var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 25;
var p1 = {x: 8, y: 0,  playerNumber: 1, barriers: 10};
var p2 = {x: 8, y: 16, playerNumber: 2, barriers: 10};
var active_player = p1;
var board = [
  "EXEXEXEX1XEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEXEXEXEXEXE",
  "XXXXXXXXXXXXXXXXX",
  "EXEXEXEX2XEXEXEXE"
];



function draw_board() {
    this.height = board.length;
    this.width = board[0].length;
    
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1000,1000);
   
    for (var y = 0; y < this.height; y++){
        for (var x = 0; x < this.width; x++){
            if (board[y].charAt(x) === "E"){
              ctx.fillStyle = "brown";
              ctx.fillRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100);
              ctx.strokeStyle = "white";
	            ctx.strokeRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100)
              
            } else if (board[y].charAt(x) === "1"){
              ///draw p1
                ctx.fillStyle = "brown";
                ctx.fillRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100);
                ctx.strokeStyle = "white";
                ctx.strokeRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100)
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(74 + x * cellwidth, 74 + y * cellwidth, 20, 0, 2 * Math.PI);
                ctx.fill();

            } else if (board[y].charAt(x) === "2"){
              //draw p2
              ctx.fillStyle = "brown";
              ctx.fillRect(50 + x * cellwidth, 50 + y * cellwidth,100, 100);
              ctx.strokeStyle = "white";
              ctx.strokeRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100)
              ctx.fillStyle = "blue";
              ctx.beginPath();
              ctx.arc(74 + x * cellwidth, 74 + y * cellwidth, 20 , 0, 2 * Math.PI);
              ctx.fill();
            }
        }
    }

    for (var y = 0; y < this.height; y++){
      for (var x = 0; x < this.width; x++){
        if (board[y].charAt(x) === "B"){
            //Draw Barrier
            if (x === 16) {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + cellwidth * x, 70 + cellwidth * y, 50, 8);
            }

            if (y === 16) {
              ctx.fillStyle = "black";
              ctx.fillRect(70 + cellwidth * x, 50 + cellwidth * y, 8, 50);
            }

            if (y !== 16) {
              if (board[y+1].charAt(x) === "B" || board[y+1].charAt(x) === "X") {
                ctx.fillStyle = "black";
                ctx.fillRect(70 + cellwidth * x, 50 + cellwidth * y, 8, 50);
              }
            }
            if (board[y].charAt(x+1) === "B" || board[y].charAt(x+1) === "X") {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + cellwidth * x, 70 + cellwidth * y, 50, 8);
            }            
          }
      }
    }
}

addEventListener("keydown", function(event){
 
  if (event.keyCode === 37) {
      y = active_player.y;
      x = active_player.x;
      if (board[y].charAt(0) !== active_player.playerNumber.toString()) {
        if (board[y].charAt(x - 1) !== 'B') {
          if (board[y].charAt(x - 2) === '1' || board[y].charAt(x - 2) === '2') {
            board[y] = set_char_at(board[y], x, 'E');
            x -= 4
          } else {
            board[y] = set_char_at(board[y], x, 'E');
            x -= 2;
          }
          board[y] = set_char_at(board[y], x, active_player.playerNumber);
          active_player.x = x;
          draw_turn();
          change_active_player(); 
        } else {
          console.log("Barrier in the way!");
        }
    } else {
      console.log("at the board edge");
    } 
  } else if (event.keyCode === 38) {
      y = active_player.y;
      x = active_player.x;
    if (board[0].charAt(x) !== active_player.playerNumber.toString()) {
      if (board[y - 1].charAt(x) !== 'B') {
        if (board[y - 2].charAt(x) === '1' || board[y - 2].charAt(x) === '2') {
          board[y] = set_char_at(board[y], x, 'E');
          y -= 4
        } else {
          board[y] = set_char_at(board[y], x, 'E');
          y -= 2;
        }
        board[y] = set_char_at(board[y], x, active_player.playerNumber);
        active_player.y = y;
        draw_turn();
        change_active_player();
      } else {
        console.log("Barrier in the way!");
      }
    } else {
      console.log("error")
    }
  } else if (event.keyCode === 39) {
      y = active_player.y;
      x = active_player.x;
      if (board[y].charAt(16) !== active_player.playerNumber.toString()) {x;
        if (board[y].charAt(x + 1) !== 'B') {
          if (board[y].charAt(x + 2) === '1' || board[y].charAt(x + 2) === '2') {
            board[y] = set_char_at(board[y], x, 'E');
            x += 4
          } else {
            board[y] = set_char_at(board[y], x, 'E');
            x += 2;
          }
          board[y] = set_char_at(board[y], x, active_player.playerNumber);
          active_player.x = x;
          draw_turn();
          change_active_player();
        } else {
          console.log("Barrier in the way");
        }
    } else {
      console.log("Error edge of the board");
    }
  } else if (event.keyCode === 40) {
      y = active_player.y;
      x = active_player.x;
      if (board[16].charAt(x) !== active_player.playerNumber.toString()) {
        if (board[y + 1].charAt(x) !== 'B') {
          if (board[y + 2].charAt(x) === '1' || board[y + 2].charAt(x) === '2') {
            board[y] = set_char_at(board[y], x, 'E');
            y += 4
          } else {
            board[y] = set_char_at(board[y], x, 'E');
            y += 2;
          }
          board[y] = set_char_at(board[y], x, active_player.playerNumber);
          active_player.y = y;
          draw_turn();
          change_active_player();
        } else {
          console.log('Barrier in the way!');
        }
    } else {
      console.log("Error - Edge of board");
    }
  } else if (event.keyCode === 66) {
    console.log("place barrier");
  }
});

function set_char_at(str, index, chr) {
  if (index > str.length - 1) {
    return str;
  }
  return str.substr(0 , index) + chr + str.substr(index + 1);
}

function change_active_player() {
  if (active_player === p1) {
    active_player = p2;
  } else {
    active_player = p1;
  }
  $('#display').html("Player " + active_player.playerNumber + "'s turn<br>Barriers left: " + active_player.barriers);
}

function check_victory() {
  for (var i = 0; i < board[0].length; i++) {
    if (board[0].charAt(i) === '2') {
      display_victory(2);
    }
    if (board[16].charAt(i) === '1') {
      display_victory(1);
    }
  };
}

function display_victory(playernum) {
  alert("Player " + playernum +" wins!! Please play again.")
  location.reload();
}

function draw_turn() {
  draw_board();
  check_victory();
}

function clickReporter(event) {
  // console.log("Y: " + event.y + " X: " + event.x);
  // console.log("X: " + Math.round((event.x - 60) / cellwidth));
  // console.log("Y: " + Math.round((event.y - 120) / cellwidth));
  var x = Math.round((event.x - 60) / cellwidth);
  var y = Math.round((event.y - 120) / cellwidth);
  var upBar = x % 2 === 0;
  var sideBar = y % 2 === 0;

  if (upBar && sideBar) {
    $('#display').html("Cannot place a barrier on a corner")
  } else if (upBar || sideBar) {
    if (board[y - 1].charAt(x - 1) === "B") {
    } else {
      board[y - 1] = set_char_at(board[y - 1], x - 1, "B");
      active_player.barriers--;
      draw_turn();
      change_active_player();
    }
  } else {
    $('#display').html("Cannot place a barrier in the center of a square")
  }
} 

canvas.addEventListener('click', clickReporter, false);
draw_turn();
