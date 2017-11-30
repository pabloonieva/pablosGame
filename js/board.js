function Board(canvas, ctx, backgroundImage) {
  this.canvas = canvas;
  this.ctx = ctx;

  // main board properties
  // fix properties
  this.ctx.translate(400,400);
  this.ctx.scale(1,-1);
  this.degreeToRad = -Math.PI/180;
  this.backgroundImage = new Image();
  this.backgroundImage.src = backgroundImage;

  // variable properties
  this.angle = 0;
  this.angleRotation = 0.05;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
  this.imagex = -450;
  this.imageVx = 5;
   //Is it wrong this way?
   //document.dokeydown = this.m1.doKeyDown.bind(this.m1);
}

Board.prototype.drawSkyline = function () {
  //dirty solution to clean all canvas
  this.ctx.clearRect(-800, -800, this.canvas.width+1000, this.canvas.height+1000);
  if(this.imagex > -(450 + this.backgroundImage.width)){
    console.log(this.imagex);
    this.ctx.drawImage(this.backgroundImage, this.imagex, -330, 2800, 1000);
    this.ctx.drawImage(this.backgroundImage, this.imagex + this.backgroundImage.width, -330, 2800, 1000);
    this.imagex -= this.imageVx;
  }else{
    this.imagex = -450;
    console.log(this.imagex);
  }
  // this.ctx.beginPath();
  // this.ctx.moveTo(-500,0);
  // this.ctx.lineTo(500,0);
  this.ctx.stroke();
};

//move horizon
Board.prototype.moveSkyline = function(){
  if(this.angle > 20){
    this.angleRotation *= -1;
  }else if(this.angle < -20){
    this.angleRotation *= -1;
  }
  this.angle += this.angleRotation;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
};
