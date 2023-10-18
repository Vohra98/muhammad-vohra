import Image from "next/image";
import LogoIcon from "@/icons/LogoIcon";
import { urlFor } from "@/sanity/sanity-utils";

const card = ({ name,  description, image ,email, location}) => {
    return(
        <div className="rounded-lg border border-gray-500 p-8">
            <div className="flex items-center justify-between">
                <div className="w-10 h-10">
                    <LogoIcon />
                </div>
                
                <p data-testid="description">{description}</p>
            </div>
            <div className="w-100 h-40 overflow-hidden my-8">
                <Image
                    src={urlFor(image).width(400).height(400).url()}
                    width={300}
                    height={300}
                    alt={name}
                    className="rounded-lg border border-gray-500 object-cover overflow-hidden"
                    data-testid="image"
                />
            </div>
            
            <div className="flex flex-col text-2xl text-center">
                <span data-testid="email">{email}</span>
                <span data-testid="location">Based in the {location}</span>
                
            </div>

        </div>
    )
};

export default card;
