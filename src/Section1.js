import style from './style.module.css'
import Spline from '@splinetool/react-spline';

export default function Section1() {

   
const blobstyle = {height:'550px' , width:'500px' , overflow:'visible' , position:'relative' }



    return (<>
         <Nav />

         <div className={style.sec}>
         <br />
         
         <h1 style={{color:'white'}}>
         <Spantext text='We' top='20' left='65' size='150px' ze=''/>
         <Spantext text='mix' top='70' left='105' size='180px' ze='4'/>
        <Spantext text='Realities' top='45' left='300' size='170px' ze=''/>
         <Spantext text='to' top='230' left='-900' size='150px' ze=''/>
         <Spantext text='Market' top='270' left='-600' size='220px' ze='4'/>
         <Spantext text='Your' top='420' left='-1780' size='180px' ze='4'/>
         
         <Spantext text='Brand' top='500' left='-1680' size='220px' ze='4'/> 
         </h1>
         
         <div style={{height:'550px' , width:'550px' , overflow:'visible' , position:'relative', left:'440px' , zIndex:'2' , transform:'scale(130%)' , top:'-50px'}}>
         <Spline scene="https://prod.spline.design/a2MnpynoQu7cdpJf/scene.splinecode" />
         </div>
         </div>

         
         <div style={{height:'550px' , width:'340px' , overflow:'visible' , position:'relative', left:'580px' , zIndex:'3' , transform:'scale(150%)' , top:'70px'}}>
         <Spline scene="https://prod.spline.design/eknMfyOj6cbMHEI2/scene.splinecode" />
         </div>
         
         
         </>
      );
      
  
}

function Nav() {
  return (
    <div className={`${style.navbar}`}>
    <div className={`${style.subnav}`}>
        <h1 className={`${style.inline}`} style={{zIndex:1 , display:'inline-block' , fontSize:40}}>Sublime Labs</h1>
        <div className={style.btn}></div>
        </div>
    </div>
  );
}


function Spantext(props)
{

    const styl ={
        position:'relative',
        top:`${props.top}px` ,
        left:`${props.left}px`,
        zIndex: props.ze,
        fontSize: props.size,
        color:'white', 
      
        fontWeight:'bolder',
    }

return(
    <span style={styl}>{props.text}</span>
)
}


{/* <div className={style.heroSection}>
<img src={img} style={{opacity:'1'}} className={style.heroVideo}>
  
 
</img>
<Nav />
</div> */}



{/* <div className={style.heroSection}>
</div> */}

