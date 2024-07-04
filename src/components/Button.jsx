import { IoIosReturnRight } from "react-icons/io";


const Button = ({title="Get Started"}) => {
  return (
    <>
      <div className="max-w-40 px-3 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between">
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight/>
      </div>
    </>
  );
};
export default Button;
