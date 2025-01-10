import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../constants/constants";

export const useContent = () => {
    const [contents, setContents] = useState([]);

    function getData() {
        axios.get(`${BACKEND_URL}/api/v0/content/get`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then((response) => {
                setContents(response.data.contents)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return {contents, getData};
}