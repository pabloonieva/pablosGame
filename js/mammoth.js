function Mammoth(canvas, ctx, size, x, jumpKey, image){
   // mammoth fixed properties
   this.canvas = canvas;
   this.ctx = ctx;
   this.size = size;
   this.x = x;
   this.jumpKey = jumpKey;
   // mammoth variable properties
   this.y = 0;
   this.vx = 0.3;
   this.vy = 0;
   this.gravity = -0.3;

   //working with the image
   this.img = new Image();
   this.img.src = image;

 }

 Mammoth.prototype.drawMammoth = function () {
   console.log({x: this.x, y: this.y, size: this.size});
   this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
   // cuando mis pequeños mammoths era cajitas azules...
   // this.ctx.fillStyle = "#32c3ff";
   // this.ctx.fillRect(this.x,this.y,this.size,this.size);
   // this.ctx.stroke();

   // horizontal speed inteligence
   if(this.x > 400){
     this.vx = -0.8;
   }else if(this.x > 200){
     this.vx = -0.6;
   }else if(this.x > 0){
     this.vx = -0.4;
   }else if(this.x > -200){
     this.vx = 0.4;
   }else{
     this.vx = 0.8;
   }

   this.x += this.vx;

   // vertical speed inteligence (jump and gravity)
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
