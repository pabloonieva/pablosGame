function Board(canvas, ctx, backgroundImage) {
  this.canvas = canvas;
  this.ctx = ctx;

  // main board properties
  // fix properties
  this.ctx.translate(400,450);
  this.ctx.scale(1,-1);
  this.degreeToRad = -Math.PI/180;
  this.backgroundImage = new Image();
  this.backgroundImage.src = backgroundImage;

  // variable properties
  this.angle = 5;
  this.angleRotation = 0.05;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
  this.imagex = -450;
  this.imageVx = 5;
  this.imagey = -370;
   //Is it wrong this way?
   //document.dokeydown = this.m1.doKeyDown.bind(this.m1);
}

Board.prototype.drawSkyline = function () {
  //dirty solution to clean all canvas
  this.ctx.clearRect(-800, -800, this.canvas.width+1000, this.canvas.height+1000);
  // I draw three times the background so that Mammoths can go "backwards"
  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex - this.backgroundImage.width, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);
  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);
  this.ctx.drawImage(this.backgroundImage, 2, 2, this.backgroundImage.width, this.backgroundImage.height, this.imagex + this.backgroundImage.width, this.imagey, this.backgroundImage.width*2, this.backgroundImage.height*2);
  // If tha canvas background is going to finish, I change this.imagex to restart the drawing position
  if(this.imagex > -(450 + this.backgroundImage.width) && this.imagex < this.backgroundImage.width - 450){
    this.imagex -= this.imageVx;
  }else{
    this.imagex = -450;
  }


  // this.ctx.beginPath();
  // this.ctx.moveTo(-500,0);
  // this.ctx.lineTo(500,0);
  this.ctx.stroke();
};

//move horizon
Board.prototype.moveSkyline = function(){
  if(this.angle > 30){
    this.angleRotation *= -1;
  }else if(this.angle < -30){
    this.angleRotation *= -1;
  }
  this.angle += this.angleRotation;
  this.imageVx = this.angle*1.5;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);
};
