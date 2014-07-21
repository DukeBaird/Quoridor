var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 50;
var player_1 = [4,0];
var player_2 = [4,8];

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

function draw_players(){
    ctx.fillStyle="green";
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(100 + player_1[0]*100,100 + player_1[1]*100,45,0,2*Math.PI);
    ctx.stroke();   
    ctx.fill();
    
    ctx.fillStyle="blue";
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(100 + player_2[0]*100,100 + player_2[1]*100,45,0,2*Math.PI);
    ctx.stroke();   
    ctx.fill();
    
}

function start_game(){
	draw_board();
    draw_players();
}


start_game();
