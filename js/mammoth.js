var SPACE_KEY = 32;

function Mammoth(canvas, height, xPosition){
   this.canvas = canvas;
   this.ctx = this.canvas.getContext('2d');
   this.height = height;
   //this.sprite = sprite;
   this.xPosition = xPosition;
   this.y = 0;
   this.vx = 0;
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
 };

Mammoth.prototype.jump = function (){
  this.y = 1;
  this.vy = 10;
};

Mammoth.prototype.doKeyDown = function (event) {
  if(event.keyCode == SPACE_KEY){
    this.jump();
  }
};

// var m1 = new Mammoth("canvas", 50, 0);
