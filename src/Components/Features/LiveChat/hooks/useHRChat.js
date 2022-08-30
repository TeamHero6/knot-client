import { useEffect, useState } from "react";

const useHRChat = () => {
    const [hrChat, setHrChat] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/hrchat")
            .then((res) => res.json())
            .then((data) => setHrChat(data));
    }, []);
    return [hrChat, setHrChat];
};

export default useHRChat;
