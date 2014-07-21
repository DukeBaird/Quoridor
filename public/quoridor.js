var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 50;

function draw_board(){
    for (var x =0; x < 9; x++){
        for (var y = 0; y < 9; y++){
            ctx.fillStyle = "brown";
            ctx.fillRect(50 + x*100, 50 + y*100, 100, 100);
            ctx.strokeStyle = "white";
	        ctx.strokeRect(50 + x*100, 50 + y*100, 100, 100);
        }
    }
}


function start_game(){
	draw_board();
}


start_game();
