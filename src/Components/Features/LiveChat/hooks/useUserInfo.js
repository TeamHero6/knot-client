import { useEffect, useState } from "react";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/chatuser")
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, []);
    return [userInfo, setUserInfo];
};

export default useUserInfo;
