import { Sizes } from "../components/ui/Button"

export interface IconProps {
    size: Sizes
}

export const iconSizeVariants: Record<Sizes, string> = {
    "sm": "size-3",
    "md": "size-5",
    "lg": "size-6"
}