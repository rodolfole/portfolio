import BackToTop from "@/components/BackToTop";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 px-10">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <SocialLinks className="text-white" />
        <div className="flex gap-2">
          <BackToTop />
        </div>
      </div>
    </div>
  );
};

export default Footer;
