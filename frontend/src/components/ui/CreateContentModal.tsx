import { CrossIcon } from "../../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

export const CreateContentModal = ({open, onClose}) => {
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
                        <Input placeholder="Title" />
                        <Input placeholder="Link" />
                    </div>

                    <div className="mt-5 flex justify-center">
                        <Button variant="full-width" title="Submit" size="md" />
                    </div>
                </div>
            </div>
        )}
    </div>
}