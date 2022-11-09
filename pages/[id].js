import s from '../styles/Article.module.scss'
import { createClient } from "contentful";
import Contact from '../component/Contact';
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
const Article = ({data}) => {
    console.log(data)
    return ( <div className={s.article}>
       
        <main className={s.main}>
         <div className={s.titleEffect}></div>   
        <div className={s.title}>{data.fields.tytul}</div>
        </main>
       

    </div> );
}
 
export default Article;