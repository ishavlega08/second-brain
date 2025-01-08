import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

export const Signin = () => {
    return <div className="h-screen w-screen bg-customPurple-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-5 flex flex-col justify-center items-center">

            <h1 className="font-bold text-3xl">Signin</h1>

            <div className="mt-4">
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                
                <div className="flex justify-center mt-3">
                    <Button
                        variant="full-width"
                        size="md"
                        title="Signin"
                        loading={true}
                    />
                </div>
            </div>

            <p className="mt-3 text-gray-400">Don't have an account? Signup</p>
        </div>
    </div>
}