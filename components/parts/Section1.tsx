import React from "react";
import { Github } from "../icons/Github";
import { Instagram } from "../icons/Instagram";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

export const Section1 = () => {
  return (
    <>
      <div className="section1__bg w-screen min-h-screen flex flex-col justify-between p-[3.3rem]">
        <Nav />

        <div className="w-full lg:w-[50rem]">
          {/* Heading */}
          <h1 className="text-white text-[1rem] md:text-[2rem] font__poppins font-extrabold !leading-[1.6] mb-[1.3rem] uppercase tracking-[0.6rem]">
            A SOCIAL PLATFORM FOR ENVIRONMENTAL ACTIVISTS
          </h1>

          {/* Body */}
          <p className="text-whiteMuted lg:text-[1.4rem] tracking-wider !leading-[1.7] mb-[1.7rem] lg:w-[42rem] font-medium">
            Meet Fellow Activists, Organize and participate in cleanup missions,
            Earn reward points. Welcome to Enviroso.
          </p>

          {/* Early Access */}
          <Button
            bg="accent"
            fg="light"
            curvature="max"
            href="https://example.com"
            size="!h-[3rem] !w-[10rem]"
          >
            <span className="text-sm font_poppins">Get Early Access</span>
          </Button>
        </div>

        {/* dummy container */}
        <div></div>
      </div>

      <img
        src="/ScrollDown.png"
        alt=""
        className="absolute bottom-7 right-7 h-[5.5rem] w-[5.5rem] animate-pulse"
      />
    </>
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
