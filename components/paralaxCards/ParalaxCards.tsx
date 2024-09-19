import {Technology} from "@/types/Technology";
interface ParalaxCardsProps {
    type: string;
    content: Technology[];
}

const ParalaxCards = ( {type, content }: ParalaxCardsProps  ) => {

    // console.log(content);

    return (
        <div
            data-testid='paralax-cards'
            className="about__gradient py-56 pb-24 z-10"
        >
            <div className="flex flex-col items-center gap-8 justify-between w-full ">
                <div className="">
                    <h3
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold mx-auto text-center"
                        data-testid="title"
                    >
                        {type}
                    </h3>
                    <div>
                        <ul
                            className={`flex flex-wrap items-center justify-start pl-4`}
                            data-testid="skills"
                        >

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ParalaxCards;