import React from "react";
import { CleanupMissionsVector } from "../vectors/CleanupMissionsVector";

export const Section2 = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="w-screen min-h-screen container mx-auto flex items-center justify-around">
        {/* vector */}
        <div className="hidden lg:block">
          <CleanupMissionsVector className="h-[200rem] w-[200rem]" />
        </div>

        {/* content */}
        <div className="flex flex-col md:w-[30rem]">
          <h3 className="text-[1.2rem] font-medium uppercase mb-1 text-blue">
            How It Works
          </h3>
          <h1 className="text-[2rem] md:text-[2.5rem] font-semibold font__poppins mb-2">
            Cleanup Missions
          </h1>
          <p className="text-[1rem] !leading-[1.8rem]">
            What if there was a way to document polluted zones? A way to gather
            a team of environmental activists dedicated towards eradicating
            pollution. A way to utilize this team in the cleanup of polluted
            zones. We’ve built this at Enviroso, and we call it - Cleanup
            Missions.
          </p>
        </div>
      </div>
    </div>
  );
};
