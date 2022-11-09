import s from '../styles/Categories.module.scss'
import Link from 'next/link'
import { useEffect,useRef } from 'react';



const Categories = ({full}) => {
    const rocketRef=useRef()
    const rocketHandle=()=>{
        if(window.scrollY>650){
              
            rocketRef.current.style.transition="5s"
            rocketRef.current.style.transform=`translateY(-1700px)`
                    }
                    if(window.scrollY<10&&rocketRef.current.getBoundingClientRect().y<0){
                        rocketRef.current.style.transition=`0s`
                        rocketRef.current.style.transform=`translateY(0px)`
                     
                    }
    }
useEffect(()=>{
    document.addEventListener("touchstart", function() {}, true);
    window.addEventListener("scroll",rocketHandle)
    return ()=>{
        window.removeEventListener("scroll",rocketHandle)
    }

})
    return ( <div className={s.categories} onScroll={()=>scrollAction()}>
        <img ref={rocketRef} className={s.rocket} src={"./rocket.png"}></img>
        <h2 className={s.title}>Wykonane prace</h2>
        <section className={s.section}>
         {full.map((el,i,arr)=>{
            return(
                <article key={el.sys.id} className={s.article}>
                   
                    <img className={s.imgThumbnail} src={el.fields.images[0].fields.file.url}></img>
                   
                    <Link href={`/${el.fields.adres}`}>
                    <button className={s.button}>Sprawdz</button>
                    </Link>
                      
                </article>
            )
         })}

        </section>
    </div> );
}
 
export default Categories;