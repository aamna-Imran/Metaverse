import { fadeIn } from "@/config/motion";
import { motion } from "framer-motion";
import Image from "next/image";

interface InsightI {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard: React.FC<InsightI> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      I
      <Image
        src={imgUrl}
        alt="insight"
        width={1000}
        height={1000}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[30px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[36px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-5 font-normal lg:text-[18px] text-[14px] text-[#B0B0B0]">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image
            src={"/arrow.svg"}
            alt="arrow"
            width={500}
            height={500}
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
