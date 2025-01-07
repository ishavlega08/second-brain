import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button 
          variant={"secondary"} 
          size={"md"}
          title={"Share Brain"} 
          startIcon={<ShareIcon size={"md"} />}
          onClick={() => {}}  
        />
        <Button 
          variant={"primary"} 
          size={"md"}
          title={"Add Content"} 
          startIcon={<PlusIcon size={"md"} />}
          onClick={() => {}}  
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
  )
}

export default App
