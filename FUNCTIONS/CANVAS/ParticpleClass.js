export class Participle{
    constructor(width,height){
        this.posX=Math.floor(Math.random()*width-100)
        this.posY=Math.floor(Math.random()*300)
        this.size=1
        this.arrWithSpeed=[-1,1]
        this.speedX=this.arrWithSpeed[Math.floor(Math.random()*this.arrWithSpeed.length)]
        this.speedY=1
        this.color="gold"
        this.width=width
        this.height=height

    }
    draw(ctx){

        ctx.fillStyle=this.color
ctx.fillRect(this.posX,this.posY,this.size,this.size)



if(this.posX+this.size>this.width||this.posX<0){
    this.speedX=this.speedX*(-1)
}

this.posX+=this.speedX



    }
}