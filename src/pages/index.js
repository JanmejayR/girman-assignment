import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";

export default function Home() {

  return (
     <main className=" w-full h-screen   homepage ">
      <Navbar />
      <section className="flex justify-center  sm:mt-16">
        <div className="flex flex-col justify-between gap-2 sm:gap-4">
           <div className="   flex justify-between gap-2 sm:gap-10">
            <div className="flex items-center pt-4 ">
            <Image 
              width={181}
              height={121}
              className=" h-[40px] w-[60px] sm:h-[60px] sm:w-[90px] md:h-[80px] md:w-[120px]  lg:h-[121px] lg:w-[181px]"
              src="/search-logo.png"
              alt="search logo"
            />
            </div>
            <span className=" text-[50px]  sm:text-[80px] md:text-[100px] pt-4 sm:pt-2 lg:pt-0 lg:text-[160px]   font-bold">Girman</span>
           </div>
           <SearchInput/>
        </div>
      </section>
     </main>
  );
}
