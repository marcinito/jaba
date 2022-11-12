import s from '../styles/Home.module.scss'
import { useEffect,useRef } from 'react'
import { Participle } from '../FUNCTIONS/CANVAS/ParticpleClass'
export const Canvas = ({container}) => {
    const requestRef=useRef()
    const canvasRef=useRef()
    const context=useRef()
    useEffect(()=>{
        let width=container.current.clientWidth
     
    let height=canvasRef.current.clientHeight
    let canvas=canvasRef.current
    context.current=canvas.getContext("2d")

    let arr=[]
    for(let i=0;i<1000;i++){
      arr.push(new Participle(width,height))
    }
    
    const animate=()=>{
      context.current.clearRect(0,0,width,height)
      arr.forEach((el,i,arr)=>{
        el.draw(context.current)
      })
    
      requestAnimationFrame(animate)
    }
    
    
    
    
        requestRef.current =requestAnimationFrame(animate)
        return ()=>cancelAnimationFrame(requestRef.current)
      },[])
    return ( 
        <canvas ref={canvasRef} className={s.canvas}></canvas>
     );
}
 
export default Canvas;