import data from "@/data";

type Props = {
  className: string;
};

const SocialLinks = ({ className }: Props) => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 pt-4 mt-1">
      {data.social.map(({ icon: Icon, url }, index) => (
        <a href={url} key={index} rel="noreferrer" target="_blank">
          <Icon
            className={`${className} h-8 w-8 duration-200 transition dark:text-white dark:hover:text-bright-pink hover:text-bright-pink`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
