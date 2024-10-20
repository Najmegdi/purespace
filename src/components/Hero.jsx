
import { Link } from "react-router-dom";
import sofa from '/assets/sofa.webp';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"; 
import FeaturedProducts from "./FeaturedProducts";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 items-center">
      <div className="relative hidden lg:block rounded-box">
        <img
          src={sofa}
          alt="sofa"
          className="rounded-box h-[45rem] w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex items-center">
          <Link
            className="flex "
            to="/products"
          >
            <div className="bg-base-100 text-base-content px-5 py-2 rounded-full shadow-lg">View Product</div>
            <div className="bg-base-100 p-2 rounded-full shadow-md ">
            <ArrowUpRightIcon className="h-6 w-6 text-base-content" />
          </div>
          </Link>
        </div>
      </div>
      <div className="p-8 bg-base-200 rounded-box">
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl self-start text-left">
            discover the essence of minimalist design & style
          </h1>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
};
export default Hero;