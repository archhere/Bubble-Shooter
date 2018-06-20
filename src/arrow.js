// import UtilCollision from './util'

class Arrow{
    constructor(){
        this.x = 0;
        this.y = 600;
        this.liveArr = false;
        this.speed = 15;
        this.y_max = 0;
    }

    // getX(){
    //     return this.x;
    // }
    // getY(){
    //     return this.y;
    // }

    shoot(x,y){
          this.x=x+25;
          this.y=y;
        this.liveArr=true;
    }


    update(){
        if(!this.liveArr){
            return;
        }

        this.y-=this.speed;
        if(this.y<this.y_max){
            this.liveArr=false;
            this.y=600;
            this.x=600;
        }

    }
    draw(ctx){
        if(!this.liveArr)return;

        // console.log(this.x+" "+this.y);
        ctx.save();
        ctx.strokeStyle="white";

        ctx.beginPath();
        ctx.moveTo(this.x,600);
        ctx.lineTo(this.x,this.y);
        ctx.stroke();
        ctx.restore();

    }


 //    collidedWith(other){
 //        return Util(this, other);
 // }
}


export default Arrow;
