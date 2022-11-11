let counter=1
let speedTransition=1
export const changeImageInCarouzel=(slideRef,whichButton,imgSlider,effect)=>{

    let size=slideRef.current.clientWidth
    //LEFT BUTTON
if(whichButton==="left"){

    effect.current.style.transition=`0.5s`
    effect.current.style.transform=`translateX(200%)`
    setTimeout(()=>{
        effect.current.style.transition=`0s`
    effect.current.style.transform=`translateX(-100%)`
    },510)
    counter--
    if(counter===0){
        counter=2+imgSlider.length-1
        slideRef.current.style.transition=`transform 0s`
        slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
    
        setTimeout(()=>{
            counter--
            slideRef.current.style.transition=`transform ${speedTransition}s`
            slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
        })
        return
    }
  
    slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
    slideRef.current.style.transition=`transform ${speedTransition}s`
}
//RIGHT BUTTON
if(whichButton==="right"){
effect.current.style.transition=`0.5s`
effect.current.style.transform=`translateX(-100%)`
setTimeout(()=>{
    effect.current.style.transition=`0s`
effect.current.style.transform=`translateX(200%)`
},510)
    counter++
    if(counter===2+imgSlider.length-1){
        counter=0
        slideRef.current.style.transition=`transform 0s`
        slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
       
        setTimeout(()=>{
            counter++
            slideRef.current.style.transition=`transform ${speedTransition}s`
            slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
        })
        return
    }
  
    slideRef.current.style.transform=`translateX(`+ -size * counter + "px"
    slideRef.current.style.transition=`transform ${speedTransition}s`
}
}