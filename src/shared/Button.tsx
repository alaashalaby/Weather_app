import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
};
const Button = ({ children, ariaLabel, className,onClick }: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`${className} text-white rounded-full p-2 text-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
