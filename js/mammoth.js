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
   this.timeFirstPosition = 0;

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

   // horizontal speed inteligence with and without collision
   if(this.checkCollision()){
     // with collision
     this.collision();
   }else{
     // without collision
     if(this.x > 400){
       this.vx += -0.04;
     }else if(this.x > 300){
       this.vx += -0.03;
     }else if(this.x > 200){
       this.vx += -0.01;
     }else if(this.x > 100){
       this.vx += 0;
     }else if(this.x > 0){
       this.vx += 0;
     }else if(this.x > -100){
       this.vx += 0;
     }else if(this.x > -200){
       this.vx += 0.02;
     }else{
       this.vx += 0.03;
     }
  }
  // add maximum speed
  if(this.vx > 6){
    this.vx = 5;
  }else if(this.vx < - 6){
    this.vx = -5;
  }else{
    this.x += this.vx;
  }
  // vertical speed inteligence (jump and gravity)
  if(this.y > 0){
     this.vy += this.gravity;
     this.y += this.vy;
  }else{
    this.y = 0;
  }
};


Mammoth.prototype.checkCollision = function(){
  // var mammoth2 = game.listOfMammoth[i];
  for(i=0; i<game.listOfMammoth.length; i++){
    var mammoth2 = game.listOfMammoth[i];

    if(this.name == game.listOfMammoth[i].name){

      // I cant collision with myself -> nothing happens
    }else{
      if(this.x + this.size > game.listOfMammoth[i].x &&
         this.x + this.size - game.listOfMammoth[i].size < game.listOfMammoth[i].x &&
         this.y + this.size > game.listOfMammoth[i].y &&
         this.y < game.listOfMammoth[i].y + game.listOfMammoth[i].size){
           //console.log("chocan también vertical!");
           return true;
      }


        // console.log("hay choque horizontal");
        // console.log(this.y);
        // console.log(this.img.height);
        // console.log(game.listOfMammoth[i].y);
        // console.log(game.listOfMammoth[i].img.height);



      // https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection  ?¿?¿
      // if (this.x < game.listOfMammoth[i].x + game.listOfMammoth[i].width &&
      //     this.x + this.width > game.listOfMammoth[i].x &&
      //     this.y < game.listOfMammoth[i].y + game.listOfMammoth[i].height &&
      //     this.height + this.y > game.listOfMammoth[i].y){
      //   console.log("Choque frontal del " + this.name);
      //   return true;
      // }

    }
    // if(this.x + this.size > game.listOfMammoth[i].x && this.x < game.listOfMammoth[i].x + game.listOfMammoth[i].size){
    //   this.y = game.listOfMammoth[i].size;
    // }

  }
};

Mammoth.prototype.collision = function(){
  for(i=0; i<game.listOfMammoth.length; i++){
    if(this.name == game.listOfMammoth[i].name){
      // I cant collision with myself -> nothing happens
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

Mammoth.prototype.checkFirstPosition = function () {



};
