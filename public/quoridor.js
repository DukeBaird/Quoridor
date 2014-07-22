var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cellwidth = 50;
var turn_player = 1;
var player_1 = [4,0];
var player_2 = [4,8];
var p1_barriers = 10;
var p2_barriers = 10;

function draw_board(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1000,1000);
    
    for (var x = 0; x < 9; x++){
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
    draw_players();
    draw_Barriers();
}

function swap_turn(){
     console.log("change turn player");   
}

$("#move").on("click",function(){
   console.log("moving!");
    swap_turn();
});

$("#barrier").on("click",function(){
    console.log("placing barrier!");   
    swap_turn();
});
    
start_game();
