// import { BsArrowThroughHeart } from "react-icons/bs";
import MotionWrapper from "../MotionWrapper";

const Brand = () => {
  return (
    <MotionWrapper
      animation="rotateIn"
      className="flex gap-1 items-center ps-2"
    >
      <img
        src="/img/brand/brand.png"
        alt="Fondo Hero Buho Soft"
        className="w-[48px] h-[48px]"
      />
      {/* <h1 className="text-xl font-bold uppercase">Cupido</h1> */}
    </MotionWrapper>
  );
};

export default Brand;
