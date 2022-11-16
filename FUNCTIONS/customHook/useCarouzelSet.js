import { useEffect } from "react";

export const useCarouzelSet = (slide) => {
   useEffect(()=>{
    let size=slide.clientWidth
    slide.style.transform=`translateX(`+ -size +"px"
   })
}
 
export default useCarouzelSet;