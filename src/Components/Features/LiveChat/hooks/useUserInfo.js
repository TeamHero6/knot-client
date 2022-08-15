import { useEffect, useState } from "react";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/chatuser")
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, []);
    return [userInfo, setUserInfo];
};

export default useUserInfo;
