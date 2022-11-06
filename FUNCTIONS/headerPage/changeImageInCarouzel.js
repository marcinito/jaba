let counter=1
let speedTransition=1
export const changeImageInCarouzel=(slideRef,whichButton,imgSlider)=>{

    let size=slideRef.current.clientWidth
    
if(whichButton==="left"){
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
if(whichButton==="right"){
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