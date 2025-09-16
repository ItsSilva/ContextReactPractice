import { NameContext } from "../contexts/NameContext";
import { useContext, useState } from "react";

const Input = () => {
    const { setName } = useContext(NameContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputValue);
        setInputValue("");
        console.log("Name added:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add Name</button>
        </form>
    );
};
export default Input;