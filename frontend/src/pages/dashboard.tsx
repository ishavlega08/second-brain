import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/ui/Sidebar"

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 bg-customPurple-200 min-h-screen">
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />

        <div className="flex justify-end gap-4">
          <Button 
            variant={"secondary"} 
            size={"md"}
            title={"Share Brain"} 
            startIcon={<ShareIcon size={"md"} />}
          />
          <Button 
            variant={"primary"} 
            size={"md"}
            title={"Add Content"} 
            startIcon={<PlusIcon size={"md"} />}
            onClick={() => {
              setModalOpen(true);
            }}  
          />
        </div>

        <div className="flex gap-4">
          <Card 
            type="TWITTER"
            title="Backpack tweet"
            link="https://x.com/Backpack/status/1876549869055431010"
          />
          <Card 
            type="YOUTUBE"
            title="Harkirat AI Mentor"
            link="https://www.youtube.com/watch?v=4tQu4e_8Ego"
          />
        </div>
      </div>
    </div>
  )
}
