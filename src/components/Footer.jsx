const Footer=()=>{
  return(
    <>
  <div className="w-full">
    <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
      <div className="basis-1/2">
        <h1 className="text-[11.5rem] font-semibold tracking-tight leading-none ml-[-2rem]">TaalEvent</h1>
      </div>
      <div className="basis-1/2 flex gap-4">
        <div className="basis-1/3">
       <h4 className="text-zinc-500 mb-10 capitalize">socials</h4>
       {["instagram","twitter","LinkedIn"].map((item,index)=><a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>)}
        </div>
        <div className="basis-1/3">
       <h4 className="text-zinc-500 mb-10 capitalize">sitemap</h4>
       {["home","work","Careers","contact"].map((item,index)=><a key={index} className="block mt-2 capitalize text-zinc-300">{item}</a>)}
        </div>
        <div className="basis-1/2 flex text-wrap">
          <p>Dance is the hidden language of the soul, translating the inexpressible into movement and rhythm.</p>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}
export default Footer;