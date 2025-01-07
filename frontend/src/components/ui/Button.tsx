import { ReactElement } from "react";

type Variants = "primary" | "secondary";
export type Sizes = "sm" | "md" | "lg";

interface ButtonProps {
    variant: Variants;
    size: Sizes;
    title: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles: Record<Variants, string> = {
    "primary": "bg-customPurple-600 text-white",
    "secondary": "bg-customPurple-400 text-customPurple-600"
}

const sizeStyles: Record<Sizes, string> = {
    "sm": "py-1 pl-2 pr-3",
    "md": "py-2 pl-3 pr-4",
    "lg": "py-3 pl-5 pr-6"
}

const defaultStyles = "rounded-md flex items-center font-light"

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.title} {props.endIcon}
    </button>
}