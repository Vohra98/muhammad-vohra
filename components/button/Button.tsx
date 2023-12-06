import Link from "next/link";
import { ButtonWrapper, LinkWrapper } from "./button.styles";

interface ButtonProps {
    text: string;
    testId: string;
    onClick?: () => void;
    url?: string;
    className?: string;
}

const Button = ({ text, url, onClick, testId, className } : ButtonProps) => {
    return (
        <>
            {onClick && 
                <ButtonWrapper className={`${className}`} data-testid={testId} onClick={onClick}>
                    {text}
                </ButtonWrapper>
            }

            {url &&
                <LinkWrapper
                    className={`${className}`}
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