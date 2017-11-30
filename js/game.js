function Game(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');

  // I add mammoths and the board to the game
  this.mammoth6 = new Mammoth(this.canvas, this.ctx, "Mammoth 6", 80, -300, 32, "images/Mammoth6.png");
  this.board = new Board(this.canvas, this.ctx, "images/background.png");
  // more mammoths???
  this.mammoth10 = new Mammoth(this.canvas, this.ctx, "Mammoth 10", 100, -200, 38, "images/Mammoth10.png");
  //this.m3 = new Mammoth(this.canvas, this.ctx, 110, -100, 13, "images/Mammoth23.png");
  //this.m4 = new Mammoth(this.canvas, this.ctx, 130, 100, 16, "images/Mammoth69.png");
  this.listOfMammoth = [this.mammoth6,this.mammoth10];

  //mammoths Key codes
  // mammoth6 Space_KEY = 32;
  // m3 Up_KEY = 38;
  // mammoth10 Enter_KEY = 13;
  // m4 Shift_KEY = 16;

}


var game = new Game("canvas");

//var t = new Date();

window.setInterval(function(){
  //document.dokeydown = game.mammoth6.doKeyDown.bind(game.mammoth6);
  game.board.drawSkyline();
  setTimeout(game.board.moveSkyline(),5000);
  game.mammoth6.drawMammoth();
  game.mammoth10.drawMammoth();
  //game.m3.drawMammoth();
  //game.m4.drawMammoth();
  this.addEventListener("keydown",game.mammoth6.doKeyDown.bind(game.mammoth6),true);
  this.addEventListener("keydown",game.mammoth10.doKeyDown.bind(game.mammoth10),true);
  //this.addEventListener("keydown",game.m3.doKeyDown.bind(game.m3),true);
  //this.addEventListener("keydown",game.m4.doKeyDown.bind(game.m4),true);
  //this.addEventListener("keydown",game.mammoth10.doKeyDown.bind(game.mammoth10),true);
}, 1000/60);
