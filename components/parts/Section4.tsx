import React from "react";

export const Section4 = () => {
  return (
    <div className="w-screen min-h-screen p-[2rem]">
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
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

const FeatureCard = ({ Icon, Title, Description }: any) => {
  return <div className="bg-blackMuted w-full md:w-[20rem] h-[14rem]"></div>;
};
