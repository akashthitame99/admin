import React from "react";
import { Loader } from "../loader/Loader";

export interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "default" | "teritary";
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  variant = "default",
  isLoading = false,
  icon,
  disabled,
  className,
  onClick,
}) => {
  const variantStyle =
    variant === "teritary"
      ? "border border-primary text-primary"
      : "text-white bg-primary";
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-5
      ${className} ${disabled && disabledStyles} ${variantStyle}`}
      disabled={disabled}
    >
      {isLoading ? <Loader /> : icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
};
