type textProps = {
  delay?: number;
  children: string;
  variant?: "hero" | "logo";
};

const Text = ({
  delay = 0,
  children,
  variant = "hero",
}: textProps) => {
  const shadow = "[text-shadow:0_2px_24px_rgba(0,0,0,0.45)]";

  if (variant === "logo") {
    return (
      <div className="pointer-events-none absolute top-5 left-5 z-20 md:top-6 md:left-20">
        <p 
        className={`text-right text-lg font-normal leading-none tracking-tight text-white sm:text-xl md:text-2xl 
        ${shadow}`}>
          {children}
        </p>
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 sm:bottom-20 sm:left-20 z-20">
      <h1 className={`text-center text-[clamp(2.25rem,7vw,4.75rem)] font-normal leading-[1.05] tracking-tight text-white md:text-left ${shadow}`}>
        {children}
      </h1>
    </div>
  )
}

export default Text;