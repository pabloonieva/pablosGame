function Mammoth(canvas, ctx, name, size, x, jumpKey, image){
   // mammoth fixed properties
   this.canvas = canvas;
   this.ctx = ctx;
   this.name = name;
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
   this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
   // cuando mis pequeños mammoths era cajitas azules...
   // this.ctx.fillStyle = "#32c3ff";
   // this.ctx.fillRect(this.x,this.y,this.size,this.size);
   // this.ctx.stroke();

   if(this.checkCollision()){
     // horizontal speed collision when collision
     this.collision();
   }else{
     // horizontal speed inteligence when no collision
     if(this.x > 400){
       this.vx += -0.5;
     }else if(this.x > 200){
       this.vx += -0.05;
     }else if(this.x > 0){
       this.vx += -0.01;
     }else if(this.x > -200){
       this.vx += 0.01;
     }else{
       this.vx += 0.05;
     }
  }

  this.x += this.vx;

  // vertical speed inteligence (jump and gravity)
  if(this.y > 0){
     this.vy += this.gravity;
     this.y += this.vy;
  }else{
    this.y = 0;
  }
};


Mammoth.prototype.checkCollision = function(){
  for(i=0; i<game.listOfMammoth.length; i++){
    if(this.name == game.listOfMammoth[i].name){
      // I cant collision with myself -> nothing happens
    }else{
      if(this.x + this.size > game.listOfMammoth[i].x && this.x + this.size - 20 < game.listOfMammoth[i].x){
        return true;
      }
    }
  }
};

Mammoth.prototype.collision = function(){
  for(i=0; i<game.listOfMammoth.length; i++){
    if(this.name == game.listOfMammoth[i].name){
      // I cant collision with myself -> nothing happens
    }else{
      if(this.x + this.size > game.listOfMammoth[i].x){
        //collision front. This mammoth goes back, the other one goes front
        this.vx += -1.5;
        game.listOfMammoth[i].vx += 1;
      }
    }
  }

};



Mammoth.prototype.jump = function (){
  if(this.y < 2 && this.y >= 0){
    this.y = 1;
    this.vy = 10;
  }else{
    return;
  }

};

Mammoth.prototype.doKeyDown = function (event) {
  if(event.keyCode == this.jumpKey){
    this.jump();
  }
};
