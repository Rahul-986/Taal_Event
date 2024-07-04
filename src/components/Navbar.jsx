import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto  py-4 flex items-center justify-between border-b-[1px] border-zinc-100">
       <div className="nleft flex item-center">
      <p className="text-4xl">TaalEvent</p>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture","","News"].map((elem, index) => ( 
            
            elem.length === 0 ? (<span key={index} className="w-[2px] h-7 bg-zinc-700"></span>) :(<a key={index} className="text-sm flex items-center gap-1" href="#">
            {index === 1 && (
              <span
                style={{ boxShadow: "0 0 0.59em  #00FF19" }}
                className="inline-block w-1 h-1 rounded-full bg-green-500"n
              ></span>
            )}

            {elem}
          </a>)
            
          ))}
        </div>
       </div>
       <Button/>
      </div>
    </>
  );
};
export default Navbar;
