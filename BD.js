class BD{
constructor(x,y){
    this.image=loadImage("sprites/dustbingreen.png");
this.x=x
this.y=y
var option={isStatic:true}
this.body= Bodies.rectangle(this.x,this.y,300,45,option)
World.add(world,this.body)
}
display(){
var pos= this.body.position
push()
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,200,200)
pop();
}



}