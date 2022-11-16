import s from '../styles/Categories.module.scss'
import Link from 'next/link'
import { useEffect,useRef } from 'react';



const Categories = ({full}) => {
    const rocketRef=useRef()
    const windowSize=useRef()
    const rocketHandle=()=>{
        console.log(window.scrollY,"position scroll")
     


        let scrollYWhenRocketStart=650
        let scrollYWhenRocketBack=300
        //WHEN layout of page is changed more nearer deskopt rocket will start with lower scrollY 
        if(window.innerHeight<1300 && window.innerWidth> 725 ){
         
            scrollYWhenRocketStart=80
            scrollYWhenRocketBack=10
        }
        
        if(window.scrollY>scrollYWhenRocketStart){
             
            rocketRef.current.style.transition="7s"
            rocketRef.current.style.transform=`translateY(-3900px)`
                    }
                 
                    if(window.scrollY<scrollYWhenRocketBack&&rocketRef.current.getBoundingClientRect().y<0){
                        rocketRef.current.style.transition=`0s`
                        rocketRef.current.style.transform=`translateY(0px)`
                     
                    }
                
    }
useEffect(()=>{
   windowSize.current=window.innerWidth
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
                <article key={el.sys.id} className={s.article} style={windowSize.current>725?{gridColumn:`${i}+${i+1}`}:null}>
                   
                    <img className={s.imgThumbnail} src={el.fields.images[0].fields.file.url}></img>
                   
                    <Link href={`/${el.fields.adres}`}>
                    <button className={s.button}>Sprawdz
                    <span className={s.span1}></span>
                        <span className={s.span2}></span>
                        <span className={s.span3}></span>
                        <span className={s.span4}></span>
                    </button>
                    </Link>
                      
                </article>
            )
         })}

        </section>
    </div> );
}
 
export default Categories;