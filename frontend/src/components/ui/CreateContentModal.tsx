import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
    Youtube = "YOUTUBE",
    Twitter = "TWITTER"
}

export const CreateContentModal = ({open, onClose}) => {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();

    const [type, setType] = useState(ContentType.Youtube);
    
    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        
        await axios.post(`${BACKEND_URL}/api/v0/content/create`, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        
        onClose();
    }

    return <div>
        {open && ( 
            <div className="h-screen w-screen bg-slate-500 fixed top-0 left-0 bg-opacity-70 flex justify-center items-center">
                <div className="max-w-80 w-full rounded-xl bg-white p-4 bg">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">Create Content</h1>
                        
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>

                    <div className="mt-3">
                        <Input reference={titleRef} placeholder="Title" />
                        <Input reference={linkRef} placeholder="Link" />
                    </div>

                    <div className="mt-2">
                        <h1>Type</h1>
                        <div className="flex justify-center gap-3 p-2">
                            <Button title="Youtube" size="md" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube);
                            }} />
                            <Button title="Twitter" size="md" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter);
                            }} />
                        </div>
                    </div>

                    <div className="mt-1">
                        <Button onClick={addContent} variant="full-width" title="Add" size="md" />
                    </div>
                </div>
            </div>
        )}
    </div>
}