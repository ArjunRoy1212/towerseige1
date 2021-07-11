class rope{
    constructor(bA , pB){
       var option= {

        bodyA : bA,
        pointB : pB,
        stiffness:0.4,
        length:20
       }

       this.sling=Constraint.create(option)
       this.pointB=pB //this.pointB.x --> pB.x
       World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null
    }

    display() {
        //line(x1,y1,x2,y2)

        if(this.sling.bodyA){ 
            strokeWeight(5)
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
        }

    }
}





