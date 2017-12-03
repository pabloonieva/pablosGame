function Game(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');

  // I add mammoths and the board to the game
  this.board = new Board(this.canvas, this.ctx, "images/background3.png");
  this.mammoth6 = new Mammoth(this.canvas, this.ctx, "Mammoth 6", 80, -300, 32, "images/Mammoth6.png");
  this.mammoth10 = new Mammoth(this.canvas, this.ctx, "Mammoth 10", 100, -200, 38, "images/Mammoth10.png");

  // more mammoths???
  // this.mammoth23 = new Mammoth(this.canvas, this.ctx, "Mammoth 23", 110, -100, 13, "images/Mammoth23.png");
  // this.mammoth69 = new Mammoth(this.canvas, this.ctx, "Mammoth 69", 130, 100, 16, "images/Mammoth69.png");

  this.listOfMammoth = [this.mammoth6, this.mammoth10];
  //mammoths Key codes
  // mammoth6 Space_KEY = 32;
  // mammoth23 Up_KEY = 38;
  // mammoth10 Enter_KEY = 13;
  // mammoth69 Shift_KEY = 16;

}


var game = new Game("canvas");

//var t = new Date();

window.setInterval(function(){
  //document.dokeydown = game.mammoth6.doKeyDown.bind(game.mammoth6);

  game.board.drawSkyline();
  //setTimeout(game.board.moveSkyline(),5000);
  game.board.moveSkyline();
  
  game.mammoth6.drawMammoth();
  this.addEventListener("keydown",game.mammoth6.doKeyDown.bind(game.mammoth6),true);
  game.mammoth10.drawMammoth();
  this.addEventListener("keydown",game.mammoth10.doKeyDown.bind(game.mammoth10),true);
  // game.mammoth23.drawMammoth();
  // this.addEventListener("keydown",game.mammoth23.doKeyDown.bind(game.mammoth23),true);
  // game.mammoth69.drawMammoth();
  // this.addEventListener("keydown",game.mammoth69.doKeyDown.bind(game.mammoth69),true);



  //this.addEventListener("keydown",game.mammoth10.doKeyDown.bind(game.mammoth10),true);
}, 1000/60);
