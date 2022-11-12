import { useEffect, useRef, useState } from 'react';
import s from '../styles/Header.module.scss'
import { changeImageInCarouzel } from '../FUNCTIONS/headerPage/changeImageInCarouzel';

const HeaderPage = ({data}) => {
    const effectSlideFn=(e)=>{
     
     
            let width=window.innerWidth/2
            if(e.clientX<width){
                effect.current.style.transition=`0s`
                effect.current.style.transform=`translateX(-100%)`
            }
            else{
                effect.current.style.transition=`0s`
                effect.current.style.transform=`translateX(200%)`
            }
    }
   const effect=useRef()
useEffect(()=>{
    let size=slideRef.current.clientWidth
    slideRef.current.style.transform=`translateX(`+ -size +"px"
})
useEffect(()=>{
    console.log("wykonuje sie")
    window.addEventListener("mousemove",effectSlideFn)
    return ()=>{
        window.removeEventListener("mousemove",effectSlideFn)
    }
})
const slideRef=useRef()

let imgSlider=data.map((el,i,arr)=>{
    let path=el.fields.img.fields.file.url
    return path
})


 



 




    return ( <div className={s.header}>
        <div className={s.carouzel}>
            <div ref={effect} className={s.effectSlide}>
                <span className={`${s.sOne} ${s.span}`}></span>
                <span className={`${s.sTwo} ${s.span}`}></span>
                <span className={`${s.sThree} ${s.span}`}></span>
                <span className={`${s.sFour} ${s.span}`}></span>
                <span className={`${s.sFive} ${s.span}`}></span>
                <span className={`${s.sSix} ${s.span}`}></span>
            </div>
        <div ref={slideRef} className={s.slide}>
<img src={imgSlider[imgSlider.length-1]}></img>
        {imgSlider.map((el,i,arr)=>{
            let id=el.slice(-18)
         
            return(
                <img key={id}  src={el} alt={`zdj${i}`}></img>
            )
        })}
        <img src={imgSlider[0]}></img>
    

        </div>
        </div>
        <button onClick={()=>changeImageInCarouzel(slideRef,"left",imgSlider,effect)} className={`${s.btn} ${s.btnLeft}`}>Left</button>
        <button onClick={()=>changeImageInCarouzel(slideRef,"right",imgSlider,effect)} className={`${s.btn} ${s.btnRight}`}>Right</button>

    </div> );
}
 
export default HeaderPage;