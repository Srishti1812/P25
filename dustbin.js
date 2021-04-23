class Dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic : true
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill("white")
      rect(pos.x, pos.y, this.width, this.height)
      imageMode(CENTER);
      image(this.image, 638, 130, 150, 150);
    };
  };
  