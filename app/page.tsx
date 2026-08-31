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
    <div className="min-h-[115vh] relative overflow-hidden">
      <Image src={bg} fill priority alt='' className='object-cover scale-100 object-[45%_90%] -z-10' />
      <header className="max-w-7xl border border-black/10 mx-auto pl-8 pr-1 h-13 my-4 backdrop-blur-[2px] rounded-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div>
            <p className="font-inter font-[500] text-[1.3rem]">NEXORA™</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="font-[430] text-[1.1rem]">Insights</p>
            <p className="font-[430] text-[1.1rem]">Solutions</p>
            <p className="font-[430] text-[1.1rem]">Pricing</p>
          </div>
        </div>
        <div className="flex gap-6 items-center font-inter">
          <p className="font-[430] text-[1.15rem]">Login</p>
          <div className="h-11 bg-black text-white flex items-center justify-center px-5 rounded-full transition-all hover:scale-[1.05]">
            <p>Try Now</p>
          </div>
        </div>
      </header>
      {/*Hero section */}
      <section className="mt-14">
        <p className="font-oswald text-[5rem] mb-4 justify-self-center w-full max-w-[35rem] px-4 tracking-tight text-black/97 text-center leading-21 font-semibold">Bold Ideas That Start With Vision.</p>
        <p className="justify-self-center font-inter font-[480] text-center w-110 text-[1.1rem]">We help modern brands craft digital stories that inspire action and drive results</p>
        <div className="flex items-center gap-2 border border-gray-400 bg-black rounded-full px-6 w-fit text-white py-3 justify-self-center mt-4  transition-all hover:gap-2.5 cursor-pointer">
          <p className="font-[480] text-[1.2rem]">Get In Touch</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </section>
      {/*footer */}
      <div className="absolute bottom-0 mx-auto w-full">
        <p className="text-[1.2rem] font-[500] justify-self-center text-black">Trusted by teams of every scale</p>
        <div className="flex justify-between max-w-7xl mx-auto my-4">
          <Image src={devlab} alt="" className=" h-8 w-35 object-cover" />
          <Image src={woov} alt="" className=" h-8 w-35 object-cover" />
          <Image src={edge} alt="" className=" h-8 w-35 object-cover" />
          <Image src={collab} alt="" className=" h-8 w-35 object-cover" />
          <Image src={connect} alt="" className=" h-8 w-35 object-cover" />
          <Image src={ramp} alt="" className=" h-8 w-35 object-cover" />
          <Image src={bay} alt="" className=" h-8 w-35 object-cover" />
        </div>
      </div>
    </div>
  );
}
