
interface InputProps {
    placeholder: string;
    onChange?: () => void;
}

export const Input = ({placeholder, onChange}: InputProps) => {
    return <div>
        <input type="text" placeholder={placeholder}  className="px-4 py-2 border rounded-lg mt-3 w-full outline-none text-gray-800" onChange={onChange}/>
    </div>
}