function Game(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');

  // I add mammoths and the board to the game
  this.m1 = new Mammoth(this.canvas, this.ctx, 50, 0, 32);
  this.board = new Board(this.canvas, this.ctx);
  // more mammoths???
  this.m2 = new Mammoth(this.canvas, this.ctx, 80, -100, 38);
  this.m3 = new Mammoth(this.canvas, this.ctx, 90, -250, 13);
  this.m4 = new Mammoth(this.canvas, this.ctx, 20, -300, 16);
  //mammoth Key code
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
