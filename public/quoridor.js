var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 50;
var p1 = {x: 8, y: 0,  playerNumber: 1};
var p2 = {x: 8, y: 16, playerNumber: 2};
var active_player = p1;
var p1_barriers = 10;
var p2_barriers = 10;
var board = [
  "EBEXEXEX1XEXEXEXE",
  "BXBXXXXXXXXXXXXXX",
  "EBEXEXEXEXEXEXEXE",
  "XXBXXXXXXXXXXXXXX",
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
   
    for (var y=0; y < this.height; y++){
        for (var x=0; x < this.width; x++){
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
                ctx.arc(100 + x * cellwidth, 100 + y * cellwidth, 40, 0, 2 * Math.PI);
                ctx.fill();

            } else if (board[y].charAt(x) === "2"){
              //draw p2
              ctx.fillStyle = "brown";
              ctx.fillRect(50 + x * cellwidth, 50 + y * cellwidth,100, 100);
              ctx.strokeStyle = "white";
              ctx.strokeRect(50 + x * cellwidth, 50 + y * cellwidth, 100, 100)
              ctx.fillStyle = "blue";
              ctx.beginPath();
              ctx.arc(100 + x * cellwidth, 100 + y * cellwidth, 40 , 0, 2 * Math.PI);
              ctx.fill();
            }
        }
    }

    for (var y=0; y < this.height; y++){
      for (var x=0; x < this.width; x++){
        if (board[y].charAt(x) === "B"){
            //Draw Barrier

            if (y === 0 || y === 15) {
              ctx.fillStyle = "black";
              ctx.fillRect(95 + cellwidth * x, 50 + cellwidth * y, 10, 100);
            }

            if (x === 0 || x === 15) {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + cellwidth * x, 95 + cellwidth * y, 100, 10);
            }

            if (board[y+1].charAt(x) === "B" || board[y+1].charAt(x) === "X") {
              ctx.fillStyle = "black";
              ctx.fillRect(95 + cellwidth * x, 50 + cellwidth * y, 10, 100);
            }

            if (y > 0) {
              if (board[y-1].charAt(x) === "B" || board[y-1].charAt(x) === "X") {
                ctx.fillStyle = "black";
                ctx.fillRect(95 + cellwidth * x, 50 + cellwidth * y, 10, 100);
              }
            }

            if (board[y].charAt(x+1) === "B" || board[y+1].charAt(x+1) === "X") {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + cellwidth * x, 95 + cellwidth * y, 100, 10);
            }
          }
      }
    }
}


function draw_Barriers() {
    
    ctx.fillStyle = "black";
    
    for (var x = 0; x < p1_barriers; x++){
        ctx.fillRect(10, 50 + 50*x, 30, 10);
    }
    for (var x = 0; x < p2_barriers; x++){
        ctx.fillRect(960, 940 - 50*x, 30, 10);
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
  console.log("Player " + playernum +" wins!!");
}

function draw_turn() {
  draw_board();
  draw_Barriers();
  check_victory();
}

function clickReporter(event) {
  console.log("Y: " + event.y + " X: " + event.x);
}

canvas.addEventListener('click', clickReporter, false);
draw_turn();
