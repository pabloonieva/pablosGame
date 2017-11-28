function Mammoth(canvas, ctx, height, xPosition, jumpKey){
   // mammoth fixed properties
   this.canvas = canvas;
   this.ctx = ctx;
   this.height = height;
   //this.sprite = sprite;
   this.xPosition = xPosition;
   this.jumpKey = jumpKey;
   // mammoth fixed properties
   this.y = 0;
   this.vx = 0.1;
   this.vy = 0;
   this.gravity = -0.4;
 }

 Mammoth.prototype.drawMammoth = function () {
   this.ctx.fillStyle = "#32c3ff";
   this.ctx.fillRect(this.xPosition,this.y,this.height,this.height);
   this.ctx.stroke();

   this.xPosition += this.vx;
   if(this.y > 0){
      this.vy += this.gravity;
      this.y += this.vy;
   }else{
     this.y = 0;
   }
   //console.log(game.board.angle);
 };

Mammoth.prototype.jump = function (){
  this.y = 1;
  this.vy = 10;
};

Mammoth.prototype.doKeyDown = function (event) {
  if(event.keyCode == this.jumpKey){
    this.jump();
  }
};
