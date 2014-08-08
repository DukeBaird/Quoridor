var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 50;
var active_player = 1;
var p1 = {x: 8, y: 0};
var p2 = {x: 8, y: 15}
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



function draw_board(){
    this.height = board.length;
    this.width = board[0].length;
    
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1000,1000);
   
    for (var y=0; y < this.height; y++){
        for (var x=0; x < this.width; x++){
            if (board[y].charAt(x) === "E"){
              ctx.fillStyle = "brown";
              ctx.fillRect(50 + x*50, 50 + y*50,100,100);
              ctx.strokeStyle = "white";
	            ctx.strokeRect(50 + x*50, 50 + y*50, 100, 100)
            } else if (board[y].charAt(x) === "1"){
              ///draw p1
                ctx.fillStyle = "brown";
                ctx.fillRect(50 + x*50, 50 + y*50,100, 100);
                ctx.strokeStyle = "white";
                ctx.strokeRect(50 + x*50, 50 + y*50, 100, 100)
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.arc(100 + x*50, 100 + y*50, 40, 0, 2* Math.PI);
                ctx.fill();

            } else if (board[y].charAt(x) === "2"){
              //draw p2
              ctx.fillStyle = "brown";
              ctx.fillRect(50 + x*50, 50 + y*50,100, 100);
              ctx.strokeStyle = "white";
              ctx.strokeRect(50 + x*50, 50 + y*50, 100, 100)
              ctx.fillStyle = "blue";
              ctx.beginPath();
              ctx.arc(100 + x*50, 100 + y*50, 40 , 0, 2* Math.PI);
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
              ctx.fillRect(95 + 50*x, 50 + 50*y, 10, 100);
            }

            if (x === 0 || x === 15) {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + 50*x, 95 + 50*y, 100, 10);
            }

            if (board[y+1].charAt(x) === "B" || board[y+1].charAt(x) === "X") {
              ctx.fillStyle = "black";
              ctx.fillRect(95 + 50*x, 50 + 50*y, 10, 100);
            }

            if (y > 0) {
              if (board[y-1].charAt(x) === "B" || board[y-1].charAt(x) === "X") {
                ctx.fillStyle = "black";
                ctx.fillRect(95 + 50*x, 50 + 50*y, 10, 100);
              }
            }

            if (board[y].charAt(x+1) === "B" || board[y+1].charAt(x+1) === "X") {
              ctx.fillStyle = "black";
              ctx.fillRect(50 + 50*x, 95 + 50*y, 100, 10);
            }
          }
      }
    }
}


function draw_Barriers(){
    
    ctx.fillStyle = "black";
    
    for (var x = 0; x < p1_barriers; x++){
        ctx.fillRect(10, 50 + 50*x, 30, 10);
    }
    for (var x = 0; x < p2_barriers; x++){
        ctx.fillRect(960, 940 - 50*x, 30, 10);
    }   
}

function start_game(){
	draw_board();
  draw_Barriers();
}

addEventListener("keydown", function(event){
 
  if (event.keyCode === 37) {
    console.log('move left');
  } else if (event.keyCode === 38) {
    console.log('move up');
  } else if (event.keyCode === 39) {
    console.log('move right');
  } else if (event.keyCode === 40) {
    console.log("move down");
  } else if (event.keyCode === 66) {
    console.log("place barrier");
  }

})
    
start_game();
