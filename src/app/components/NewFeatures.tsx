import Image from "next/image"

interface NewFeatureI {
    imgUrl: string
    title: string
    subtitle: string
}

export const NewFeatures:React.FC<NewFeatureI> = ({imgUrl, title, subtitle}) => {
  return (
    <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px] gap-3">
        <div className="w-[50px] h-[50px] rounded-[24px] bg-[#323F5D] flex justify-center items-center">
            <Image
            src={imgUrl}
            alt="icon"
            width={500}
            height={500}
            className="w-1/2 h-1/2 object-contain"
            />
        </div>
        <h1 className="font-bold text-[22px] leading-[25px] text-white">
            {title}
        </h1>
        <p className="flex-1 font-normal text-[16px] text-[#B0B0B0] leading-[25px]">
            {subtitle}
        </p>
    </div>
  )
}
