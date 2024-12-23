import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialProps } from "@/interfaces/interfaces";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/bperezdearce" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/barbarapda/" },
  { icon: <FaTwitter />, path: "https://x.com/barbarapda_" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
