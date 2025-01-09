import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link?: string;
    type: "YOUTUBE" | "TWITTER";
}

export const Card = ({title, link, type}: CardProps) => {
    return <div className="p-4 bg-white rounded-xl max-w-80 h-full overflow-hidden  border border-gray-200">
        <div className="flex justify-between">
            <div className="flex items-center text-lg font-semibold">
                <div className="text-gray-600 pr-2">
                    <ShareIcon size="md" />
                </div>    
                {title}
            </div>
            <div className="flex text-gray-400 items-center">
                <div className="pr-2">
                    <a href={link} target="_blank">
                        <ShareIcon size="md" />
                    </a>
                </div>
                <ShareIcon size="md" />
            </div>
        </div>

        <div className="mt-5">
            {type === "YOUTUBE" && link && (
                <iframe className="w-full rounded-xl" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
            )}

            {type === "TWITTER" && link && (
                <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>
            )}            
        </div>
    </div>
}