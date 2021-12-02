import React from "react";

export const Section3 = () => {
  return (
    <div className="w-screen px-[2rem] pb-[10rem]">
      <div className="w-screen container mx-auto flex items-center lg:justify-around">
        {/* content */}
        <div className="flex flex-col w-[90%] md:w-[30rem]">
          <h3 className="text-[1.2rem] font-medium uppercase mb-1 text-accent">
            Reward Points
          </h3>
          <h1 className="text-[2rem] md:text-[2.5rem] font-semibold font__poppins mb-2">
            Earn Awesome Rewards
          </h1>
          <p className="text-[1rem] !leading-[1.8rem]">
            The more you missions you participate in or host, the more reward
            points you earn. Redeem awesome perks with your reward points on
            Enviroso!
          </p>
        </div>

        {/* vector */}
        <div className="hidden lg:block relative">
          <img src="/Wallet.png" alt="" className="pr-[2rem]" />
        </div>
      </div>
    </div>
  );
};
