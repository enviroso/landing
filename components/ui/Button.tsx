interface Props {
  clickHandler?: (e: any) => any;
  bg?: "accent" | "light" | "dark";
  fg?: "accent" | "light" | "dark";
  curvature?: "max" | "high" | "medium" | "low" | "none";
  size?: string;
  href?: string;
  className?: string;
}

export const Button: React.FC<Props> = ({
  clickHandler,
  bg = "accent",
  fg = "light",
  children,
  curvature = "medium",
  size = "h-[3rem] w-[10rem]",
  className = "",
  href,
}) => {
  const componentClassName = `
    ${size}

    ${bg === "accent" && "bg-accent"} 
    ${bg === "light" && "bg-white"} 
    ${bg === "dark" && "bg-black"}

    ${fg === "accent" && "text-accent"} 
    ${fg === "light" && "text-white"} 
    ${fg === "dark" && "text-black"}

    ${curvature === "max" && "rounded-full"} 
    ${curvature === "high" && "rounded-2xl"} 
    ${curvature === "medium" && "rounded-xl"} 
    ${curvature === "low" && "rounded-lg"} 

    hover:opacity-[0.6] duration-100 ease-in 
    font__poppins font-semibold
    
    ${className}
  `;

  return (
    <>
      {href ? (
        <div className={componentClassName}>
          <a
            className="w-full h-full grid place-items-center"
            onClick={clickHandler}
            href={href}
            target="_blank"
          >
            {children}
          </a>
        </div>
      ) : (
        <button className={componentClassName} onClick={clickHandler}>
          {children}
        </button>
      )}
    </>
  );
};
