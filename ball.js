class Ball{
    constructor(x,y,r1,r2){
    var options={
        isStatic:false
        
    }
    
    this.x=x
    this.y=y
    this.r1=r1
    this.r2=r2
    this.body=Bodies.circle(this.x,this.y,this.r1,options)
World.add(world,this.body)
    }
display(){
    push()
    ellipseMode(CENTER)
    fill("white")
    ellipse(this.x,this.y,this.r1,this.r2)
    pop()
}
}