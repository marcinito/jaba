import s from '../styles/Contact.module.scss'
const Contact = () => {
let vari1={"--i":1}
let vari2={"--i":2}
let vari3={"--i":3}
let vari4={"--i":4}
let vari5={"--i":5}
let vari6={"--i":6}
let vari7={"--i":7}
let vari8={"--i":8}
let vari9={"--i":9}


    return ( <div className={s.contact}>
        <span className={s.phoneNumber}>
            <span style={vari1}>5</span>
            <span style={vari2}>1</span>
            <span style={vari3}>6</span>
            <span style={vari4}>8</span>
            <span style={vari5}>9</span>
            <span style={vari6}>2</span>
            <span style={vari7}>3</span>
            <span style={vari8}>9</span>
            <span style={vari9}>9</span>
            </span>
   
     
    </div> );
}
 
export default Contact;