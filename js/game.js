function Game(canvas) {
 this.angle = 0;
 this.angleRotation = 0.5;
 this.degreeToRad = -Math.PI/180;
 this.canvas = document.getElementById(canvas);
 this.ctx = this.canvas.getContext('2d');
 this.ctx.translate(400,400);
 this.ctx.rotate(this.degreeToRad*this.angleRotation);
 this.ctx.scale(1,-1);
 this.m1 = new Mammoth(this.canvas, 50, 0);

 //Second Mammoth
 //this.m2 = new Mammoth("canvas", 80, -100);

 //Is it wrong this way?
 //document.dokeydown = this.m1.doKeyDown.bind(this.m1);
}

Game.prototype.drawSkyline = function () {
  //dirty solution
  this.ctx.clearRect(-800,-800, this.canvas.width+1000, this.canvas.height+1000);
  this.ctx.beginPath();
  this.ctx.moveTo(-500,0);
  this.ctx.lineTo(500,0);
  this.ctx.stroke();
};

//move horizon
Game.prototype.moveSkyline = function(){
  if(this.angle > 10){
    this.angleRotation *= -1;
  }else if(this.angle < -10){
    this.angleRotation *= -1;
  }
  this.angle += this.angleRotation;
  console.log(this.angle);
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
};

var game = new Game("canvas");

var t = new Date();
window.setInterval(function(){
  //document.dokeydown = game.m1.doKeyDown.bind(game.m1);
  // console.log(document.dokeydown);
  game.drawSkyline();
  setTimeout(game.moveSkyline(),5000);
  game.m1.drawMammoth();
  //Comento el segundo mammoth
  //game.m2.drawMammoth();
  this.addEventListener("keydown",game.m1.doKeyDown.bind(game.m1),true);
  //this.addEventListener("keydown",game.m2.doKeyDown.bind(game.m2),true);
}, 20);
