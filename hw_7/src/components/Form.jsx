import axios from "axios";
import { useState } from "react";

export const Form = () => {
    const [inputValueTitle, setInpuValueTitle] = useState("")
    const [inputValueBody, setInpuValueBody] = useState("")
    const [successMessage, setSuccessMessage] = useState("");

    const postRequest = async () => {
        try {
            const { data } = await axios.post("https://dummyjson.com/posts/add", 
                { title: inputValueTitle, 
                    body: inputValueBody,
                        userId: 1 })
            setSuccessMessage("Пост успешно отправлен!");
            setInpuValueTitle("");
            setInpuValueBody("");
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <form>
            <input type="text" placeholder="title" value={inputValueTitle} onChange={(e) => setInpuValueTitle(e.target.value)}/>
            <input type="text" placeholder="body"value={inputValueBody} onChange={(e) => setInpuValueBody(e.target.value)}/>
            <button onClick={(e) => {e.preventDefault();postRequest();}}>Submit</button>

            {successMessage && <p>{successMessage}</p>}
        </form>
    )
}
