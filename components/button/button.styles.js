import tw from "tailwind-styled-components";
import Link from "next/link";

export const ButtonWrapper = tw.button`
    bg-primaryDark
    text-white
    text-lg
    font-bold
    p-4
    rounded
    focus:outline-none
    focus:shadow-outline
    hover:bg-[#2b00a2]
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
    rounded-xl
    focus:outline-none
    focus:shadow-outline
    hover:bg-[#2b00a2]
    transition
    duration-300
    ease-in-out
`;