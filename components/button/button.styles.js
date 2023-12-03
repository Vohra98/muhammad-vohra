import tw from "tailwind-styled-components";
import Link from "next/link";

export const ButtonWrapper = tw.button`
    bg-primaryDark
    text-white
    text-sm
    font-bold
    py-2
    px-4
    rounded
    focus:outline-none
    focus:shadow-outline
    hover:bg-primary
    transition
    duration-300
    ease-in-out
`;

export const LinkWrapper = tw(Link)`
    bg-primaryDark
    text-white
    text-lg
    font-bold
    p-4
    rounded
    focus:outline-none
    focus:shadow-outline
    hover:bg-primary
    transition
    duration-300
    ease-in-out
`;