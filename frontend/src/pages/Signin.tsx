import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = usernameRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v0/user/signin`, {
            username,
            password
        });
        
        const jwt = response.data.token;
        localStorage.setItem("authorization", jwt);
        // redirect the user to the dashboard
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-customPurple-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-5 flex flex-col justify-center items-center">

            <h1 className="font-bold text-3xl">Signin</h1>

            <div className="mt-4">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                
                <div className="flex justify-center mt-3">
                    <Button
                        variant="full-width"
                        size="md"
                        title="Signin"
                        loading={false}
                        onClick={signin}
                    />
                </div>
            </div>

            <p className="mt-3 text-gray-400">Don't have an account? Signup</p>
        </div>
    </div>
}