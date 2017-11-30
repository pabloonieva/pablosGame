function Board(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;

  // main board properties
  // fix properties
  this.ctx.translate(400,400);
  this.ctx.scale(1,-1);
  this.degreeToRad = -Math.PI/180;
  // variable properties
  this.angle = 0;
  this.angleRotation = 0.05;
  this.ctx.rotate(this.degreeToRad*this.angleRotation);

   //Is it wrong this way?
   //document.dokeydown = this.m1.doKeyDown.bind(this.m1);
}

Board.prototype.drawSkyline = function () {
  //dirty solution to clean all canvas
  this.ctx.clearRect(-800,-800, this.canvas.width+1000, this.canvas.height+1000);
  this.ctx.beginPath();
  this.ctx.moveTo(-500,0);
  this.ctx.lineTo(500,0);
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
