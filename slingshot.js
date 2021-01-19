class Slingshot{

constructor(bodya,pointb){
    var options={
        bodyA:bodya,
        pointB:pointb,
        stiffness:0.04,
        length:10
      }

      this.pointb=pointb

      this.sling=Constraint.create(options)
      World.add(world,this.sling)
}
display(){
    strokeWeight(3)
    if(this.sling.bodyA){
        var pointa=this.sling.bodyA.position
        var pointb=this.pointb
        line(pointa.x,pointa.y,pointb.x,pointb.y)
    }
}
 fly(){
     this.sling.bodyA=null
 }
}