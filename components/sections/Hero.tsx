import Button from "@/components/ui/Button";
import SocialLinks from "@/components/SocialLinks";

const Hero = () => {
  return (
    <section
      className="min-h-screen max-w-7xl w-full flex justify-center md:justify-between items-center flex-col md:flex-row"
      id="home"
    >
      <div className="relative flex flex-col items-center px-9 md:p-0 lg:items-start text-xl sm:text-4xl md:text-6xl xl:text-7xl font-bold order-2 md:order-1 ">
        <span className="text-xl md:text-3xl text-black dark:text-white">
          Hello, I am
        </span>
        <h1 className="bg-gradient-to-r from-purple-600 to-bright-pink bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold tracking-tighter">
          Rodolfo Lara
        </h1>
        <p
          className="text-black dark:text-white text-base md:text-xl font-normal tracking-tight my-2 w-full md:w-[520px]"
          style={{ wordBreak: "break-word" }}
        >
          I am passionate about full-stack development that brings ideas to life
          through code. From architecture to user interface.
        </p>
        <SocialLinks className="text-black" />
        <Button className="opacity-100 p-2 mt-12 text-base rounded-lg h-12 w-44 bg-gradient-to-r from-purple-600 to-bright-pink relative ">
          <div className="absolute bg-black m-auto rounded-md h-[calc(100%-4px)] w-[calc(100%-4px)] inset-0 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-bright-pink">
            <a href="#contact">Contact Me</a>
          </div>
        </Button>
      </div>
      <div className="w-[300px] md:w-[400px] order-1 md:order-2 mb-24 md:mb-0">
        <img
          className="rounded-full w-full"
          src="/myphoto.png"
          alt="Follow us on Twitter"
        />
      </div>
    </section>
  );
};

export default Hero;
