import {Participle} from './ParticpleClass'
let participle=[]
let flagCreateParticiple=false
export const canvasWorking=(width,height,ctx)=>{
    console.log("dziala")
   if(flagCreateParticiple===false){
    for(let i=0;i<300;i++){
        participle.push(new Participle(width,height))
    
      }
      
   }
   flagCreateParticiple=true
  
    for(let i=0;i<300;i++){
      participle.push(new Participle(width,height))
  
    }
    ctx.clearRect(0,0,width,height)
    participle.forEach((el)=>{
      el.draw(ctx)
    })
}