import { useEffect, useRef, useState } from 'react';
import s from '../styles/Header.module.scss'
import { changeImageInCarouzel } from '../FUNCTIONS/headerPage/changeImageInCarouzel';
const HeaderPage = ({data}) => {
   
useEffect(()=>{
    let size=slideRef.current.clientWidth
    slideRef.current.style.transform=`translateX(`+ -size +"px"
})
const slideRef=useRef()

let imgSlider=data.map((el,i,arr)=>{
    let path=el.fields.img.fields.file.url
    return path
})


 



 




    return ( <div className={s.header}>
        <div className={s.carouzel}>
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
        <button onClick={()=>changeImageInCarouzel(slideRef,"left",imgSlider)} className={`${s.btn} ${s.btnLeft}`}>Left</button>
        <button onClick={()=>changeImageInCarouzel(slideRef,"right",imgSlider)} className={`${s.btn} ${s.btnRight}`}>Right</button>

    </div> );
}
 
export default HeaderPage;