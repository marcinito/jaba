import s from '../styles/World.module.scss'
import {useRef,useEffect} from 'react'
const World = () => {
    const effectWorld=(distance)=>{
            let factor=[1,1]
            let howMany=Math.floor(Math.random()*distance)*factor[Math.floor(Math.random()*factor.length)]
          

   
         

            earth.current.style.left=`${howMany}%`
            console.log(earth.current.style.left.slice(0,3))
            
            earth.current.style.boxShadow=`inset 3px 3px 3px red,5px 5px 6px red`
      
            setTimeout(()=>{
              
                  
                   earth.current.style.left=`50%`
                   earth.current.style.transform=`translateX(-50%)`
                
                earth.current.style.boxShadow=`inset 0 0 10px #466ff3,0 0 30px #466ff3`
        
            },1500)
            return
        
    }
    useEffect(()=>{
     
        let distanceShift=100
   
earth.current.addEventListener('mouseover',()=>effectWorld(distanceShift))

    })
    const earth=useRef()
    

    return ( <div className={s.world}>
<div ref={earth} className={s.earth}></div>
    </div> );
}
 
export default World;