function Mammoth(canvas, ctx, name, size, x, jumpKey, image){
   // mammoth fixed properties
   this.canvas = canvas;
   this.ctx = ctx;
   this.name = name;
   this.size = size;
   this.x = x;
   this.jumpKey = jumpKey;
   this.img = new Image();
   this.img.src = image;
   // mammoth variable properties
   this.y = 0;
   this.vx = 0.3;
   this.vy = 0;
   this.timeFirstPosition = 0;

 }

 Mammoth.prototype.drawMammoth = function () {
   this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
   // cuando mis pequeños mammoths era cajitas azules...
   // this.ctx.fillStyle = "#32c3ff";
   // this.ctx.fillRect(this.x,this.y,this.size,this.size);
   // this.ctx.stroke();

   // horizontal speed inteligence with and without collision
   if(this.checkCollision()){
     // with collision
     this.collision();
   }else{
     // without collision

     // if (this.x > 300 || this.x < -300){
     //   this.vx += -(this.x/2000);
     // }else if(this.x > 100 || this.x < -100){
     //   this.vx += -(this.x/6000);
     // }

     if(this.x > 400){ this.vx += -0.04;
     }else if(this.x > 300){ this.vx += -0.03;
     }else if(this.x > 200){ this.vx += -0.01;
     }else if(this.x > 100){ this.vx += 0;
     }else if(this.x > 0){ this.vx += 0;
     }else if(this.x > -100){ this.vx += 0;
     }else if(this.x > -200){ this.vx += 0.02;
     }else if(this.x > -400){ this.vx += 0.04;
     }else{ this.vx += 0.05;
     }
  }
  // add maximum speed
  if(this.vx > 6){
    this.vx = 5.5;
  }else if(this.vx < - 6){
    this.vx = -5.5;
  }else{
    this.x += this.vx;
  }
  // vertical speed inteligence (jump and gravity)
  if(this.y > 0){
     this.vy += game.board.gravity;
     console.log(game.board.gravity);
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
      // return !(this.x + this.size < game.listOfMammoth[i].x ||
      //       game.listOfMammoth[i].x + game.listOfMammoth[i].size < this.x ||
      //       this.y + this.size < game.listOfMammoth[i].y ||
      //       game.listOfMammoth[i].y + game.listOfMammoth[i].size < this.y);

      if(this.x + this.size > game.listOfMammoth[i].x &&
         this.x + this.size - game.listOfMammoth[i].size/2 < game.listOfMammoth[i].x &&
         this.y + this.size > game.listOfMammoth[i].y &&
         this.y < game.listOfMammoth[i].y + game.listOfMammoth[i].size){
          return true;
      }
    }
  }



  // for(i=0; i<game.listOfMammoth.length; i++){
  //   var mammoth2 = game.listOfMammoth[i];
  //
  //   if(this.name == game.listOfMammoth[i].name){
  //
  //     // I cant collision with myself -> nothing happens
  //   }else{
  //     if(this.x + this.size > game.listOfMammoth[i].x &&
  //        this.x + this.size - game.listOfMammoth[i].size < game.listOfMammoth[i].x &&
  //        this.y + this.size > game.listOfMammoth[i].y &&
  //        this.y < game.listOfMammoth[i].y + game.listOfMammoth[i].size){
  //          //console.log("chocan también vertical!");
  //          return true;
  //     }
  //   }
  // }
};

Mammoth.prototype.collision = function(){
  for(i=0; i<game.listOfMammoth.length; i++){
    if(this.name == game.listOfMammoth[i].name){
      // I cant collide with myself -> nothing happens
    }else{
      if(this.x + this.size > game.listOfMammoth[i].x){
        //collision front. This mammoth goes back, the other one goes front
        this.vx += -1;
        game.listOfMammoth[i].vx += 1;
      }
    }
  }
};

Mammoth.prototype.jump = function (){
  if(this.y < 1 && this.y >= 0){
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

// should be here??
// Mammoth.prototype.checkFirstPosition = function () {
//   for(i=0; i<game.listOfMammoth.length; i++){
//     if(this.x > game.listOfMammoth[i].x){
//       this.timeFirstPosition++;
//       console.log(this.name + " is first");
//       console.log(this.timeFirstPosition);
//     }else{
//       game.listOfMammoth[i].timeFirstPosition++;
//     }
//   }
// };
