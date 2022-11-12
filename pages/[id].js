import s from '../styles/Article.module.scss'
import { createClient } from "contentful";
import Contact from '../component/Contact';
import { useRef, useEffect } from 'react';
import { changeImageInCarouzel } from '../FUNCTIONS/headerPage/changeImageInCarouzel';
import { useRouter } from 'next/router'
import Canvas from '../component/Canvas';
const client=createClient({
    space:"5r8xso88q94y",
    accessToken:"viwGlOS3XAgC8R0RwkgWVfbzUrFSYoVfPJCh8-yMCKM"
  })
export const getStaticPaths=async()=>{
    const res=await client.getEntries({
        content_type:"zdjecia"
    })
    const paths=res.items.map(item=>{
        return {
            params:{id:item.fields.adres}
        }
    })
    return{
        paths,
        fallback:false,
    }

}
export const getStaticProps=async(context)=>{
    const res=await client.getEntries({
        content_type:"zdjecia",
        'fields.adres':context.params.id
    })
    return {
        props:{data:res.items[0]}
    }
}
//ARTICLE COMPONENT
const Article = ({data}) => {
    let loaderArr=[]
for(let i=0;i<20;i++){
    loaderArr.push({"--i":i})
}

  
    const router=useRouter()
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

const effectReturnFn=()=>{
    returnEffectRef.current.style.opacity=1
    setTimeout(()=>{
        router.push("/")
        returnEffectRef.current.style.opacity=0
    },1500)

}

    const slideRef=useRef()
    const effect=useRef()
    const returnEffectRef=useRef()
    const container=useRef()
    useEffect(()=>{
        let size=slideRef.current.clientWidth
        console.log(size)
        console.log(window.innerWidth)
       
        slideRef.current.style.transform=`translateX(`+  -size + "px"
    })
    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener("mousemove",effectSlideFn)
        return ()=>{
            window.removeEventListener("mousemove",effectSlideFn)
        }
    })
  
   
    let title=data.fields.tytul.split("")
    let middleIndex=Math.ceil(title.length / 2)
    let firstPart=title.splice(0,middleIndex).join("")
    let secondPart=title.splice(-middleIndex).join("")
  
   let arrayWithImg=data.fields.images.map((el,i,arr)=>{

    
    return {
        path:el.fields.file.url,
        id:el.sys.id
    }
   })
 

    return ( <div ref={container} className={s.container}>
        <Canvas container={container}></Canvas>
        <main className={s.main}>
            <div ref={returnEffectRef} className={s.returnEffect}>
                {loaderArr.map((el,i,arr)=>{
              
                  let id=el['--i']
                    return(
                        <span key={id}  className="loader" style={el} ></span>
                    )
                })}
            </div>
            <div className={s.title}>
                <div className={s.sprites}></div>
                <p className={s.firstPart}>{firstPart}</p><p className={s.secondPart}>{secondPart}</p>
                </div>
            <section className={s.section}>
            <div ref={effect} className={s.effectSlide}>
                <span className={`${s.sOne} ${s.span}`}></span>
                <span className={`${s.sTwo} ${s.span}`}></span>
                <span className={`${s.sThree} ${s.span}`}></span>
                <span className={`${s.sFour} ${s.span}`}></span>
                <span className={`${s.sFive} ${s.span}`}></span>
                <span className={`${s.sSix} ${s.span}`}></span>
            </div>
                <div ref={slideRef} className={s.slider}>
                    <img className={s.img} src={arrayWithImg[arrayWithImg.length-1].path}></img>
                    {arrayWithImg.map((el,i,arr)=>{
                        
                     return (
                        <img className={s.img} key={el.id} src={el.path} alt="photo"></img>
                     )
                    })}
                    <img className={s.img} src={arrayWithImg[0].path}></img>
                </div>
                    
            </section>
           <div className={s.buttonPak}>
            <button className={s.left} onClick={()=>changeImageInCarouzel(slideRef,"left",arrayWithImg,effect)}>←</button>
            <button className={s.right} onClick={()=>changeImageInCarouzel(slideRef,"right",arrayWithImg,effect)}>→</button>
            <button className={s.return} onClick={()=>effectReturnFn()} >Powrót</button>
           </div>
        </main>
       

    </div> );
}
 
export default Article;