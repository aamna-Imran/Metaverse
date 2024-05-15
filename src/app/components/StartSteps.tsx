import React from "react"

interface StepsI {
    number: string
    text: string
}

const StartSteps: React.FC<StepsI> =({number, text}) => {
  return (
    <div className="flex items-center gap-5">
        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] bg-[#323F5D]">
            <p className="text-white font-bold">{number}</p>
        </div>
        <p className=" flex-1 font-normal text-[16px] text-[#B0B0B0] leading-[25px]">{text}</p>
    </div>
  )
}

export default StartSteps