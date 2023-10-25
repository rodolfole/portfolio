import data from "@/data";

const Skills = () => {
  return (
    <section className="max-w-7xl w-full py-40" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-bright-pink font-bold text-3xl">SKILLS</h1>
        </div>
        <div className="flex flex-wrap gap-7 pt-7 justify-center">
          {data.skills.map(({ icon: Icon, label }, index) => (
            <div key={index}>
              <Icon className={`text-black dark:text-white h-20 w-20`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
