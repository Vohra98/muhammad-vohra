import Link from "next/link";
import { ButtonWrapper, LinkWrapper } from "./button.styles";

interface ButtonProps {
    text: string;
    testId: string;
    onClick?: () => void;
    url?: string;
}

const Button = ({ text, url, onClick, testId } : ButtonProps) => {
    return (
        <>
            {onClick && 
                <ButtonWrapper data-testid={testId} onClick={onClick}>
                    {text}
                </ButtonWrapper>
            }

            {url &&
                <LinkWrapper
                    href={url} 
                    data-testid={testId}
                >
                    {text}
                </LinkWrapper>
            }
        </>
        
    )
}

export default Button;