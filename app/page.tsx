import Image from "next/image";
import bg from '@/assets/logo2.png'
import woov from '@/assets/woov.png'
import devlab from '@/assets/devlab.png'
import bay from '@/assets/bay.png'
import collab from '@/assets/collab.png'
import connect from '@/assets/connect.png'
import edge from '@/assets/edge.png'
import ramp from '@/assets/ramp.png'


export default function Home() {
  return (
    <div className="min-h-[115vh] sm:min-h-[110vh] lg:min-h-[115vh] relative overflow-hidden">
      <Image src={bg} fill priority alt="" className="object-cover scale-100 object-[45%_90%] sm:object-[45%_88%] lg:object-[45%_90%] -z-10" />
      {/* Header */}
      <header
        className="max-w-7xl border border-black/10 mx-3 sm:mx-5 lg:mx-auto pl-4 sm:pl-6 lg:pl-8 pr-1 h-12 sm:h-13 my-3 sm:my-4 backdrop-blur-[2px] rounded-full flex items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-8 lg:gap-10">
          {/* Logo */}
          <div>
            <p className="font-inter font-[500] text-[1rem] sm:text-[1.15rem] lg:text-[1.3rem]">
              NEXORA™
            </p>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-3 md:gap-4 lg:gap-5 items-center">
            <p className="font-[430] text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem]">
              Insights
            </p>
            <p className="font-[430] text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem]">
              Solutions
            </p>
            <p className="font-[430] text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem]">
              Pricing
            </p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 items-center font-inter">
          <p className="hidden xs:block sm:block font-[430] text-[0.85rem] md:text-[1rem] lg:text-[1.15rem]">
            Login
          </p>
          <div className=" h-9 sm:h-10 lg:h-11 bg-black text-white flex items-center justify-center px-4 sm:px-5 rounded-full transition-all hover:scale-[1.05]">
            <p className="text-sm sm:text-base">
              Try Now
            </p>
          </div>
        </div>
      </header>
      {/* Hero section */}
      <section className="mt-10 sm:mt-12 lg:mt-14 px-4">
        {/* Heading */}
        <p
          className="
        font-oswald
        text-[3rem]
        sm:text-[3.7rem]
        md:text-[4.3rem]
        lg:text-[5rem]
        mb-4
        justify-self-center
        w-full
        max-w-[35rem]
        px-2
        sm:px-4
        tracking-tight
        text-black/97
        text-center
        leading-[1]
        sm:leading-[1]
        lg:leading-21
        font-semibold
      "
        >
          Bold Ideas That Start With Vision.
        </p>
        {/* Description */}
        <p
          className="justify-self-center font-inter font-[480] text-center w-full max-w-[20rem] sm:max-w-[27rem] md:max-w-[30rem] lg:w-110 text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] leading-relaxed">
          We help modern brands craft digital stories that inspire action and drive results
        </p>
        <div
          className=" flex items-center gap-2 border border-gray-400 bg-black rounded-full px-5 sm:px-6 w-fit text-white py-2.5 sm:py-3 justify-self-center mt-4 transition-all hover:gap-2.5 cursor-pointer">
          <p className="font-[480] text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]">
            Get In Touch
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </section>
      {/* Footer / Trusted by */}
      <div className=" absolute bottom-0 left-0 mx-auto w-full px-4 sm:px-6 pb-3 sm:pb-4">
        <p className=" text-[1.2rem] max-sm:mt-32 sm:text-[1rem] lg:text-[1.2rem] font-[500] justify-self-center text-black text-center">
          Trusted by teams of every scale
        </p>
        {/* Logos */}
        <div
          className="grid grid-cols-3 text-center sm:grid-cols-4 lg:flex lg:justify-between items-center gap-4 sm:gap-5 lg:gap-0 max-w-7xl mx-auto my-3 sm:my-4">
          <Image src={devlab} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={woov} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={edge} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={collab} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={connect} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={ramp} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
          <Image src={bay} alt="" className="h-10 sm:h-7 lg:h-12 w-full lg:w-40 object-contain" />
        </div>
      </div>
    </div>
  );
}
