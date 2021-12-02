import { Button } from "../ui/Button";

export const Section5 = () => {
  return (
    <div className="section5__bg w-screen py-[9rem] mb-[2rem] grid place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="font__poppins font-bold text-[1.5rem] lg:text-[2.2rem] mb-[1rem]">
          Sign Up For Private Beta Access.
        </h1>
        <p className="font-medium text-[1rem] lg:text-[1.5rem] mb-[2rem]">
          It takes less than two minutes!
        </p>
        <Button
          bg="light"
          fg="dark"
          curvature="max"
          href="https://example.com"
          size="!h-[3rem] !w-[10rem]"
        >
          Take Me There
        </Button>
      </div>
    </div>
  );
};
