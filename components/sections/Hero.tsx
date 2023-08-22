import Button from "@/components/ui/Button";
import SocialLinks from "@/components/SocialLinks";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-white dark:bg-slate-900"
      id="home"
    >
      <div className="relative lg:absolute flex m-auto lg:top-[5%] lg:left-1/2 mb-10 w-[300px] md:w-[400px] lg:w-[600px]">
        <img
          className="rotate-180 w-full mt-14 lg:mt-32"
          src="/hero_gradient.svg"
          alt="Follow us on Twitter"
        />
      </div>
      <div className="relative flex flex-col items-center md:items-start lg:absolute lg:top-1/3 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
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
          Soy un apasionado del desarrollo full stack que da vida a las ideas a
          través del código. Desde la arquitectura hasta la interfaz de usuario.
        </p>
        <SocialLinks className="text-black" />
        <Button className="opacity-100 p-2 mt-12 text-base rounded-lg h-12 w-44 bg-gradient-to-r from-purple-600 to-bright-pink relative ">
          <div className="absolute bg-black m-auto rounded-md h-[calc(100%-4px)] w-[calc(100%-4px)] inset-0 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-bright-pink">
            <a href="#contact">Contact Me</a>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
