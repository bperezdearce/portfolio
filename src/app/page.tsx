import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Full Stack Web Developer</span>
            <h1 className="h1 mb-6">
              Hello! I&apos;m <br /> <span className="text-accent-default">Bárbara PDA</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80"> 
            I excel at crafting seamless digital experiences. Fueled by passion, creativity and curiosity.
            </p>

          {/* button and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
          </div>

          {/* foto */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home