import { SidebarItem } from "./SidebarItem"
import { HashtagIcon } from "@heroicons/react/16/solid"
import { 
    BrainIcon, 
    FileText, 
    LinkIcon, 
    TwitterIcon, 
    YoutubeIcon 
} from "lucide-react"

export const Sidebar = () => {
    return <div className="bg-white h-screen w-72 border-r fixed left-0 top-0">
        <div className="flex items-center ml-3 mt-4">
            <BrainIcon className="w-10 h-10 text-customPurple-600" />
            <h1 className="text-2xl font-semibold ml-3">Second Brain</h1>
        </div>

        <div className="mt-10 ml-4">
            <SidebarItem text="Tweets" icon={<TwitterIcon className="w-6 h-6" />} />
            <SidebarItem text="Videos" icon={<YoutubeIcon className="w-6 h-6" />} />
            <SidebarItem text="Documents" icon={<FileText className="w-6 h-6" />} />
            <SidebarItem text="Links" icon={<LinkIcon className="w-6 h-6" />} />
            <SidebarItem text="Tags" icon={<HashtagIcon className="w-6 h-6" />} />
        </div>
    </div>
}