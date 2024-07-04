import { useScroll } from "framer-motion"
import { useState } from "react";



const Work=()=>{


const [images,setImages]=useState([
  {url:"https://t4.ftcdn.net/jpg/04/40/45/13/360_F_440451329_10XxgZEOGmAUABt45f6QT8aGelq7FLI6.jpg", top:"50%" ,left:"50%",isActive:false},
  {url:"https://w7.pngwing.com/pngs/143/427/png-transparent-zumba-dance-graphic-design-logo-design-logo-computer-wallpaper-sports-thumbnail.png", top:"56%",left:"44%",isActive:false},
  {url:"https://i.etsystatic.com/8804575/r/il/375ffe/1027994432/il_570xN.1027994432_dpn9.jpg", top:"45%",left:"56%",isActive:false},
  {url:"https://st.depositphotos.com/1027431/4657/v/450/depositphotos_46573749-stock-illustration-abstract-vector-logo-design-template.jpg", top:"60%",left:"53%",isActive:false},
  {url:"https://i.ytimg.com/vi/KDQi6Dn-0aI/maxresdefault.jpg", top:"43%",left:"40%",isActive:false},
  {url:"https://pbs.twimg.com/media/CmXKjqZUEAAcH63.jpg:large", top:"65%",left:"55%",isActive:false}
]
)
const { scrollYProgress  } = useScroll();


scrollYProgress.on("change",(data)=>{
  //console.log(Math.floor(data*100))
 const imagesShow=(arr)=>{
  setImages((prev)=>
    prev.map((item,index)=>
    
      arr.indexOf(index)===-1 
       
       ? {...item,isActive:false}
      
      :{...item,isActive:true}
      
    )
    
  );


 }

  switch(Math.floor(data*200)){
    case 0:
      imagesShow([])
     //console.log("1")
      break;
    case 1:
      imagesShow([0])
     // console.log("12")
      break;
    case 2:
      imagesShow([0,1])
     // console.log("123")
      break;
    case 3:
      imagesShow([0,1,2])
     // console.log("1234")
      break;
    case 4:
      imagesShow([0,1,2,3])
     // console.log("12345")
      break;
    case 5: 
     imagesShow([0,1,2,3,4])
     // console.log("123456")
      break;
    case 6:
      imagesShow([0,1,2,3,4,5])
     // console.log("1234567")
      break;
    

  }
  

})



  return(
    <>
    <div className="w-full mt-10 ">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <div className="text-[30vw] leading-none font-medium select-none ">
          Dance
        <div className="absolute top-0 w-full h-full">
          {images.map((elem,index)=>(elem.isActive && (
            <img className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
            key={index}
            src={elem.url}
            alt=""
            style={{top:elem.top,left:elem.left}}
            />
          ) ))}
        </div>
        </div>
      </div>
      
    </div>
    
    </>
  )
};
export default Work;