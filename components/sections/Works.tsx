import data from "@/data";

const Works = () => {
  return (
    <section className="max-w-7xl w-full pt-40" id="works">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-bright-pink font-bold text-3xl">WORKS</h1>
        </div>
        <div
          className="
            flex
            flex-wrap
            gap-8
            justify-center
            mt-5
            p-8
            pt-24
            sm:p-0 
            w-full
          "
        >
          {data.works.map(
            ({ description, github, preview, name, web }, index) => (
              <div
                className="relative shadow-xl overflow-hidden h-[400px] w-full md:w-[400px] bg-slate-100 rounded-xl group"
                key={index}
              >
                <img
                  alt={`Work ${name}`}
                  className="object-cover w-full h-full transition duration-200 group-hover:scale-105"
                  src={preview}
                  loading="eager"
                />
                <div className="opacity-0 group-hover:opacity-100 p-8 flex transition duration-200 flex-col items-start justify-end absolute w-full h-full inset-0 z-10 bg-gradient-to-b from-transparent  to-black/80">
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <p className="w-full text-white/80">{description}</p>
                  <div className="flex gap-3 w-full mt-3">
                    <a className="opacity-100 text-base rounded-lg h-10 w-32 bg-gradient-to-r from-purple-600 to-bright-pink relative flex justify-center items-center" href={github} rel="noreferrer" target="_blank">
                      Repository
                    </a>
                    <a className="opacity-100 text-base rounded-lg h-10 w-32 bg-gradient-to-r from-purple-600 to-bright-pink relative flex justify-center items-center" href={web} rel="noreferrer" target="_blank">
                      <span className="absolute bg-black m-auto rounded-md h-[calc(100%-4px)] w-[calc(100%-4px)] inset-0 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-bright-pink">
                        Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
