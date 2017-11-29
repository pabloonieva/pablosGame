function Game(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');

  // I add mammoths and the board to the game
  this.m1 = new Mammoth(this.canvas, this.ctx, 80, -300, 32, "images/Mammoth6.png");
  this.board = new Board(this.canvas, this.ctx);
  // more mammoths???
  this.m2 = new Mammoth(this.canvas, this.ctx, 100, -200, 38, "images/Mammoth10.png");
  this.m3 = new Mammoth(this.canvas, this.ctx, 110, -100, 13, "images/Mammoth23.png");
  this.m4 = new Mammoth(this.canvas, this.ctx, 130, 100, 16, "images/Mammoth69.png");

  //mammoths Key codes
  // m1 Space_KEY = 32;
  // m3 Up_KEY = 38;
  // m2 Enter_KEY = 13;
  // m4 Shift_KEY = 16;

}


var game = new Game("canvas");

//var t = new Date();

window.setInterval(function(){
  //document.dokeydown = game.m1.doKeyDown.bind(game.m1);
  game.board.drawSkyline();
  setTimeout(game.board.moveSkyline(),5000);
  game.m1.drawMammoth();
  game.m2.drawMammoth();
  game.m3.drawMammoth();
  game.m4.drawMammoth();
  this.addEventListener("keydown",game.m1.doKeyDown.bind(game.m1),true);
  this.addEventListener("keydown",game.m2.doKeyDown.bind(game.m2),true);
  this.addEventListener("keydown",game.m3.doKeyDown.bind(game.m3),true);
  this.addEventListener("keydown",game.m4.doKeyDown.bind(game.m4),true);
  //this.addEventListener("keydown",game.m2.doKeyDown.bind(game.m2),true);
}, 1000/60);
