import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";
import p1 from "../assets/p1.mp4";
import p2 from "../assets/p2.mp4";
import p3 from "../assets/p3.mp4";
import p4 from "../assets/p4.mp4";
import p5 from "../assets/p5.mp4";
import p6 from "../assets/p6.mp4";
import p7 from "../assets/p7.mp4";
import p8 from "../assets/p8.mp4";




const Products=()=>{
  const products=[
    {title:"Classical",description:"Classical dance refers to traditional dance forms that have strict technical structures and are deeply rooted in the cultural history of their respective regions. Each style typically follows specific rules regarding technique, narrative, and performance, often derived from ancient dance treatises and cultural practices",
    live:true,
    case :true
  },
  {title:"Bharatnatyam",description:"Bharatanatyam is a classical Indian dance form originating from the southern state of Tamil Nadu. Known for its grace, purity, tenderness, and sculpturesque poses, Bharatanatyam is one of the oldest dance forms in India",
  live:true,
  case :true
},
   {title:"Kathak",description:"Kathak is one of the eight major forms of Indian classical dance, originating from northern India. Characterized by intricate footwork, rapid spins, and expressive gestures and facial expressions, Kathak dancers tell stories through movement, often drawing from epic tales like the Mahabharata and the Ramayana.",
    live:true,
    case :true
  },
  {
    title:"Freestyle",description:"Freestyle dance is a spontaneous, improvisational dance form that encourages individual expression and creativity. Unlike structured dance forms that follow specific rules and choreography, freestyle dance is characterized by the dancer's ability to freely interpret the music in their own unique way, using any movements that feel natural and expressive.",
    live:true,
    case :true
  },
   
   {title:"Garba",description:"Garba is a traditional folk dance from the western Indian state of Gujarat, performed predominantly during the Hindu festival of Navratri. ",
    live:true,
    case :false
  },
    {title:"Hip-Hop",description:"Kathak is one of the eight major forms of Indian classical dance, originating from northern India. Characterized by intricate footwork, rapid spins, and expressive gestures and facial expressions, Kathak dancers tell stories through movement, often drawing from epic tales like the Mahabharata and the Ramayana.",
    live:true,
    case :false
  },
    {title:"salsa",description:"Salsa is a vibrant and energetic dance form that originated in the Caribbean, particularly from influences in Cuba and Puerto Rico, and gained popularity worldwide. Characterized by its lively rhythms, fluid movements, and intricate footwork, salsa involves a series of spins, turns, and stylish movements performed in sync with a partner.",
    live:true,
    case :false
  }, 
   {title:"contemporary",description:"Contemporary dance is a fluid and expressive dance form that emerged in the mid-20th century, combining elements of classical ballet, modern dance, and other artistic movements. It is known for its versatility and innovation, allowing dancers to explore their bodies through movement, often pushing the boundaries of traditional dance aesthetics",
    live:true,
    case :false
  },
  
];

  const [pos,setPos]=useState(0);

  const mover=(val)=>{
    setPos(val*23)
  }
  
  return (
    <>
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="w-full h-full absolute  top-0 pointer-events-none "> 
      <motion.div initial={{y:pos}} animate={{y:pos+`rem`}} 
      transition={{ease:[0.76,0,0.24,1],duration:.6}}
      className="window absolute w-[28rem] h-[23rem] bg-sky-white  left-1/4 overflow-hidden ">
      <motion.div  animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:.4}} className=" w-full h-full ">
        <video  loop autoPlay muted className=" rounded-xl" >
          <source src={p1} type="video/webm" />
          Your browser does not support the video tag.
        </video>
       </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}} className=" w-full h-full "> 
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p3} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p4} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p5} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p6} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p7} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      <motion.div animate={{y:-pos+`rem`}}transition={{ease:[0.76,0,0.24,1],duration:.4}}className=" w-full h-full  ">
      <video  loop autoPlay muted className=" rounded-xl">
          <source src={p8} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
         </motion.div>
      </div>
      </div>
      
    </>
  );
};

export default Products;