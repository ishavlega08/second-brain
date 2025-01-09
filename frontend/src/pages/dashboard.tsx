import { useEffect, useState } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/ui/Sidebar"
import { useContent } from "../hooks/useContent"

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, getData} = useContent();

  useEffect(() => {
    getData();
  }, [modalOpen])

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 bg-customPurple-200 min-h-screen">
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />

        <div className="flex justify-between items-center">
          <div className="ml-5">
            <h1 className="text-3xl font-semibold">All Notes</h1>
          </div>

          <div className="flex gap-4">
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
        </div>

        <div className="flex gap-4 mt-11 ml-5 flex-wrap">
          {contents.map(({ type, title, link }) => <Card 
            type={type}
            title={title}
            link={link}
          />)}
        </div>
      </div>
    </div>
  )
}
