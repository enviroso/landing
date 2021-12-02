import React from "react";
import { Github } from "../icons/Github";
import { Instagram } from "../icons/Instagram";
import { Logo } from "../ui/Logo";

export const Section1 = () => {
  return (
    <div className="w-screen min-h-screen section1__bg relative flex flex-col justify-between p-[3.3rem]">
      <Nav />
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <div className="flex gap-4">
        <Social
          Icon={Github}
          href="https://github.com/enviroso"
          title="Github"
        />

        <Social
          Icon={Instagram}
          href="https://instagram.com/envirosotheapp"
          title="Instagram"
        />
      </div>
    </div>
  );
};

const Social = ({
  Icon,
  href,
  title,
}: {
  Icon: any;
  href: string;
  title: string;
}) => {
  return (
    <a href={href} title={title} target="_blank">
      <Icon className="fill-[#FFFFFF] hover:opacity-[0.6] duration-100 ease-in h-[1.4rem] w-[1.4rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[1.7rem] md:w-[1.7rem]" />
    </a>
  );
};
