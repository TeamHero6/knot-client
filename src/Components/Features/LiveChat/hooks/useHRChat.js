import { useEffect, useState } from "react";

const useHRChat = () => {
    const [hrChat, setHrChat] = useState([]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/hrchat")
            .then((res) => res.json())
            .then((data) => setHrChat(data));
    }, []);
    return [hrChat, setHrChat];
};

export default useHRChat;
