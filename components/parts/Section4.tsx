import React from "react";
import { Trash } from "~/components/icons/Trash";
import { Brain } from "../icons/Brain";
import { Cash } from "../icons/Cash";
import { Coin } from "../icons/Coin";
import { Medal } from "../icons/Medal";
import { Tasks } from "../icons/Tasks";

export const Section4 = () => {
  return (
    <div className="w-screen p-[2rem] flex flex-col justify-center pb-[10rem]">
      {/* header */}
      <div className="flex flex-col items-center justify-center mt-[4rem]">
        <h3 className="text-[1.2rem] font-medium uppercase mb-1 text-orange">
          This Is Enviroso
        </h3>
        <h1 className="text-[2rem] md:text-[2.5rem] font-semibold font__poppins mb-2">
          Tons of Amazing Features.
        </h1>
      </div>

      {/* features */}
      <div className="flex flex-wrap gap-1 lg:w-[63rem] pt-[5rem] mx-auto">
        <FeatureCard
          Icon={Trash}
          title="Cleanup Missions"
          description="Organize, schedule, and plan events to clean polluted areas. "
        />
        <FeatureCard
          Icon={Brain}
          title="Simple and Sweet"
          description="Enviroso has a beautiful and intuitive UI made for everyone."
        />
        <FeatureCard
          Icon={Coin}
          title="Reward Points"
          description="Earn cool rewards. More reason to clean the environment!"
        />
        <FeatureCard
          Icon={Tasks}
          title="Mission Tasks"
          description="Easily categorize and assign mission tasks to team members."
        />
        <FeatureCard
          Icon={Cash}
          title="Sell Merchandise"
          description="Sell merchandise for cleanups on Enviroso itself and monetize."
        />
        <FeatureCard
          Icon={Medal}
          title="Leaderboard"
          description="Increase your rank on a leaderboard by finishing missions!"
        />
      </div>

      {/* footer */}
      <h3 className="font__poppins font-bold text-lg mx-auto mt-[5rem]">
        And lots more...
      </h3>
    </div>
  );
};

const FeatureCard = ({ Icon, title, description }: any) => {
  return (
    <div className="bg-blackMuted w-full md:w-[20rem] h-[14rem] grid place-items-center p-6 mx-auto lg:mx-0">
      <div className="flex flex-col gap-3">
        <Icon fill="#C16F5D" />
        <h2 className="font__poppins font-bold text-xl">{title}</h2>
        <p className="font-medium text-md text-whiteMuted">{description}</p>
      </div>
    </div>
  );
};
