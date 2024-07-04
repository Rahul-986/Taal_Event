const Stripe=({val})=>{
  return(
    <>
    <div className="w-[24%] px-10 py-3   border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
              <img src={val.url}  />     
              <span className="font-semibold">{val.number}</span>
    </div>
    </>
  )
};
export default Stripe;