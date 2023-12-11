import tw from "tailwind-styled-components"

export const MenuIcon = tw.div`
    w-12
    h-12
    rounded-full
    mr-4
`;

export const MenuText = tw.div`
    flex-1
    rounded
    p-2
`;

export const MenuWrapper = tw.ul`
    absolute
    position: absolute;
    top-[100px]
    w-[230px]
    z-20
`;

export const Nav = tw.nav`
    w-1/3
    flex
    items-center
    justify-between
    relative
`;

export const NavBackground = tw.div`
    top-[-23px]
    left-[-21px]
    w-[300px]
    h-[500px]
    bg-light
    absolute
`;