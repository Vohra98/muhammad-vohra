import tw from "tailwind-styled-components"
import Link from "next/link";

export const HeaderWrapper = tw.div`
    flex
    justify-between
    items-center
`;

export const StyledLink = tw(Link)`
    cursor-pointer
    relative
    z-10

    hover:after:w-full

    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:h-0.5
    after:bg-primaryDark
    after:w-0
    after:transition
    after:duration-300
    after:ease-in-out
    
`;

export const SocialIconsWrapper = tw.div`
    w-1/3
    flex
    items-center
    justify-end
`;


